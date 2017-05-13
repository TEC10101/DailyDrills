// Constructor function to make media parent objs
function Media(title, duration, type) {
  this.title = title;
  this.duration = duration;
  this.type = type;
  this.isPlaying = false;
}

Media.prototype.play = function() {
  this.isPlaying = true;
};

Media.prototype.stop = function() {
  this.isPlaying = false;
};


// Creating media.prototype.toHtml with an if clause for the HTML generation (DRY)
Media.prototype.toHTML = function() {
  let htmlString = '<li';
  if (this.isPlaying === true){
    htmlString += ' class="current"'
  }
  htmlString += '>';
  htmlString += this.title;
  console.log(this.type);
  if (this.type === "song") {
    htmlString += ' - ';
    htmlString += this.artist;
  } else if (this.type === "movie") {
    htmlString += ' [';
    htmlString += this.year;
    htmlString += '] ';
  }
  htmlString += '<span class="duration">';
  htmlString += this.duration; 
  htmlString += '</span></li>';
  
  return htmlString;
};