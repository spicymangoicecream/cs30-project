// Image Manipulation 
// Henry Vu
// 12.11.2024

let pilot;

function preload() {
  pilot = loadImage("assets/aviator.png");
}

function setup() {
  createCanvas(pilot.width, pilot.height);
}

function drawCharacter(x,y,avg) {
  fill(255);
  if (avg > 200) text("0", x,y);

}

function draw() {
  background(220);
  image(pilot,0,0);
  loadPixels(); // allows us to access image pixels on Canvas
  background(0);

  for (let x = 0; x < width; x+=20) {
    for (let y = 0; y < length; y+=20) {
      let location = (x + y*pilot.width)*4;
      let avg = avgPixels(location);
    }
  }

  // for (let i = 0; i < pixels.length; i+=4) {
  //   let r = min(pixels[i] + 50, 255);
  //   let g = min(pixels[i+1] + 50, 255);
  //   let b = min(pixels[i+2] + 50, 255);
  //   // setPixelColor(i, 0, 0, 255);
  // }
  
  updatePixels();
}

function avgPixels() {
  let sum = pixels[pos] + pixels[pos+1] + pixels[pos+2];
  return sum/3;
}

function setPixelColor(pos, r, g, b) {
  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2] = b;
}