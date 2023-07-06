/**
 * TrashCan class to represent a trash can
 */
class Trash {
  /**
   *
   * @param {number} x - x coordinate
   * @param {number} y - y coordinate
   * @param {number} r - radius
   */
  constructor(x, y, r) {
    this.body = Matter.Bodies.circle(x, y, r)
    Matter.World.add(world, this.body)
    this.r = r
  }

  /**
   * function to show the trash can
   */
  show() {
    fill(255)
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
    circle(0, 0, this.r)
    pop()
  }
}

class AttachedConstraint {
  constructor(x, y, body) {
    const options = {
      pointA: {
        x: x,
        y: y,
      },
      bodyB: body,
      stiffness: 0.2,
      length: 30,
    }
    this.sling = Matter.Constraint.create(options)
    Matter.World.add(world, this.sling)
  }

  show() {
    stroke(255)
    const posA = this.sling.pointA
    const posB = this.sling.bodyB.position
    line(posA.x, posA.y, posB.x, posB.y)
  }

  throw() {
    this.sling.bodyB = null
  }
}
