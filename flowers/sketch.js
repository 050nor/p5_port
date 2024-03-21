function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
}

function draw() {
  //lollipop(mouseX, mouseY, 50)
}

function mousePressed() {
  lollipop(mouseX, mouseY, random(20, 80));
}

function lollipop(x, y, diameter) {
  translate(x, y);
  fill(50, 150, 50);
  rect(-diameter * 0.25, 0, diameter * 0.5, diameter * 2);

  ellipseMode(CENTER);
  fill(150, 0, 20);
  ellipse(0, 0, diameter, diameter);

  for (let angle = 0; angle <= 360; angle += 5) {
    ellipseMode(CORNER);
    fill(200, 0, 50);
    rotate(angle);
    ellipse(0, 0, diameter * 0.2, diameter * 0.8);
  }
}

function keyPressed() {
  if (key === "s") {
    saveFrames("frame", "png", 3, 5);
  }
}
