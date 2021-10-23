import timerRefs from "./timer-refs";
const { startBtn, stopBtn } = timerRefs;

class Timer {
  constructor(finishDate) {
    this.finishDate = finishDate;
    this.intervalId = null;
    this.deltaTime = 0;
  }
  start() {
    this.finishDate = this.finishDate.getTime();

    this.intervalId = setInterval(() => {
      let currentDate = Date.now();
      this.deltaTime = this.finishDate - currentDate;
      // console.log(this.deltaTime)
      this.insertDate(daysContent, this.getDaysCount(this.deltaTime));
      this.insertDate(hoursContent, this.getHoursCount(this.deltaTime));
      this.insertDate(minutesContent, this.getMinutesCount(this.deltaTime));
      this.insertDate(secondsContent, this.getSecondsCount(this.deltaTime));
    }, 1000);
  }
  finish() {
    clearInterval(this.intervalId);
    this.clearClockface();
  }
  clearClockFace() {
    daysContent.textContent = "00";
    hoursContent.textContent = "00";
    minutesContent.textContent = "00";
    secondsContent.textContent = "00";
  }

  padValue(value, num, symbol) {
    return String(value).padStart(num, symbol);
  }

  getDaysCount(deltaTime) {
    return this.padValue(Math.floor(deltaTime / (1000 * 60 * 60 * 24)), 3, "0");
  }
  getHoursCount(deltaTime) {
    return this.padValue(
      Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      2,
      "0",
    );
  }
  getMinutesCount(deltaTime) {
    return this.padValue(
      Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)),
      2,
      "0",
    );
  }
  getSecondsCount(deltaTime) {
    return this.padValue(Math.floor((deltaTime % (1000 * 60)) / 1000), 2, "0");
  }

  insertDate(place, value) {
    place.textContent = value;
  }
}

const newTimer = new Timer(new Date("Jan 1, 2022"));
console.log(newTimer);
newTimer.start();

startBtn.addEventListener("click", newTimer.start.bind(newTimer));
stopBtn.addEventListener("click", newTimer.finish.bind(newTimer));
