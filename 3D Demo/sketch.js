// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let angle = 5;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  rotateY(frameCount);
  for (let i = 0; i < 360; i += 45) {
    push();
    rotateY(i);
    boxes(30);
    pop();
  }
}


function boxes(size) { 
  if (size > 3) {
    let difAngle = map(angle, mouseX, width, 0, 180);
    rotateZ(difAngle);
    translate(size*1.5, 0);
    box(size);

    boxes(size*0.8);
  }
}