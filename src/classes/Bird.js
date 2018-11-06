class Bird {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  show() {
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.closePath();
  }

  update() {
    if (bird.y + bird.r < height) this.y += gravity / 4;
    if (jump) this.y -= lift;
  }
}
