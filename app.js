function displayDay() {
  let today = new Date();
  let day = today.getDay();
  let daylist = [
    "Duminica",
    "Luni",
    "Marti",
    "Miercuri",
    "Joi",
    "Vineri",
    "Sambata",
  ];
  let hrs = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  if (hrs >= 12) {
    session.innerHTML = 'PM'
  } else {
    session.innerHTML = 'AM'
  }

  if(hrs > 12) {
    hrs -= 12
  }

  document.getElementById("day").innerHTML = `${daylist[day]}`;
  document.getElementById("hour").innerHTML = hrs;
  document.getElementById("minute").innerHTML = min;
  document.getElementById("seconds").innerHTML = sec;
}

setInterval(displayDay, 10);
