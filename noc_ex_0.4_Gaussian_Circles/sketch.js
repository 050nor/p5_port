function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  let x = randomGaussian(width / 2, width / 27);
  let y = randomGaussian(height / 2, height / 27);
  let r = randomGaussian(150, 30);
  let g = randomGaussian(170, 30);
  let b = randomGaussian(180, 30);

  noStroke();
  fill(r, g, b, 50);
  circle(x, y, width / 29);
}

function keyPressed() {
  if (key === "s") {
    saveFrames("frame", "png", 3, 5);
    ///saveGif("mySketch", 10);
  }
}
