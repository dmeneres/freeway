let xActor = 100
let yActor = 366
let diameterActor = 30

let colision = false

let myPoints = 0

function showActor() {
  image(actorImage, xActor, yActor, diameterActor, diameterActor)
}

function moveActor() {
  if (keyIsDown(UP_ARROW)) {
    yActor -= 3
  }
  if (keyIsDown(DOWN_ARROW)) {
    yActor += 3
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xActor += 3
  }
  if (keyIsDown(LEFT_ARROW)) {
    xActor -= 3
  }
}

function containActor() {
  if (xActor < 0) {
    xActor = 0
  }
  if (xActor > 500 - diameterActor) {
    xActor = 500 - diameterActor
  }
  if (yActor > 400 - diameterActor) {
    yActor = 400 - diameterActor
  }
}

function verifyColision() {
  for (let i = 0; i < carsImg.length; i += 1) {
    colision = collideRectCircle(
      xCars[i],
      yCars[i],
      widthCar,
      heightCar,
      xActor,
      yActor,
      diameterActor
    )
    if (colision) {
      yActor = 366
      if (positivePoints()) {
        myPoints -= 1
      }
      colisionSound.play()
    }
  }
}

function includePoints() {
  textAlign(CENTER)
  textSize(25)
  fill(color(255, 165, 0))
  text(myPoints, width / 2, 27)
}

function makePoint() {
  if (yActor < 15) {
    myPoints += 1
    pointSound.play()
    yActor = 366
  }
}

function positivePoints() {
  if (myPoints > 0) {
    return true
  } else {
    return false
  }
}
