// Project Title
// Your Name
// Date

let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  background(220);
  myPlanet.display();
}

function mouseClicked() {
  if(keyIsPressed && keyCode === SHIFT) {
    myPlanet = new Planet(mouseX,mouseY);
  }
  else {
    myPlanet.createMoon();
  }
}

class Planet {
  // make planet constructor 
  constructor(x,y) {
    this.x = x;
    this.y = y;

    this.s = 200; // size 
    this.r = this.s/2;

    this.moons = [];
  }

  display() {
    fill(255);
    circle(this.x, this.y, this.r);

    for(let m of this.moons) {
      m.update();
    }
  }

  createMoon() {
    this.moon.push(new Moon(this.x, this.y));
  }

}

class Moon {
  ///// constructor /////
  constructor (x,y) {
    this.x = x;
    this.y = y;
    this.steps = 10;
    this.speed = 5;
  }


  update() {
    this.x += this.speed;
    this.steps--;
    if (this.steps === 0) {
      this.steps = 20; 
      this.speed *= -1;
    }
  }

  display() {
    circle(this.x, this.y, this.r);
  }
}