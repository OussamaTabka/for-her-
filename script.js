const screens = document.querySelectorAll(".screen");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const music = document.getElementById("music");
const emotionalText = document.getElementById("emotionalText");

function showScreen(id) {
  screens.forEach(screen => screen.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// First continue
function goToQuestion() {
  showScreen("screen2");
}

// No button escape
noBtn.addEventListener("mouseover", () => {
  noBtn.style.left = Math.random() * 80 + "%";
  noBtn.style.top = Math.random() * 80 + "%";
});

// Yes button
yesBtn.addEventListener("click", () => {
  showScreen("screen3");
  music.play();
  startTyping();
});

function startTyping() {
  const text =
    "Okay… jokes aside. Even though we’re far apart, you mean so much to me. Every day with you feels special, and I’m really grateful for you.";
  let i = 0;
  emotionalText.innerHTML = "";

  const interval = setInterval(() => {
    if (i < text.length) {
      emotionalText.innerHTML += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 50);
}

// Second continue
function goFinal() {
  showScreen("screen4");
}
