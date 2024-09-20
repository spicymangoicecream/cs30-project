// Interactive Scene
// Henry Vu
// 16.9.2024
//
// Extra for Experts:
// - 
// Interactive scene for user to interact

let currentBack = 0; 

function setup() {
  createCanvas(700, 500);
}

function draw() {
  dayTonight();
  Sprite();
  firstBackground();
}

function dayTonight() {
  // Day to Night
  if (currentBack === 0) {
    background(153, 255, 255)
  }
  if (keyIsDown(RIGHT_ARROW) && currentBack <= 3) {
    currentBack++;
  }
  else {
    currentBack === 0
  }

  // Day 

function Sprite() {  // The sun / Moon
  fill(225, 225, 0);
  circle(mouseX, mouseY, 100);
  }
}

function firstBackground() {
  //ground
  fill(174, 120, 59);
  rect(0, height*3/4, width, height/4); 

  //mountain 
  fill(122) 
  triangle(-100, height*3/4, 150, height/5, 300, height*3/4);
  triangle(100, height*3/4, 300, height/5, 500, height*3/4);
}