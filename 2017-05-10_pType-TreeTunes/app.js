// Only `var` works, not `let` or `const` (I get already assigned errors)
var Playlist = new Playlist();

// Title, artist, duration
const johnnyMrB = new Song("Johnny", "Mr. B", 120);
const howdyNeighborHamburger = new Song("Howdy Neighbor", "Hamburger", 180);
const thirdSongImDoneHere = new Song("Third Song", "I'm Done Here", 20);

Playlist.add(johnnyMrB);
Playlist.add(howdyNeighborHamburger);
Playlist.add(thirdSongImDoneHere);

const playlistElement = document.getElementById('playlist');

Playlist.renderInElement(playlistElement);

const playButton = document.getElementById('play');
playButton.onclick = function (){
  Playlist.play();
  Playlist.renderInElement(playlistElement);
}

const nextButton = document.getElementById('next');
nextButton.onclick = function (){
  Playlist.next();
  Playlist.renderInElement(playlistElement);
}

const stopButton = document.getElementById('stop');
stopButton.onclick = function (){
  Playlist.stop();
  Playlist.renderInElement(playlistElement);
}