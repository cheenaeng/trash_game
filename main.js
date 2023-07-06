let trash
let trashcan

let world, engine
let mConstraint
let ground
let ground2

function setup() {
  const canvas = createCanvas(1000, 600)
  // create an engine
  engine = Matter.Engine.create()
  //create a world
  world = engine.world
  // x,y, width and height
  trash = new Trash(40, height - 100, 30)

  trashcan = new Trashcan(800, height - 100, 100, 100)
  surrounding = new Box(0, 0, 600, 10)
  ground = new Box(300, height - 80, 1400, 10)

  // need to make a mouse object with the dom element associated with the canvas
  const mouse = Matter.Mouse.create(canvas.elt)
  const options = {
    mouse: mouse,
  }
  mConstraint = Matter.MouseConstraint.create(engine, options)
  Matter.World.add(world, mConstraint)

  Matter.Events.on(engine, 'collisionStart', (event) => {
    console.log(Matter.SAT.collides(trash.body, trashcan.body))
  })
}

function draw() {
  background(0)
  Matter.Engine.update(engine)
  trash.show()
  trashcan.show()
  ground.show()
  // ground2.show()
}
