/** 是否需要执行fastclick
 *  安卓、ios 9.9.2 通过meta禁止用户缩放已经没有300ms问题，不需要引入fastclick
 */
export function isNeedFastClick() {
  if (getMobileType().isIos) {
    const iOSVersion = /OS (\d+)_(\d+)/.exec(navigator.userAgent) || [0, 0, 0]
    const major = +iOSVersion[1]
    const minor = +iOSVersion[2]
    if (major < 9 || major === 9 && minor <= 2) {
      const metaViewport = document.querySelector('meta[name=viewport]') as any
      if (metaViewport && metaViewport.content.indexOf('user-scalable=no') === -1) {
        return true
      }
    }
  }
}

/** 获取用户手机类型 */
export function getMobileType() {
  return {
    isAndroid: /android|adr/gi.test(navigator.userAgent),
    isIos:
      /iphone|ipod|ipad/gi.test(navigator.userAgent) &&
      !/android|adr/gi.test(navigator.userAgent),
    isWeiXin: /MicroMessenger/gi.test(navigator.userAgent)
  }
}

/** 兼容安卓输入框聚焦被遮挡问题 */
export function fixedAndroidInput() {
  if (getMobileType().isAndroid) {
    document.addEventListener('focusin', (event: Event) => {
      const target = event.target as any
      window.setTimeout(function() {
        if ('scrollIntoViewIfNeeded' in target) {
          target.scrollIntoViewIfNeeded(true)
        } else {
          target.scrollIntoView()
        }
      }, 200)
    })
  }
}

/** 兼容IOS输入框失去聚焦页面滚动卡住问题 */
export function fixedIosInputBlur() {
  if (getMobileType().isIos) {
    document.addEventListener('blur', (event: Event) => {
      const target = event.target as HTMLElement,
            tagName: string = target.tagName.toLowerCase()
      if (['input', 'textarea'].indexOf(tagName) !== -1) {
        document.body.scrollIntoView(false)
      }
    }, true)
  }
}

