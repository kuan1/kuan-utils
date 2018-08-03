// 播放视频
export default function opencamera(video, onFailSoHard) {
  if (navigator.getUserMedia) {
    navigator.getUserMedia({audio: true, video: true}, function(stream) {
      video.src = URL.createObjectURL(stream);
    }, onFailSoHard);
  } else if (navigator.webkitGetUserMedia) {
    navigator.webkitGetUserMedia('audio, video', function(stream) {
      video.src = window.webkitURL.createObjectURL(stream);
    }, onFailSoHard);
  } else {
    console.log('视频打开失败')
  }
}
