let jump = 0;
let gravity = 5;
let lift = 5;
let speed = 5;
let godMode = 0;

// Space key
document.addEventListener("keydown", e => (e.keyCode == 32 ? (jump = 1) : (jump = 0)));
document.addEventListener("keyup", e => (e.keyCode == 32 ? (jump = 0) : (jump = 0)));

// Mouse click
canvas.addEventListener("mousedown", () => (jump = 1));
canvas.addEventListener("mouseup", () => (jump = 0));
canvas.addEventListener("mousedown", e => e.preventDefault());

// Touch
canvas.addEventListener("touchstart", () => (jump = 1));
canvas.addEventListener("touchend", () => (jump = 0));
canvas.addEventListener("touchstart", e => e.preventDefault());

// Settings
document
  .querySelector("#gravityChangeButton")
  .addEventListener("click", () => (gravity = parseInt(document.querySelector("#gravity").value)));

document
  .querySelector("#liftChangeButton")
  .addEventListener("click", () => (lift = parseInt(document.querySelector("#lift").value)));

document
  .querySelector("#speedChangeButton")
  .addEventListener("click", () => (speed = parseInt(document.querySelector("#speed").value)));

document.querySelector("#godMode").addEventListener("click", () => {
  godMode = !godMode;
  document.querySelector("#godMode").style.backgroundColor = godMode ? "green" : "red";
});
