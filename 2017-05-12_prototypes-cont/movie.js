// Constructor function to make Movie objs
function Movie(title, year, duration, type) {
  
  Media.call(this, title, duration, type);
  this.year = year;
}

// Prototype chain... how you create inheritance in JS.
Movie.prototype = Object.create(Media.prototype);