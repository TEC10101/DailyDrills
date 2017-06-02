'use strict';

class Bird {
  static changeColor(bird, color) {
    bird.color = color;
  }
  constructor({ color = 'red' } = {}) {
    this.color = color;
  }
}
               
let redBird = new Bird;
console.log(redBird.color);
// Won't work due to changeColor is static
//redBird.changeColor('blue');
               
// Will work due to passing obj in           
Bird.changeColor(redBird, 'blue');               
console.log(redBird.color);