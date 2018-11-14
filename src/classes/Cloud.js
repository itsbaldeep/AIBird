class Cloud {
  constructor() {
    this.x = width;
    this.y = Math.floor((Math.random() * height) / 3) + height / 10;
    this.dx = speed;
  }

  // Show the clouds as sprite
  show() {
    context.drawImage(cloudSprite, this.x, this.y, 100, 100);
  }

  // Move the clouds to left
  update() {
    this.x -= this.dx / 4;
  }
}
