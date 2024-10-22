// Road Rage Simulator
// Henry V
// 10.18.2024

let eastbound = [];
let westbound = [];

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
  fill(255,255,0);
  for (let i = 0; i < width; i++) {
    rect(0 + i*lineDist, height/2, 15, 3);
  }
}

class Vehicle {
  ////// Constructor //// 
  constructor(x, y, direction, type) {
    this.direction = direction;
    this.color = (random(255), random(255), random(255));
    this.y = y;
    this.x = x;
    this.type = type;
    this.xSpeed = random(2,5);
  }

  update () {
    
  }

  display() {
    fill(this.color);
    if (this.type === 0) {
      rect(0 , this.y, 20, 10); // basic car shape
    }

    else {
      rect(0, this.y, 30, 10);
    }
  }

  move() {
    // this keep the car in frames and moving it at the same time
    this.x += this.xSpeed;

    if(this.x < 0) {
      this.x += width;
    }

    if(this.x > width) {
      this.x -= width;
    }
  }

  speedUp() {
    // car going west do this
    if (this.direction === 1) {

    }
  }

  speedDown() {

  }
}