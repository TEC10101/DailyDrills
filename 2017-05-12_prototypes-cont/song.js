// Constructor function to make song objs
function Song(title, artist, duration, type) {

  Media.call(this, title, duration, type);
  this.artist = artist;
}

// Prototype chain... how you create inheritance in JS.
Song.prototype = Object.create(Media.prototype);


/* Cutting this into media.js
Song.prototype.toHTML = function() {
  let htmlString = '<li';
  if (this.isPlaying === true){
    htmlString += ' class="current"'
  }
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' - ';
  htmlString += this.artist;
  htmlString += '<span class="duration">';
  htmlString += this.duration; 
  htmlString += '</span></li>';
  
  return htmlString;
};
*/