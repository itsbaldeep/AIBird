class Bird {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dx = 2;
    this.dy = gravity;
  }

  show() {
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
  }

  update() {
    // if (this.x < width / 2) this.x += this.dx;
    if (this.y + this.r < height) this.y += this.dy;
    if (jump) this.y -= gravity + 10;
  }
}
