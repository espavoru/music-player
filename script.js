const image = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const music = document.querySelector("audio");
const progressContainer = document.getElementById("progress-container");
const progressBar = document.getElementById("progress");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

let songIndex = 0;

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

// Update song info in DOM
const loadSong = (song) => {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
};

// Prev Song
const prevSong = () => {
  songIndex--;

  if (songIndex < 0) songIndex = songs.length - 1;

  loadSong(songs[songIndex]);
  playSong();
};

// Next Song
const nextSong = () => {
  songIndex++;

  if (songIndex > songs.length - 1) songIndex = 0;

  loadSong(songs[songIndex]);
  playSong();
};

// On Load - Select First Song
loadSong(songs[songIndex]);

// Update Progress Bar & Time
const updateProgressBar = (e) => {
  if (isPlaying) {
    const { duration, currentTime } = e.srcElement;

    //Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
  }
};

// Event Listeners
document.addEventListener("click", (e) => {
  // Play or Pause
  if (e.target.closest("#play")) isPlaying ? pauseSong() : playSong();

  // Play Prev Song
  if (e.target.closest("#prev")) prevSong();

  // Play Next Song
  if (e.target.closest("#next")) nextSong();
});

music.addEventListener("timeupdate", updateProgressBar);
