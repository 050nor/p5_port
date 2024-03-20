// Code Example
// by 050nor
// From the Coding Train

let circleX;
let circleY;
let circleSize = 0;
let r, g, b;

//function setup happen once
function setup() {
  createCanvas(windowWidth, windowHeight);
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
  circleX = random(width / 2 - 1, width / 2 + 1);
  circleY = random(height / 2 - 1, height / 2 + 1);
  r = 255; //random(255);
  g = 0; //random(100);
  b = 0; //random(100);
  fill(r, g, b, 8);
  noStroke();
  circle(circleX, circleY, circleSize);

  circleSize += random(1, 10.3);
  circleSize -= random(1, 10);
}

function keyPressed() {
  if (key === "s") {
    saveFrames("frame", "png", 3, 5);
    ///saveGif("mySketch", 10);
  }
}
