window.onload = function () {

  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const noText = document.getElementById("noText");
  const music = document.getElementById("bgMusic");

  const page1 = document.getElementById("page1");
  const page2 = document.getElementById("page2");

  yesBtn.addEventListener("click", function () {

    if (music) {
      music.play().catch(() => {});
    }

    createHearts();
    startRoseRain();

    page1.classList.remove("active");
    page2.classList.add("active");
  });

  noBtn.addEventListener("click", function () {
    noBtn.style.transform =
      `translate(${Math.random()*200-100}px, ${Math.random()*200-100}px)`;
    noText.innerText = "Sorry 😌 you have only one option… like your love 💖";
  });

  document.getElementById("noteBtn").onclick = () => {
    document.getElementById("popup").style.display = "flex";
  };

  function createHearts() {
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement("div");
      heart.innerHTML = "💖";
      heart.style.position = "fixed";
      heart.style.left = Math.random()*100 + "vw";
      heart.style.top = "100vh";
      heart.style.fontSize = "24px";
      heart.style.animation = "floatUp 3s linear";
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 3000);
    }
  }

  function startRoseRain() {
    setInterval(() => {
      const rose = document.createElement("div");
      rose.innerHTML = "🌹";
      rose.className = "rose";
      rose.style.left = Math.random()*100 + "vw";
      document.body.appendChild(rose);
      setTimeout(() => rose.remove(), 7000);
    }, 500);
  }
};

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
