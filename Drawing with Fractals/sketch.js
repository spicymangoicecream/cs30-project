// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let seed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(220);
  // cirIncir(width/2, height/2, width);
  // cantor(width*0.1, height*0.3, width*0.8, 6);
  // cirFrac(width/2, height/2, height/2);
  sqFrac(width/2, height/2, height/2);
}

function sqFrac(x,y,len) {
  if (len > 10) {
    rectMode(CENTER);
    fill(random(255), random(255), random(255));

    push();
    translate(x,y);
    rotate(radians(frameCount));
    square(0,0,len);
    pop();

    sqFrac(x - len/2, y -len/2, len/2);
    sqFrac(x + len/2, y +len/2, len/2);
    sqFrac(x - len/2, y +len/2, len/2);
    sqFrac(x + len/2, y -len/2, len/2);
  }
}

function cirFrac(x,y,d) {
  if (d > 2) {
    circle(x,y,d);

    cirFrac(x - d/2, y, d/2);

    cirFrac(x + d/2, y, d/2);

    cirFrac(x,y + d/2, d/2);
  }
  // base case
}

function cantor(x,y,len,depth) {
  if (depth > 0) {
    line(x,y,x+len,y);
    let newY = y + 20;
    cantor(x, newY, len/3, depth-1);
    cantor(x + 2/3*len, newY, len/3, depth-1);
  }
}

function cirIncir(x, y, d) {
  if (d > 10) {
    circle(x,y,d);
    let den = map(mouseX,0,width, 1.01, 2);
    cirIncir(x,y,d/den);
  }
  // implicicit base case
}

