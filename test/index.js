import Crontab from '../src/Crontab.js'

const list = [
  {
    name: '测试任务1',
    time: ['*', '*', '*', '*', '*'],
    once: true,
    task: () => {}
  },
  {
    name: '测试任务2',
    time: ['*', '*', '*', '*', '*'],
    task: () => {}
  }
]

new Crontab(list)
