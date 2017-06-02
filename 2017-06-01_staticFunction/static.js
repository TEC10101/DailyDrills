'use strict';

class Bird {
  static changeColor(color) {
    this.color = color;
  }
  constructor({ color = 'red' } = {}) {
    this.color = color;
  }
}
               
let redBird = new Bird;
console.log(redBird.color);
// Won't work due to changeColor is static
//redBird.changeColor('blue');