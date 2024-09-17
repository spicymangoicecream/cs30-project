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
  background(174, 251, 255);
  Sprite()
  firstBackground();

}

function Sprite() {
  fill(225, 225, 0);
  circle(100, 100, 100);

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