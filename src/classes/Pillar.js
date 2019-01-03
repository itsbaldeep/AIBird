/*
 * This is the Pillar class
 * Contains game logic and visualization
 */

class Pillar {

  // Constructor function
  constructor() {
    
    // Transform
    this.x = canvas.width
    this.t = Math.random() * canvas.height / 3 + canvas.height / 5
    this.gap = 200
    this.b = this.gap + this.t
    this.w = 40

    // Physics
    this.vel = 2.5

    // Check if its passed
    this.passed = false
  }

  // Displaying the pillars
  show() {
    context.beginPath()

    // Top pillar and bottom pillar
    context.rect(this.x, 0, this.w, this.t)
    context.rect(this.x, this.b, this.w, this.b)

    // Styling
    context.fillStyle = "green"
    context.fill()

    context.closePath()
  }

  // Push the pillars to left
  update() {
    this.x -= this.vel
  }
  
  // Check if it safely goes offscreen
  passes() {
    if (this.x < canvas.width / 5 && !this.passed) {
      this.passed = true;
      return true;
    }
    return false;
  }

}
