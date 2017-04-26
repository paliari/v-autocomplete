export default {
  minLen: 3,
  wait: 500,
  timeout: null,

  isUpdateItems (text) {
    if (text.length > this.minLen) {
      return true
    }
  },

  callUpdateItems (text, cb) {
    clearTimeout(this.timeout)
    if (this.isUpdateItems(text)) {
      this.timeout = setTimeout(cb, this.wait)
    }
  },

  findItem (items, text, getLabel) {
    if (!text) return
    if (items.length == 1) {
      return items[0]
    }
    for (let item of items) {
      if (getLabel(item).toLowerCase() == text.toLowerCase()) {
        return item
      }
    }
  }
}
