// Interactive Scene
// Henry Vu
// 16.9.2024
//
// Extra for Experts:
// - 
// Interactive scene for user to interact

let currentBack = 0; 

// Variable for Sun and Moon 
let SunR = 255
let SunG = 255
let SunB = 0
function setup() {
  createCanvas(700, 500);
}

function draw() {
  background(153, 255, 255)
  dayTonight();
  Sprite();
  firstBackground();
  textSize(30)
  text('Henry', 550, 480)
}
function mousePressed() {
  if (mouseButton === CENTER) {
    currentBack++;
  }
  if (currentBack > 3) {
    currentBack = 0
  }

}
 ////////////////////////////////////
function dayTonight() {
 // Day to Night
  if (currentBack === 0) {
    background(153, 255, 255)
  }
  if (currentBack === 1) {
    background(153, 204, 255)
  }
  if (currentBack === 2) {
    background(153, 153, 255)
  }
  if (currentBack === 3) {
    background(204, 255, 255)
  }
}

function Sprite() {  // The sun / Moon
  fill(SunR, SunG, SunB);
  circle(mouseX, mouseY, 100);
  if (currentBack === 2) {
    SunR = 160; SunG = 160; SunB = 160
  }
  else {
    SunR = 255; SunG = 255; SunB = 0
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