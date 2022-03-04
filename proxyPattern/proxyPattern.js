class Leek {
  constructor (name) {
    this.name = name
    this.investmentDesire = false
  }

  investMent() {
    console.log('开始被割韭菜')
  }
}

const l = new Leek('sck')
const p = new Proxy(l, {
  set(obj, prop, val) {
    if (prop !== 'investmentDesire') {
      return
    }
    if (!obj.investmentDesire && val) {
      obj.investmentDesire = true
      obj.investMent()
    }
    return true
  }
})

p.investmentDesire = true