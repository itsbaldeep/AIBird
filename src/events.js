let jump = 0;
let gravity = 5;
let lift = 5;
let speed = 5;
let godMode = 0;

// Space key
canvas.addEventListener("keydown", e => (e.key == " " ? (jump = 1) : 0));
canvas.addEventListener("keyup", e => (e.key == " " ? (jump = 0) : 0));

// Mouse click
canvas.addEventListener("mousedown", e => (jump = 1));
canvas.addEventListener("mouseup", e => (jump = 0));

// Touch
canvas.addEventListener("touchstart", e => (jump = 1));
canvas.addEventListener("touchend", e => (jump = 0));
canvas.addEventListener("touchstart", e => e.preventDefault());

// Settings
document
  .querySelector("#gravityChangeButton")
  .addEventListener(
    "click",
    () => (gravity = parseInt(document.querySelector("#gravity").value))
  );

document
  .querySelector("#liftChangeButton")
  .addEventListener(
    "click",
    () => (lift = parseInt(document.querySelector("#lift").value))
  );
document
  .querySelector("#speedChangeButton")
  .addEventListener(
    "click",
    () => (speed = parseInt(document.querySelector("#speed").value))
  );
document
  .querySelector("#godMode")
  .addEventListener("click", () => (godMode = !godMode));
