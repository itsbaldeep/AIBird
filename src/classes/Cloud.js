class Cloud {
  constructor() {
    this.x = width; // Drawing at the right edge of the canvas
    this.y = Math.floor((Math.random() * height) / 3) + height / 10; // Random Y location
    this.dx = speed;
  }

  // Show the clouds as sprite
  show() {
    context.beginPath();
    context.drawImage(cloudSprite, this.x, this.y, 100, 100);
    context.closePath();
  }

  // Move the clouds to left
  update() {
    this.x -= this.dx / 4;
  }
}
