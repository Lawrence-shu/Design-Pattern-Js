/* 驾考车对象 */
class ExamCar {
    constructor(carId) {
      this.carId = carId
      this.usingState = false    // 是否正在使用
    }
    examine(candidateId) {
      return new Promise((resolve => {
        this.usingState = true
        console.log(`考生- ${ candidateId } 开始在驾考车- ${ this.carId } 上考试`)
        setTimeout(() => {
          this.usingState = false
          console.log(`%c考生- ${ candidateId } 在驾考车- ${ this.carId } 上考试完毕`, 'color:#f40')
          resolve()                       // 0~2秒后考试完毕
        }, Math.random() * 2000)
      }))
    }
}

/* 考生对象 */
class Candidate {
  constructor (candidateId) {
    this.candidateId = candidateId
  }
}

/* 享元模式对象池 */
class FlyWeightPool {
  constructor() {
    this.examCarPool = []
    this.candidatePool = []
    this.candidateQueue = []
  }

  createPool(poolType, num) {
    for(let i = 1; i <= num; i++) {
      if(poolType === 'car') {
        this.examCarPool.push(new ExamCar(this.examCarPool.length + 1))
      } else {
        this.candidatePool.push(new Candidate(this.candidatePool.length + 1))
      }
    }
  }
  
  getUnUsingExamCar() {
    return this.examCarPool.find(car => !car.usingState)
  }

  startExamine(candidateId) {
    const examCar = this.getUnUsingExamCar()    // 找一个未被占用的驾考车
    if (examCar) {
      examCar.examine(candidateId)           // 开始考试，考完了让队列中的下一个考生开始考试
        .then(() => {
          const nextCandidateId = this.candidateQueue.length && this.candidateQueue.shift()
          nextCandidateId && this.startExamine(nextCandidateId)
        })
    } else { // 没有空闲的车，则进入队列
      this.candidateQueue.push(candidateId)
    }
  }

  registerCandidates() {
    this.candidatePool.forEach(({ candidateId }) => this.startExamine(candidateId))
  }

}

const flyWeightPool = new FlyWeightPool()
flyWeightPool.createPool('car', 3)
flyWeightPool.createPool('candidate', 10)

flyWeightPool.registerCandidates()

