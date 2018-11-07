class Pillar {
  constructor() {
    this.x = width; // Drawing at the right edge of canvas
    this.g = 200; // Gap between top and bottom pillar
    this.t = Math.floor((Math.random() * height) / 6) + height / 8; // Top pillar Y location
    this.b = this.g + this.t; // Bottom pillar Y location
    this.w = 40; // Width of the Pillars
    this.dx = speed; // Speed of the pillars
  }

  // Draw pillars as two yellow rectangles
  show() {
    context.beginPath();
    context.rect(this.x, 0, this.w, this.t);
    context.rect(this.x, this.b, this.w, this.b);
    context.fillStyle = "green";
    context.fill();
    context.closePath();
  }

  // Push the pillars to left
  update() {
    this.x -= this.dx / 2;
  }
}
