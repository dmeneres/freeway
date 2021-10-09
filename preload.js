let roadImage
let actorImage
let car1Image
let car2Image
let car3Image

let backgroundSound
let colisionSound
let pointSound

function preload() {
  roadImage = loadImage('assets/road.png')
  actorImage = loadImage('assets/actor-1.png')
  car1Image = loadImage('assets/car-1.png')
  car2Image = loadImage('assets/car-2.png')
  car3Image = loadImage('assets/car-3.png')
  backgroundSound = loadSound('assets/sounds/background.mp3')
  colisionSound = loadSound('assets/sounds/colision.mp3')
  pointSound = loadSound('assets/sounds/point.wav')
  carsImg = [car1Image, car2Image, car3Image, car1Image, car2Image, car3Image]
}
