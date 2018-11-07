class Bird {
  constructor() {
    this.x = width / 5; // Bird's X location
    this.y = height / 2; // Bird's Y location
    this.r = 60; // Bird's radius
    this.s = 0;
  }

  // Draw the bird as sprite, once every 15 frames
  show() {
    if (this.s % 30 == 0) this.s = 0;
    context.beginPath();
    context.drawImage(birdSprite[this.s < 15 ? 0 : 1], this.x, this.y, this.r, this.r);
    context.closePath();
    this.s++;
  }

  // Lift the bird
  up() {
    this.y -= lift * 1.5;
  }

  // Pull the bird to the ground
  update() {
    if (this.y < 0) this.y = 0;
    if (this.y + this.r < height) this.y += gravity / 3;
  }

  // Check if it hits any pillar
  hits(pillar) {
    const leftEdge = pillar.x < this.x + this.r;
    const rightEdge = pillar.x + pillar.w > this.x;
    const topPillar = pillar.t > this.y;
    const botPillar = pillar.b < this.y + this.r;
    return leftEdge && rightEdge && (topPillar || botPillar);
  }
}
