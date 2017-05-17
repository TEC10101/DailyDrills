// Constructor function which doesn't have parameters
function Playlist() {
  // Create new playlist as an empty song array...
  this.songs = [];
  // ...which defaults to not playing/start at beginning
  this.nowPlayingIndex = 0;
}

Playlist.prototype.add = function(song) {
  // `this` keywork works here because it's a prototype for all (instances of) Playlists
  this.songs.push(song);
};

Playlist.prototype.play = function() {
  let currentSong = this.songs[this.nowPlayingIndex];
  currentSong.play();
};

Playlist.prototype.stop = function() {
  let currentSong = this.songs[this.nowPlayingIndex];
  currentSong.stop();
};

Playlist.prototype.next = function() {
  this.stop();
  this.nowPlayingIndex++;
  // Test if the nowPlayingIndex reaches end of array
  if(this.nowPlayingIndex === this.songs.length){
    this.nowPlayingIndex = 0;
  }
  this.play();
};

Playlist.prototype.renderInElement = function(list) {
  list.innerHTML = "";
  for(let i = 0; i< this.songs.length; i++) {
    list.innerHTML += this.songs[i].toHTML();
  }
};