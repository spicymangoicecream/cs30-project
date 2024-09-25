// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// global variable
let currentColor = 0; // 0,1,2
let myColor;
let circleSize = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myColor = color(200, 120, 210);

}

function draw() {
  background(220);
  // circle code - fill color. use switch statement
  switch(currenColor){ // branches based off current color
    case 0:
      fill(255,0,0);
      break;

    case 1:
      fill(myColor);
      break;

    case 2:
      fill(0,0,255);
      break;
  }
}
  // Circle code - making circle
  circle(width/2, height/2, circleSize);

  if(frameCount % 30 === 0){ // true once every 10 frames
    // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    currentColor += 1;
    if (currentColor > 2) currentColor = 0;
  }

  function keyPressed(){
    // get called automatically 
  if(key === 'a'){
    growing = !growing; // set to not growing
  }
  
}
