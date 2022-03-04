class Observer {
  constructor() {
    this.subscriber = [] 
  }
  subscribe(fn) {
    this.subscriber.push(fn)
  }
  notify() {
    for(let i = 0; i < this.subscriber.length; i++) {
      this.subscriber[i]()
    }
  }
}


class Subscriber {
  constructor() {
    this.subscriber = {}
  }
  subscribe(type, fn) {
    this.subscriber[type] = fn
  }
}

class Publisher {
  constructor() {
    this.publisher = []
  }
  publish(type) {
    this.publisher.push(type)
  }
} 

class Pubsub {
  constructor(sub, pub) {
    this.subscriber = sub.subscriber
    this.publisher = pub.publisher
  }
  notify() {
    for (let i = 0; i < this.publisher.length; i++) {
      const type = this.publisher[i]
      if (this.subscriber[type]) {
        this.subscriber[type]()
      } else {
        console.log(`没有人订阅消息${type}`)
      }
    }
  }
}
const sub = new Subscriber()
const pub = new Publisher()
sub.subscribe('a', () => {
  console.log('a 被我订阅了')
})
sub.subscribe('b', () => {
  console.log('b 被我订阅了')
})
sub.subscribe('c', () => {
  console.log('c 被我订阅了')
})
pub.publish('a')
pub.publish('c')
pub.publish('d')
const pubsub = new Pubsub(sub, pub)
pubsub.notify()