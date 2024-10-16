// Challenge 
// Henry V 
// 10.15.2024

let circleRacer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  circleRacer = new RoundRacer(height/4, 'Red');
  circleRacer2 = new RoundRacer(height/3, 'Yellow');
  circleRacer3 = new RoundRacer(height/2, 'Green');
}


function draw() {
  background(220);
  circleRacer.display();
  circleRacer.move();

  circleRacer2.display();
  circleRacer2.move();

  circleRacer3.display();
  circleRacer3.move();

}


class RoundRacer {
  ////Constructions////
  constructor(yPosition, color) {
    xPosition = 0;
    this.yPosition = yPosition;
    this.color = color;
    this.xSpeed = random(3,15);
  }
}

move() {
  this.xPostion = this.xSpeed;
  if (this.xPosition >= windowWidth) {
    this.xPosition = 0; 
  }
}

display() {
  circle(this.xPosition, this.yPosition);
  fill(color);
}