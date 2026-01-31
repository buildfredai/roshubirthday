const targetDate = new Date("November 10, 2026 00:00:00").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const gap = targetDate - now;

  if (gap <= 0) {
    document.body.innerHTML = `
      <div style="text-align:center;color:white;">
        <h1>🎉 Happy Birthday Roshu 🎂💖</h1>
        <p>You mean the world to me ✨</p>
      </div>
    `;
    return;
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  document.getElementById("days").innerText = Math.floor(gap / day);
  document.getElementById("hours").innerText = Math.floor((gap % day) / hour);
  document.getElementById("minutes").innerText = Math.floor((gap % hour) / minute);
  document.getElementById("seconds").innerText = Math.floor((gap % minute) / second);
};

setInterval(updateCountdown, 1000);


// Time-based Easter Egg message
const easterEgg = document.getElementById("easter-egg");
const hour = new Date().getHours();

let message = "";

if (hour >= 5 && hour < 11) {
  message = "Good morning ☀️ another day closer to something special.";
} else if (hour >= 11 && hour < 18) {
  message = "Time is moving… and so are my thoughts 💭";
} else if (hour >= 18 && hour < 23) {
  message = "It’s getting late… but I’m still counting for you ✨";
} else {
  message = "You should be sleeping… I’m still here, counting 💖";
}

easterEgg.innerText = message;
