// Making the bird and pillars
const bird = new Bird(width / 5, height / 2, 16);
const pillars = new Array();
function addPillars() {
  pillars.push(new Pillar());
  setTimeout(addPillars, 3000 / gameSpeed);
}
addPillars();

// Collision Detection
function checkCollision() {
  for (let pillar of pillars) {
    const leftEdge = pillar.x < bird.x + bird.r;
    const rightEdge = pillar.x + pillar.w > bird.x - bird.r;
    const topPillar = pillar.t > bird.y - bird.r;
    const botPillar = pillar.b < bird.y + bird.r;

    if (leftEdge && rightEdge && (topPillar || botPillar)) {
      bird.y = height / 2;
      pillars.splice(0, pillars.length);
    }
  }
}

// Main game loop
function draw() {
  context.clearRect(0, 0, width, height);
  bird.show();
  bird.update();
  for (let pillar of pillars) {
    pillar.show();
    pillar.update();
  }
  checkCollision();
  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);
