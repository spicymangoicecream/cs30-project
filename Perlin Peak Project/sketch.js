// Terrain Generation 
// Henry V
// 1.10.2024
//


// Variable List 
let rectWidth = 1;
let rectTime = 5;
let rectInt = 0.01;

let highestY = 0;
let rectX = 0;
let avgY = 0; // variable to calculate the average height of the sequences

// Programs Start here:
function setup() {
  createCanvas(1000, 1000);
  frameRate(60);
}

function draw() {
  background(220);
  terrain();
  rectTime = 5; 
  rectTime += (frameCount/20);
  stroke(255,0,0);
  line(0, avgY, width, avgY);
  avgY = 0; 
  stroke(0);
}

//// TERRAIN GENERATION ////

function terrain() {
  highestY = 0;
  for (let x = 0; x <= width; x += rectWidth) {
    noFill();
    let rectHeight = noise(rectTime);
    rectHeight = map(rectHeight, 0 , 1, 60, 900);
    rect(x, height, rectWidth, -rectHeight);
    rectTime += rectInt; 

    if (highestY < rectHeight) {
      highestY = abs(rectHeight);
      rectX = x;
    }
    avgY += rectHeight/(width/rectWidth);
  }
  drawFlag(rectX, height - highestY);
}
 // key function to change the width 
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

/// FLAG /// 
function drawFlag(x,y) {
  rect(rectX, height - highestY, 3, -20);
  fill(255, 0, 0);
  rect(rectX, height - highestY -10, 15, -10);
}