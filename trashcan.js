class Trashcan {
  constructor(x, y, w, h) {
    this.body = Matter.Bodies.rectangle(x, y, w, h)
    // need to add to the world
    Matter.World.add(world, this.body)
    this.w = w
    this.h = h
  }

  show() {
    // grab the position from the body created by matter.js
    const pos = this.body.position
    const angle = this.body.angle
    // after getting the angle, draw the rectangle with the rotation
    push()
    translate(pos.x, pos.y)
    rotate(angle)
    fill(255)
    rectMode(CENTER)
    // then draw the rectangle based on the position and input width and height
    rect(0, 0, this.w, this.h)
    pop()
  }
}
