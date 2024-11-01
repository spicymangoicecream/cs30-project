// Project Title
// Your Name
// Date
//
// rules:
// start at 0
// every step we step forward, increse the step by 1 
// step backward if possible, do so, otherwise go forward 
// backward only allow if resulting loction is positive and we've been to that number before


// start: 0, 1 , 3, 6, 2, 7, 13, 20, 12, 21

let sequence = [];
let currentValue = 0;

let largest = 0; 
let scaleAmount = 0;

let stepAmount = 1; 
let arcList = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  noFill();
}

function draw() {
  background(220);
  translate(0,height/2);
  addToSequence();
  scaleAmount = lerp(scaleAmount, width/largest, 0.05);
  scale(scaleAmount);
  renderArc();

}

function addToSequence() {
  let backwards = currentValue - stepAmount; 
  if (backwards > 0 && !sequence.includes(backwards)) {
    arcList.push(new rArc(currentValue, backwards, sequence.length));
    sequence.push(backwards);
    currentValue = backwards; 
    stepAmount++;
  }

  else {
    let forwards = currentValue + stepAmount;
    arcList.push(new rArc(currentValue, forwards, sequence.length));
    sequence.push(forwards);
    currentValue = forwards;
    stepAmount++;
    if(currentValue > largest) {
      largest = currentValue;
    }
  }
}

function renderArc() {
  for(r of arcList) {
    r.display();
  }
}

class rArc{
  constuction(start,end,direction) {
    this.start = start;
    this.end = end; 
    this.direction = direction;
  }

  display() {
    let diameter = abs(this.start - this.end);
    let x = (this.start + this.end)/2;
    strokeWeight(0);
    if (this.direction === 0) {
      arc(x, 0, diameter, diameter, 0, PI);
  
    }

    else {
      arc(x, 0 , diameter, diameter, PI, 0);
    }
  }
}