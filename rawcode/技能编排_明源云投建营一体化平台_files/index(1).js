;(function () {
  try {
    var s = new URL(import.meta.url)
    s.searchParams.set('t', Date.now())
    s.searchParams.set('visible', '1')
    var el = document.createElement('script')
    el.type = 'module'
    el.src = s.origin + '/gptbuilder/assistant/loader.js' + s.search
    var e = document.getElementsByTagName('head')[0]
    e.appendChild(el)
  } catch (e) {
    console.log(e)
  }
})()
