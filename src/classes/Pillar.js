class Pillar {
  constructor() {
    this.x = width;
    this.g = pillarGap;
    this.t = Math.floor((Math.random() * height) / 3) + height / 4;
    this.b = this.g + this.t;
    this.w = pillarWidth;
    this.dx = gameSpeed;
  }

  show() {
    context.beginPath();
    context.rect(this.x, 0, this.w, this.t);
    context.rect(this.x, this.b, this.w, this.b);
    context.fillStyle = "yellow";
    context.fill();
    context.closePath();
  }

  update() {
    this.x -= this.dx;
  }
}
