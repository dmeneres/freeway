function setup() {
  createCanvas(500, 400)
  backgroundSound.loop()
}

function draw() {
  background(roadImage)
  showActor()
  showCars()
  containActor()
  moveCars()
  moveActor()
  verifyColision()
  includePoints()
  makePoint()
}
