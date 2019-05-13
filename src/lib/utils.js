const $local = {
  set (key, val) {
    localStorage.setItem(key, JSON.stringify(val))
  },
  get (key) {
      return localStorage.getItem(key)
  },
  remove (key) {
      localStorage.removeItem(key)
  },
    recordHistory(id, title) {
        const recordTime = Date.now()
        let history = JSON.parse(localStorage.getItem('history')) || {}
        history[id] = { id, title, recordTime }
        localStorage.setItem('history', JSON.stringify(history))
    }


}



export default {
  install (vm) {
    vm.prototype.$local = $local

  }
}