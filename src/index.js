/*
 * This is entrypoint file
 * It runs all the logic and initializes the game
 */

// Making the objects
const bird = new Bird()
let pillars = []
let clouds = []

// Score
let score = 0
let highscore = 0

// Game over function
function gameover() {
  if (score > highscore) highscore = score
  bird.y = canvas.height / 2
  bird.vel = 0
  pillars = []
  clouds = []
  score = 0
}

// Defining the draw function
function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height)

  // Clouds
  for (let cloud of clouds) {
    cloud.show()
    cloud.update()
  }

  // Bird
  bird.show()
  bird.update()
  if (input) bird.jump()
  if (bird.offscreen()) gameover()

  // Pillars
  for (let pillar of pillars) {
    pillar.show()
    pillar.update()

    // Score logic
    if (pillar.passes()) {
      score++
      if (score > highscore) highscore++
    }

    // Collision logic
    if (bird.hits(pillar)) gameover()
  }

  // Score
  context.font = `${canvas.width / 15}px Consolas`
  context.fillStyle = "white"
  context.textAlign = "center"
  context.fillText("Score: " + score.toString(), canvas.width / 2, canvas.height / 6)
  context.fillText("High Score: " + highscore.toString(), canvas.width / 2, canvas.height / 10)

  // Recursively calling the draw function
  requestAnimationFrame(draw);
}
