// Making the objects
const bird = new Bird();
const pillars = new Array();
const clouds = new Array();
setInterval(() => pillars.push(new Pillar()), 7500 / speed);
setInterval(() => clouds.push(new Cloud()), 15000 / speed);

// Main game loop
function draw() {
  context.clearRect(0, 0, width, height);

  // Cloud logic
  for (let cloud of clouds) {
    cloud.show();
    cloud.update();
  }

  // Bird logic
  bird.show();
  bird.update();
  if (jump) bird.up();

  // Pillar logic
  for (let pillar of pillars) {
    pillar.show();
    pillar.update();

    // Collision Detection and Restarting the game
    if (bird.hits(pillar) && !godMode) {
      bird.y = height / 2;
      pillars.splice(pillars.indexOf(pillar), 1);
    }
  }
  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);
