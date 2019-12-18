// 切换全屏方法
export function fullScreen(isOpen = !isFullScreen(), dom = document.documentElement) {
  let open_list = ['requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullScreen', 'msRequestFullscreen']
  let cancel_list = ['exitFullscreen', 'mozCancelFullScreen', 'webkitCancelFullScreen']
  let fn = void 0
  if (isOpen) {
    fn = open_list.find((n) => Boolean(dom[n]))
    fn && dom[fn]()
  } else {
    fn = cancel_list.find((n) => Boolean(document[n]))
    fn && document[fn]()
  }
}

// 判断是否是全屏
export function isFullScreen() {
  return document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen
}

export default fullScreen