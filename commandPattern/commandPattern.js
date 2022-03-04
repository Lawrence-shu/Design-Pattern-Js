

// 移动对象类
class Role {
  constructor(x, y, imgSrc) {
    this.x = x
    this.y = y
    this.canvas = document.getElementById('my-canvas')
    this.ctx = this.canvas.getContext('2d')
    this.img = new Image()
    this.img.style.width = CanvasStep
    this.img.style.height = CanvasStep
    this.img.src = imgSrc
    this.img.onload = () => {
      this.ctx.drawImage(this.img, x, y, CanvasStep, CanvasStep)
      this.move(0, 0)
    }
  }
  
  move(x, y) {
    this.ctx.clearRect(this.x, this.y, CanvasStep, CanvasStep)
    this.x += x
    this.y += y
    this.ctx.drawImage(this.img, this.x, this.y, CanvasStep, CanvasStep)
  }
}




// 向上移动命令类
class MoveUpCommand {
  constructor(receiver) {
      this.receiver = receiver
  }
  
  execute(role) {
    this.receiver.move(0, -CanvasStep)
  }
}
// 向下移动命令类
class MoveDownCommand {
  constructor(receiver) {
    this.receiver = receiver
  }
  
  execute(role) {
    this.receiver.move(0, CanvasStep)
  }
}
// 向左移动命令类
class MoveLeftCommand {
  constructor(receiver) {
    this.receiver = receiver
  }
  
  execute(role) {
    this.receiver.move(-CanvasStep, 0)
  }
}
// 向右移动命令类
class MoveRightCommand {
  constructor(receiver) {
    this.receiver = receiver
  }
  
  execute(role) {
    this.receiver.move(CanvasStep, 0)
  }
}
// 发布命令
const setCommand = function(element, command) {
  element.onclick = function() {
    command.execute()
  }
}
