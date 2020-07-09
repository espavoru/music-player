const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Music
const songs = [
  {
    name: "bwtech-1",
    displayName: "Electric Chill",
    artist: "BWTech"
  },
  {
    name: "bwtech-2",
    displayName: "Seven Nation",
    artist: "BWTech"
  },
  {
    name: "bwtech-3",
    displayName: "Goodnight Disco Queen",
    artist: "BWTech"
  },
  {
    name: "metric-1",
    displayName: "Front Row",
    artist: "BWTech"
  }
];

// Check if Playing
let isPlaying = false;

// Play
const playSong = () => {
  isPlaying = true;

  playBtn.classList.replace("fa-play", "fa-pause");
  playBtn.setAttribute("title", "Pause");

  music.play();
};

// Pause
const pauseSong = () => {
  isPlaying = false;

  playBtn.classList.replace("fa-pause", "fa-play");
  playBtn.setAttribute("title", "Play");

  music.pause();
};

// Play or Pause Event Listener
playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
const loadSong = (song) => {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
};

// On Load - Select First Song
loadSong(songs[0]);
