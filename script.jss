function startVoice() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-IN";
  recognition.onresult = function(event) {
    document.getElementById("voiceSearch").value = event.results[0][0].transcript;
  };
  recognition.start();
}

const btn = document.getElementById("darkToggle");
btn.onclick = () => {
  document.body.classList.toggle("dark-mode");
};

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.onclick = () => {
  navLinks.classList.toggle("active");
};

const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawStars() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < 200; i++) {
    ctx.fillStyle = "cyan";
    ctx.beginPath();
    ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 1, 0, 2 * Math.PI);
    ctx.fill();
  }
}
setInterval(drawStars, 100);
