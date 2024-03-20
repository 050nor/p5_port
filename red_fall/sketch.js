// Code Example
// by 050nor
// From the Coding Train

let circleX;
let circleY;
let circleSize = 0;
let r, g, b;

//function setup happen once
function setup() {
  createCanvas(800, 800);
  background(0);
}

function mousePressed() {
  circleSize = 0;
  r, g, (b = 0);
  background(0);
}

//function draw is a loop 60fps(adjustable)
function draw() {
  circleColorR = random(100, 255);
  circleX = random(0, width);
  circleY = random(10);
  r = random(255);
  g = random(100);
  b = random(100);
  fill(r, g, b, 8);
  noStroke();
  circle(circleX, circleY, circleSize);

  circleSize += random(1, 5.1);
  circleSize -= random(1, 5);
}

function keyPressed() {
  if (key === "s") {
    ///saveGif("mySketch", 10);
    saveFrames("frame", "png", 3, 5);
  }
}
