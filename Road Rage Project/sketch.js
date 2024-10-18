// Road Rage Simulator
// Henry V
// 10.18.2024

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
}

function drawRoad() { //// draw the road 
  fill(0);
  rect(0, height/4, width, height/2);
  let lineDist = 30; /// defining the gap between each line 
  fill(255);
  for (let i = 0; i < width; i++) {
    rect(0 + i*lineDist, height/2, 20, 5);
  }
}

class Vehicle {
  ////// Constructor //// 
  constructor(type, color, x, y, xSpeed, direction) {
    this.x = x;
    this.y = y; 
    this.type = 
    this.color = (random(255), random(255), random(255));
    this.type;
    this.xSpeed = 0;
  }
}