// Road Rage Simulator
// Henry V
// 10.18.2024

let eastbound = [];
let westbound = [];
let light = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawRoad();
  /// Spawning car from either boundaries
  for (i = 0; i<eastbound.length; i++) {
    eastbound[i].action();
  }
  for (i = 0; i<westbound.length; i++) {
    westbound[i].action();
  }
}


function mouseClicked() {
  // Spawn car on Mouse click
  if(keyIsPressed && keyCode === SHIFT) {
    eastbound.push(new Vehicle(width,random(height/4 + 20, height/2 - 40),0,int(random(0,2))));
  }
  westbound.push(new Vehicle(0,random(height/2 + 20, height*3/4 - 40),1,int(random(0,2))));
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

    if (this.direction === 1) {
      this.x = 0;
    }

    else {
      this.x = width;
    }

    this.color = color(random(255), random(255), random(255));
    this.y = y;
    this.x = x;
    this.type = type;
    this.xSpeed = random(2,5);
  }

  drawCar() {
    stroke(255);
    fill(this.color);
    rect(this.x , this.y, 50, 30); // basic car shape
  }

  drawTruck() {
    stroke(255);
    fill(this.color);
    ellipse(this.x, this.y, 100, 50); // truck shape
  }

  display() {
    fill(this.color);
    if (this.type === 0) {
      this.drawCar();
    }

    else {
      this.drawTruck();
    }
  }

  move() {
    // this keep the car in frames and moving it at the same time
    if (this.direction === 1) {
      this.x += this.xSpeed;
      if(this.x > width) {
        this.x -= width;
      }
    }

    if (this.direction === 0) {
      this.x -= this.xSpeed;
      if(this.x < 0) {
        this.x += width;
      }
    }
  }
  

  action() {
    // organize all actions
    this.display();
    this.changeColour();
    this.speedUp();
    this.speedDown();
    this.move();

  }

  speedUp() {
    // car going west do this
    if (this.direction === 1) {
      if (random(1,100) >= 100) {
        this.xSpeed += random(-15,-1);
      }
    }
    // for car going east
    else if (this.direction === 0) {
      if (random(1,100) >= 100) {
        this.xSpeed += random(1,15);
      }
    }
  }

  speedDown() {
    // west car
    if (random(1,100) >= 100) {
      this.xSpeed -= random(1,15);
    }
    // east car
    if (random(1,100) >= 100) {
      this.xSpeed -= random(-15,-1);
    }
  }

  changeColour() {
    if (random(1,100) >= 99) {
      this.color = color(random(255), random(255), random(255));
    }
  }
}