class Singleton {
  constructor () {
    if(!Singleton.instance) {
      Singleton.instance = this
    }
    return Singleton.instance
  }
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }
}

const a = new Singleton()
const b = Singleton.getInstance()
// const b = new Singleton()
console.log('a==b', a===b)

/* 功能类 */
class Car {
  constructor(carType) { 
    this.carType = carType
  }
}

class SingletonCar {
  constructor(carType) {
    if(!SingletonCar.instance) {
      SingletonCar.instance = new Car(carType)
    }
    return SingletonCar.instance
  }
}

const car_1 = new SingletonCar('car_1')
const car_2 = new SingletonCar('car_2')

console.log('car_1 === car_2', car_1 === car_2)