let xCars = [600, 600, 600]
let yCars = [40, 96, 150]
let speedCars = [2, 2.5, 2.7]
let widthCar = 60
let heightCar = 40

function showCars() {
  for (let i = 0; i < carsImg.length; i += 1) {
    image(carsImg[i], xCars[i], yCars[i], widthCar, heightCar)
  }
}

function moveCars() {
  for (let i = 0; i < xCars.length; i += 1) {
    xCars[i] -= speedCars[i]
    //reset cars after disappearing
    if (xCars[i] < -100) {
      xCars[i] = 600
    }
  }
}
