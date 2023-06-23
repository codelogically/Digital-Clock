const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const period = document.querySelector(".period");

const digitalClock = () => {
  // Get Current Time
  let time = new Date();

  let currentHours = time.getHours();
  let currentMinutes = time.getMinutes();
  let currentSeconds = time.getSeconds();
  let currentPeriod = "AM";

  // Set Time Period (AM/PM)
  if (currentHours >= 12) {
    currentPeriod = "PM";
  } else {
    currentPeriod = "AM";
  }

  // Set 12-Hours Clock
  currentHours = currentHours > 12 ? currentHours % 12 : currentHours;

  // Add 0 for the values less 10
  if (currentHours < 10) {
    currentHours = "0" + currentHours;
  }
  if (currentMinutes < 10) {
    currentMinutes = "0" + currentMinutes;
  }
  if (currentSeconds < 10) {
    currentSeconds = "0" + currentSeconds;
  }

  hours.textContent = currentHours;
  minutes.textContent = currentMinutes;
  seconds.textContent = currentSeconds;
  period.textContent = currentPeriod;
};

setInterval(digitalClock, 1000);

// Display the current date

const monthName = document.querySelector(".month-name");
const dateNum = document.querySelector(".date-num");
const dayName = document.querySelector(".day-name");
const year = document.querySelector(".year");

let date = new Date();

let currentDay = date.toLocaleString("default", { weekday: "long" });
let currentMonth = date.toLocaleString("default", { month: "long" });
let currentDate = date.getDate();
let currentYear = date.getFullYear();

// Add 0 before date number if date is less than 10
if (currentDate < 10) {
  currentDate = "0" + currentDate;
}

monthName.textContent = currentMonth + ",";
dateNum.textContent = currentDate;
dayName.textContent = currentDay;
year.textContent = currentYear;
