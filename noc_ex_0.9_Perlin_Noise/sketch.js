let slider;
let slider2;
let z;

function setup() {
  createCanvas(400, 400);

  z = 0;

  slider = createSlider(2, 8, 4, 1);
  slider.position(10, 10);
  slider.size(80);

  slider2 = createSlider(0, 1, 0.5, 0.1);
  slider2.position(10, 30);
  slider2.size(80);
}

function draw() {
  background(255);
  loadPixels();
  let xoff = 0.0; //start xoff at 0

  for (let x = 0; x < width; x++) {
    let yoff = 0.0; //for every xoff start yoff with 0
    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * 4; // Formula to find pixel index
      noiseDetail(slider.value(), slider2.value());
      let bright = map(noise(xoff, yoff, z), 0, 1, 0, 255); // A random Brightness use Perlin (with x,y off)

      pixels[index] = 100;
      pixels[index + 1] = bright;
      pixels[index + 2] = bright; // set rgb values
      pixels[index + 3] = 255; // set alpha
      yoff += 0.05;
    }
    xoff += 0.05;
  }
  updatePixels();
  z += 0.03;
}

function keyPressed() {
  if (key === "s") {
    saveFrames("frame", "png", 3, 5);
    ///saveGif("mySketch", 10);
  }
}
