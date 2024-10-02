// Terrain Generation 
// Henry V
// 1.10.2024
//


// Variable List 
let rectWidth = 5;
let rectTime = 5;
let rectInt = 0.01;

// Programs Start here:
function setup() {
  createCanvas(1000, 1000);
  frameRate(15);
  background(220);
  terrain();
}

function draw() {
  rectTime = 5;
}

//// TERRAIN GENERATION ////

function terrain() {
  for (let x = 0; x <= width; x += rectWidth) {
    noFill();
    let rectHeight = noise(rectTime);
    rectHeight = map(rectHeight, 0 , 1, 60, 900);
    rect(x, height, rectWidth, -rectHeight);
    rectTime += rectInt; 
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    rectWidth += 0.1;
    background(220);
    terrain();

    if (rectWidth < 1) {
      rectWidth = 1;
  }
}

if (keyCode === LEFT_ARROW) {
  rectWidth -= 0.1;
  background(220);
  terrain();

  if (rectWidth < 1) {
    rectWidth = 1;
}
}
}
