/*
 * This is the Cloud class
 * Contains game logic and visualization
 */

class Cloud {

  // Constructor function
  constructor() {
    this.x = canvas.width
    this.y = Math.random() * canvas.height / 3 + canvas.height / 10
    this.vel = 3
  }

  // Displaying the clouds
  show() {
    context.drawImage(sprites.cloud, this.x, this.y, 100, 100)
  }

  // Move the clouds to left
  update() {
    this.x -= this.vel
  }
  
}
