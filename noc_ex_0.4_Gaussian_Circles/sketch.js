function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  let x = randomGaussian(width / 2, 30);
  let y = randomGaussian(height / 2, 30);
  let r = randomGaussian(150, 30);
  let g = randomGaussian(170, 30);
  let b = randomGaussian(180, 30);

  noStroke();
  fill(r, g, b, 50);
  circle(x, y, 20);
}

function keyPressed() {
  if (key === "s") {
    saveFrames("frame", "png", 3, 5);
    ///saveGif("mySketch", 10);
  }
}
