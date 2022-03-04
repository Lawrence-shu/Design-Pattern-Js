class Builder {
  constructor(param) {
    this.param = param
  }
  
  buildPart1() {
    this.part1 = 'part1'
  }
  
  buildPart2() {
    this.part2 = 'part2'
  }
}

class Director {
  constructor(param) {
    const builder = new Builder(param)
    builder.buildPart1()
    builder.buildPart2()
    return builder
  }
}

// 获得产品实例
const product = new Director('param')