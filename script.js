console.log("JavaScript is running");


// Grab elements from the HTML
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Make the "No" button dodge the mouse
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 50;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Make the "No" button dodge the mouse when clicked
noBtn.addEventListener("click", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 50;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// When "Yes" is clicked, show success screen
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: linear-gradient(135deg, #ff758c, #ff7eb3);
      color: white;
      font-family: 'Comic Sans MS', cursive;
    ">
      <h1>YAY!!! 💖</h1>
      <p>Happy Valentine’s Day 🥰</p>
      <p>I knew you'd say yes 😌</p>
    </div>
  `;
});
