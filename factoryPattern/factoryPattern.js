// 具有类似属性的类的集合
class Product1 {
  constructor() { this.type = 'Product1' } 
  operate() { console.log(this.type) }
}

class Product2 {
  constructor() { this.type = 'Product2' }
  operate() { console.log(this.type) }
}

class Factory {
  static createProduct(type) {
    switch(type) {
      case 'Product1':
        return new Product1()
      case 'Product2':
        return new Product2()
      default:
        throw new Error('no such product')
    }
  }
}

const prod_1 = Factory.createProduct('Product1')
prod_1.operate()		// 'Product1'										
const prod_2 = Factory.createProduct('Product3') // 'Error'