import timerRefs from "./timer-refs";

const { hoursContent, daysContent, secondsContent, minutesContent } = timerRefs;
// console.log(hoursContent, daysContent, secondsContent, minutesContent);

const finishDate = new Date("Jan 1, 2022");
// console.log(finishDate.getTime());

const startDate = Date.now();
// console.log(startDate);

function start() {
  setInterval(() => {
    let currentDate = Date.now();
    // let deltaTime = finishDate - currentDate;
    // console.log(deltaTime);

    //   let time = finishDate - currentDate;

    let deltaTime = finishDate - currentDate;

    // with interval of 1000ms we're getting the current difference between the finish and start dates

    // let days = time / (1000 * 60 * 60 * 24);
    // days = Math.floor(days);

    let days = getDaysCount(deltaTime);

    // console.log("days:", days);

    // let hours = (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
    // hours = Math.floor(hours);

    let hours = getHoursCount(deltaTime);

    // console.log("hours:", hours);

    // let minutes = (time % (1000 * 60 * 60)) / (1000 * 60);
    // minutes = Math.floor(minutes);
    let minutes = getMinutesCount(deltaTime);
    // console.log("minutes:", minutes);

    // let seconds = (time % (1000 * 60)) / 1000;
    // seconds = Math.floor(seconds);

    let seconds = getSecondsCount(deltaTime);

    // console.log("seconds:", seconds);

    // convert their values to 2-digit format
    days = padValue(days, 3, "-");
    hours = padValue(hours, 2, "0");
    minutes = padValue(minutes, 2, "0");
    seconds = padValue(seconds, 2, "0");

    // transfer to markup
    // daysContent.textContent = days;
    insertDate(daysContent, days);
    // hoursContent.textContent = hours;
    insertDate(hoursContent, hours);
    // minutesContent.textContent = minutes;
    insertDate(minutesContent, minutes);
    // secondsContent.textContent = seconds;
    insertDate(secondsContent, seconds);
  }, 1000);
}
start();

function insertDate(place, value) {
  place.textContent = value;
}

function padValue(value, num, symbol) {
  return String(value).padStart(num, symbol);
}

function getDaysCount(deltaTime) {
  return Math.floor(deltaTime / (1000 * 60 * 60 * 24));
}

function getHoursCount(deltaTime) {
  return Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
}

function getMinutesCount(deltaTime) {
  return Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60));
}

function getSecondsCount(deltaTime) {
  return Math.floor((deltaTime % (1000 * 60)) / 1000);
}
