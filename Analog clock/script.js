// Clock
const hourClock = document.querySelector(".hour");
const minutesClock = document.querySelector(".min");
const secondsClock = document.querySelector(".sec");

// Date
const dayWeekDate = document.querySelector(".day-week");
const dayDate = document.querySelector(".day");
const monthDate = document.querySelector(".month");
const yearDate = document.querySelector(".year");

// Set Clock
const setClock = () => {
  let day = new Date();

  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  // Add a rotation to the elements
  hourClock.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minutesClock.style.transform = `rotateZ(${mm}deg)`;
  secondsClock.style.transform = `rotateZ(${ss}deg)`;
};

// first time
setClock();

// update every 1000 ms -> 1sec
setInterval(setClock, 1000);

// Set Date
const setText = () => {
  let date = new Date();

  let dayWeek = date.getDay();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  // Get the date of the week and show it

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wensday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Get the month of the year and show it
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  dayWeekDate.innerHTML = `${days[dayWeek]}`;
  dayDate.innerHTML = day;
  monthDate.innerHTML = `${months[month]},`;
  yearDate.innerHTML = year;
};

setInterval(setText, 1000);
