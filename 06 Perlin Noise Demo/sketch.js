// Perlin Noise Demo 
// Henry Vu
// 27.9.2024


// noise() vs random()

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(2);

}

function draw() {
  background(220);
  line(width/3,0,width/3,height);
  // line(width*0.67, 0, width*0.67, height);


  //random()
  randomCircle();












  //noise()
}

function randomCircle(){
  // draw a circle on the screen, using
  //random values for the diameter (later,color)

  let cSize = random(10,100);
  circle(width*0.25, height/2, cSize);
  textAlign(CENTER, CENTER);
  textSize(15);
  text(round(cSize), width*0.25, height/2);
}