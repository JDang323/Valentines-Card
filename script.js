const screens = document.querySelectorAll(".screen");

function showScreen(id) {
  screens.forEach(screen => screen.classList.remove("active"));
  document.getElementById(id).classList.add("active");

    if (id === "screen-final" && !finalMusicPlayed) {
    finalMusic.play();
    finalMusicPlayed = true;
  }
  
}

let noScale = 1;
let yesScale = 1;

const finalMusic = document.getElementById("finalMusic");
let finalMusicPlayed = false;

// List of prompts
const prompts = [
  "Do you want candy? 🍬",
  "Are you sure that's the right answer? :)",
  "Do you want hugs? 🤗",
  "Do you want ice cream? 🍦",
  "Please try again!",
  "Do you want a puppy? 🐶",
  "I don't think you really want one",
  "Do you want chocolates? 🍫",
  "I love you so try the other one",
  "Do you want a movie night? 🎬",
  "Keep clickin, and you'll be stuck here for a bit!",
  "PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE PLEASE"
];

let promptIndex = 0;

const loopMessage = document.getElementById("loopMessage");
const loopNoBtn = document.getElementById("loopNoBtn");
const loopYesBtn = document.getElementById("loopYesBtn");


const yesBtn = document.getElementById("yesBtn");
const yesBtn1 = document.getElementById("yesBtn1");
const noBtn = document.getElementById("noBtn");
const noBtn1 = document.getElementById("noBtn1");
const nextBtn = document.getElementById("nextBtn");

////////////////////// Screen 1: Question ////////////////////////////////
// No button silliness
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 300;
  const y = Math.random() * 120;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// No button silliness
noBtn.addEventListener("click", () => {
  const x = Math.random() * 300;
  const y = Math.random() * 120;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

////////////////////// Screen 2: Question ////////////////////////////////
// No button silliness - Sure page
noBtn1.addEventListener("click", () => {
  yesScale += 0.3;
  //if (noScale < 0.4) noScale = 0.4; // don't disappear completely
  yesBtn1.style.transform = `scale(${yesScale})`;
});

////////////////////// Screen 3: Sure SURE ////////////////////////////////
// No button silliness - Sure2 page
noBtn2.addEventListener("click", () => {
  noScale -= 0.1;
  //if (noScale < 0.4) noScale = 0.4; // don't disappear completely
  noBtn2.style.transform = `scale(${noScale})`;
});

// Clicking No → go to next message
loopNoBtn.addEventListener("click", () => {
  promptIndex = (promptIndex + 1) % prompts.length; // loops back
  loopMessage.textContent = prompts[promptIndex];

  /* Optional: make No button move around
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 80 - 40;
  loopNoBtn.style.transform = `translate(${x}px, ${y}px)`;*/
});



////////////////////// Screen transitions //////////////////////////////////
yesBtn.addEventListener("click", () => {
  showScreen("screen-sure");
});

yesBtn1.addEventListener("click", () => {
  showScreen("screen-sure2");
});

yesBtn2.addEventListener("click", () => {
  showScreen("screen-loop");
});

// Clicking Yes → move to next screen
loopYesBtn.addEventListener("click", () => {
  showScreen("screen-yes"); // or whichever screen
});

nextBtn2.addEventListener("click", () => {
  showScreen("screen-final");
});

nextBtn3.addEventListener("click", () => {
  showScreen("screen-final1");
});


const slides = document.querySelectorAll(".carousel-item");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

// Auto-rotate every 3 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 1000);
