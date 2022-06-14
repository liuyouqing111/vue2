// 屏幕rem适配
import Vue from 'vue'
export default function setRem () {
  const baseSize = 100
  const minClient = 1440
  const clientWidth = document.documentElement.clientWidth
  let scale = clientWidth / 1920
  if (scale < (minClient / 1920)) {
    scale = minClient / 1920
  }
  document.documentElement.style.fontSize = baseSize * scale + 'px'
  Vue.prototype.$_currentRem = baseSize * scale
  window.onresize = setRem
}
