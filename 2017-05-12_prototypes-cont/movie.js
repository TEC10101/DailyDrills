// Constructor function to make Movie objs
function Movie(title, year, duration) {
  
  Media.call(this, title, duration);
  this.year = year;
}

// Prototype chain... how you create inheritance in JS.
Movie.prototype = Object.create(Media.prototype);

Movie.prototype.toHTML = function() {
  let htmlString = '<li';
  if (this.isPlaying === true){
    htmlString += ' class="current"'
  }
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' [';
  htmlString += this.year;
  htmlString += '] ';
  htmlString += '<span class="duration">';
  htmlString += this.duration; 
  htmlString += '</span></li>';
  
  return htmlString;
};