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
