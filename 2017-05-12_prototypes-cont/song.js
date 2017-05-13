// Constructor function to make song objs
function Song(title, artist, duration, type) {

  Media.call(this, title, duration, type);
  this.artist = artist;
}

// Prototype chain... how you create inheritance in JS.
Song.prototype = Object.create(Media.prototype);