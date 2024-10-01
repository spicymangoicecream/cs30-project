// Perlin Noise Demo 
// Henry Vu
// 27.9.2024


// noise() vs random()
let circleTime = 5;
let circleInterval = 0.02; 
let rectTime = 5;
let rectInt = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(15);

}

function draw() {
  background(220);
  line(width/3,0,width/3,height);
  // line(width*0.67, 0, width*0.67, height);


  //random()
  randomCircle();


  //noise()
  noiseCircle();

  stairCase();
}

function noiseCircle(){
  // draw a circle using noise() for random value
  let cSize = noise(circleTime); // 0-1
  cSize = map(cSize, 0, 1, 10, 225);
  fill(cSize, cSize/2, 225-cSize);
  circle(width*0.75, height/2, cSize);
  text(round(cSize), width*0.75, height/2);
  circleTime += circleInterval; 
}

function stairCase(){
  // use loop to draw a terrain 
  let rectWidth = 20;
  for(let x = 0; x <= width; x += rectWidth){
    noFill()
    let rectHeight = noise(rectTime);
    rectHeight = map(rectHeight, 0, 1, 50, 500);
    rect(x, height, rectWidth, -rectHeight);
    rectTime += rectInt;
  }

}

function randomCircle(){
  // draw a circle on the screen, using
  //random values for the diameter (later,color)

  let cSize = random(10,100);
  fill(cSize, cSize/2, 225-cSize);
  circle(width*0.25, height/2, cSize);
  textAlign(CENTER, CENTER);
  textSize(15);
  text(round(cSize), width*0.25, height/2);
}