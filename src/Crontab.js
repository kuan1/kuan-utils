/**
 * 定时任务管理器
 * @params list {Array}
 */

export default class Crontab {
  constructor(list = [], { isDebug = true, autoStart = true } = {}) {
    this.isDebug = isDebug // 是否是debug模式
    this.list = [] // 任务列表
    this.add(list) // 添加任务
    // 自动开始执行任务
    if (autoStart) {
      this.start()
    }
  }
  // 开始执行
  start() {
    this.stop()
    this.exec()
    setTimeout(() => {
      this.start()
    }, 1000 * 60)
  }
  // 停止
  stop() {
    if (this.timer) clearTimeout(this.timer)
  }
  // 执行任务
  exec() {
    const now = new Date()
    const nowTime = [
      now.getMinutes(),
      now.getHours(),
      now.getDate(),
      now.getMonth(),
      now.getDay()
    ]

    this.list.forEach(item => {
      const { time = [], task = () => {}, name = '任务', once = false } = item
      if (this.shouldExec(time, nowTime)) {
        const format = n => (n > 9 ? n : `0${n}`)
        this.log(`\n${format(nowTime[1])}:${format(nowTime[0])}`)
        this.log(`${name} 开始执行 ...`)

        try {
          task()
        } catch (e) {
          this.log(e)
        }

        this.log(`${name} 执行完成`)

        if (once) {
          this.remove(name)
        } else {
        }
      }
    })
  }
  // 设置任务列表
  add(list = []) {
    // 任务必须有时间、任务、任务名字
    const filetrList = list.filter(item => item.time && item.task && item.name)
    if (filetrList.length < list.length) {
      this.log(`定时任务被过滤掉 ${list.length - filetrList.length} 个`)
    }
    this.list = [...this.list, ...filetrList]
    this.log(`当前定时${this.list.length}个任务...`)
  }
  // 删除任务
  remove(name) {
    const { list } = this
    this.list = list.filter(item => item.name !== name)
    if (list.length !== this.list) {
      this.log(`${name} 被删除`)
    }
  }
  // 执行日志
  log(str) {
    if (!this.isDebug) return
    console.log(str)
  }
  // 判断是否需要执行
  shouldExec(time = [], nowTime = []) {
    let isEqual = true

    for (let i = 0; i < nowTime.length; i++) {
      if (time[i] === '*') continue
      if (nowTime[i] !== time[i]) {
        isEqual = false
        break
      }
    }
    return isEqual
  }
}

/**
 * time ['分', '时', '天', '月', '星期']
 * */

// const list = [
//   {
//     name: '测试任务1',
//     time: ['*', '*', '*', '*', '*'],
//     once: true,
//     task: () => {}
//   },
//   {
//     name: '测试任务2',
//     time: ['*', '*', '*', '*', '*'],
//     task: () => {}
//   }
// ]

// new Crontab(list)
