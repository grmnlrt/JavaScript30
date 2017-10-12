let countdown;
const displayTime = document.querySelector('.display__time-left');
const timeEnd = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('.timer__button');
const form = document.querySelector('#custom')

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayLeft(seconds);
  const end = new Date(then)
  timeEnd.textContent = `Finish at ${end.getHours()}:${end.getMinutes()}`

  countdown = setInterval( function() {
    const timeLeft = Math.round((then - Date.now()) / 1000);
    // check if < 0
    if (timeLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display
    displayLeft(timeLeft);
  }, 1000)
}


function displayLeft(seconds) {
  // const hours = Math.floor(seconds / 60 / 60)
  const min = Math.floor(seconds / 60)
  const sec = seconds % 60
  displayTime.textContent = `${displayWithZero(min)}:${displayWithZero(sec)}`;
  // add after see correction (that why duplication code)
  document.title = `${displayWithZero(min)}:${displayWithZero(sec)}`;
}

function displayWithZero(number) {
  if (number < 10) {
    return `0${number}`
  } else {
    return number;
  }
}

function setTime() {
  timer(this.dataset.time);
}

function setCustomTime(e) {
  if (e.code === "Enter") {
    e.preventDefault();
    mins = form[0].value * 60;
    timer(mins);
    this.reset();
  }
}

buttons.forEach( button => { button.addEventListener('click', setTime)});
form.addEventListener('keydown', setCustomTime)
