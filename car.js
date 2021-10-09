let xCars = [600, 600, 600, 600, 600, 600]
let yCars = [40, 96, 150, 210, 270, 318]
let speedCars = [2, 2.5, 2.7, 5, 2.3, 3.2]
let widthCar = 60
let heightCar = 40

function showCars() {
  for (let i = 0; i < carsImg.length; i++) {
    image(carsImg[i], xCars[i], yCars[i], widthCar, heightCar)
  }
}

function moveCars() {
  for (let i = 0; i < xCars.length; i++) {
    xCars[i] -= speedCars[i]
    //reset cars after disappearing
    if (xCars[i] < -100) {
      xCars[i] = 600
    }
  }
}
