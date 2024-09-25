// Mousewheel, Map, Lerp
// Henry Vu
// 9.25.2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y; //position of circle

let w = 50; // width of circle 

let r = map(x, 0, width, 0, 225)

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width/2;    y = height/2;
  noFill();

}

function draw() {
  // background(220);
  // Movement of circle 
  x = lerp(x, mouseX, 0.12);
  y = lerp(y, mouseY, 0.12);

  let r = map(x, 0, width, 0, 225)
  let g = map(x, 0, height, 0, 225)
  let b = map(x, 0, width, 225, 0)

  stroke(r,g,b)

  circle(x,y,w);
}

function mouseWheel(event){
  print(event.delta);
  if(event.delta > 0){
    w -= 10;
    if(w < 10) w = 10;
  }
  
  else w += 10;
}
  // pos: down 
  // neg: up
