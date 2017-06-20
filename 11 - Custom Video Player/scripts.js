/* Get all elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = progress.querySelector('.progress__filled');


const play = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const sizeButton = player.querySelector('[data-size]');
const ranges = player.querySelectorAll('.player__slider');

/* Build fonction */
function playVideo(e) {
  console.log(e)
  if (e.type === 'click') {
    video.paused ? video.play() : video.pause();
  } else if (e.type && e.keyCode === 32) {
    video.paused ? video.play() : video.pause();
  }
  // const method = video.paused ? 'play' : 'pause';
  // video[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❙ ❙';
  // play.innerHTML = icon;
  play.textContent = icon;
}

function skipVideo() {
  var skip = this.dataset.skip;
  // console.log(typeof skip);
  // console.log(typeof parseFloat(skip));
  video.currentTime += parseFloat(skip);
}

function changeVideoConfig() {
  // if (this.name === 'volume') {
  //   video.volume = parseFloat(this.value);
  // } else if (this.name === 'playbackRate') {
  //   video.playbackRate = parseFloat(this.value);
  // }
  video[this.name] = this.value
}

function updateProgressBar() {
  // var ratio = (video.duration - video.currentTime) / video.duration;
  // var ratioBar = progress.offsetWidth * ratio;
  // var barWidth = progress.offsetWidth - ratioBar;
  // progressBar.style.flexBasis = `${barWidth}px`;
  var percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function changeVideoTime(e) {
  var percent = (e.layerX / progress.offsetWidth);
  video.currentTime = video.duration * percent;
}

function fullScreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
}

/* Events listener configuration */
video.addEventListener('click', playVideo);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', updateProgressBar)

play.addEventListener('click', playVideo);

skipButtons.forEach(button => button.addEventListener('click', skipVideo));

ranges.forEach(range => range.addEventListener('change', changeVideoConfig));
ranges.forEach(range => range.addEventListener('mousemove', changeVideoConfig));

let mousedown = false
progress.addEventListener('click', changeVideoTime);
progress.addEventListener('mousemove', (e) => mousedown && changeVideoTime(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

sizeButton.addEventListener('click', fullScreen)

document.addEventListener('keydown', playVideo);

