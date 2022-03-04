const ZhangXiaoShuai = { 
  name: '张小帅', 
  family: '张小帅家', 
  info: { age: 25, height: 171, salary: 5000 }, 
  target: { age: [23, 27] } 
}

const ZhangXiaoShuaiParent = { 
  name: '张小帅家长', 
  family: '张小帅家', 
  info: null, 
  target: { height: [160, 167] } 
}

const LiXiaoMei = { 
  name: '李小美', 
  family: '李小美家', 
  info: { age: 23, height: 160 }, 
  target: { age: [25, 27] } 
}

const LiXiaoMeiParent = { 
  name: '李小美家长', 
  family: '李小美家', 
  info: null, 
  target: { salary: [10000, 20000] } 
}

const MatchMaker = {
  matchBook: {}, // 媒人的花名册
  /* 注册各方 */
  registerPersons(...personList) {
    personList.forEach(person => {
        if (this.matchBook[person.family]) {
            this.matchBook[person.family].push(person)
        } else this.matchBook[person.family] = [person]
    })
  },

  /* 检查对方家庭的孩子对象是否满足要求 */
  checkAllPurpose() {
    Object.keys(this.matchBook)    // 遍历名册中所有家庭
      .forEach((familyName, idx, matchList) =>
        matchList
          .filter(match => match !== familyName)  // 对于其中一个家庭，过滤出名册中其他的家庭
          .forEach(enemyFamily => this.matchBook[enemyFamily]  // 遍历该家庭中注册到名册上的所有成员
            .forEach(enemy => this.matchBook[familyName]
              .forEach(person =>             // 逐项比较自己的条件和他们的要求
                enemy.info && this.checkPurpose(person, enemy)
              )
            ))
      )
  },

  /* 检查对方是否满足自己的要求，并发信息 */
  checkPurpose(person, enemy) {
    const result = Object.keys(person.target)    // 是否满足自己的要求
      .every(key => {
          const [low, high] = person.target[key]
          return  enemy.info[key] >= low && enemy.info[key] <= high
      })
    this.receiveResult(result, person, enemy)
  },

  /* 通知对方信息 */
  receiveResult(result, person, enemy) {
  result
    ? console.log(`${ person.name } 觉得合适~ \t（${ enemy.name } 已经满足要求）`)
    : console.log(`${ person.name } 觉得不合适! \t（${ enemy.name } 不能满足要求！）`)
  }
}

MatchMaker.registerPersons(ZhangXiaoShuai, ZhangXiaoShuaiParent, LiXiaoMei, LiXiaoMeiParent)

MatchMaker.checkAllPurpose()