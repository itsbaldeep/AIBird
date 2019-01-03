/*
 * This is the Bird class
 * Contains game logic and visualization
 */

class Bird {

  // Constructor function
  constructor() {

    // Transform
    this.x = canvas.width / 5 
    this.y = canvas.height / 2
    this.r = 60

    // Physics
    this.vel = 0
    this.grav = 0.8

    // Sprite index
    this.i = 0

  }

  // Jump up
  jump() {
    this.vel = -6
  }

  // Apply forces
  update() {
    this.vel += this.grav
    this.y += this.vel
  }

  // Displaying the bird
  show() {
    if (this.i++ > 30) this.i = 0
    context.drawImage(sprites.bird[+(this.i > 15)], this.x, this.y, this.r, this.r)
  }

  // Collision detection
  hits(pillar) {
    const leftEdge = pillar.x < this.x + this.r
    const rightEdge = pillar.x + pillar.w > this.x
    const topPillar = pillar.t > this.y
    const botPillar = pillar.b < this.y + this.r
    return leftEdge && rightEdge && (topPillar || botPillar)
  }


  // Offscreen detection
  offscreen() {
    return bird.y > canvas.height
  }

}
