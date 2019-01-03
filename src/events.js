/*
 * This file contains event handling
 */

let input = false
let first = false

const flip = () => input = !input
function startgame() {
  if (!first) {
    requestAnimationFrame(draw)
    setInterval(() => pillars.push(new Pillar()), 1500)
    setInterval(() => clouds.push(new Cloud()), 1500)
    first = true
  }
}

// Space key
document.addEventListener("keydown", e => e.key == " " ? flip() : 0)
document.addEventListener("keyup", e => e.key == " " ? flip() : 0)

// Mouse click
canvas.addEventListener("mousedown", e => e.preventDefault())
canvas.addEventListener("mousedown", flip)
canvas.addEventListener("mouseup", flip)

// Touch
canvas.addEventListener("touchstart", e => e.preventDefault())
canvas.addEventListener("touchstart", flip)
canvas.addEventListener("touchend", flip)

// Start game
document.addEventListener("keydown", startgame)
document.addEventListener("mousedown", startgame)
document.addEventListener("touchstart", startgame)
