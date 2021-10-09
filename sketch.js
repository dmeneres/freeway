function setup() {
  createCanvas(500, 400)
}

function draw() {
  background(roadImage)
  showActor()
  showCars()
  containActor()
  moveCars()
  moveActor()
  verifyColision()
}
