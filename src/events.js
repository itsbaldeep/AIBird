let jump = 0;

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
