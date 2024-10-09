// Drawing with Loops Demo
// Henry V
// 10.9.2024

// Global Variables 
let gridSpacing = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //loopReview();
}


function loopReview() {
  // quick nested loop practice (x,y)
  for ( let x = 0; x < 4; x++) {  // x: 0, 1 ,2, 3
    for (let y = 0; y < 4; y++) { // y: 0, 1, 2, 3
      print (x,y);
    }
  }
}
///// LOOP REVIEW FOR PRINT (0,1) (0,2) (0,3) (0,4) 

function draw() {
  background(220);
  renderGrid();
}

function circleDistance(x1, y1, x2, y2) {
  // take in two endpoints and return the 
  // straight line distance between them 
  // Our answer will be rounded. 
  let a = abs(x1 -x2);
  let b = abs(y1 - y2);
  let c = sqrt(pow(a,2) + pow(b,2));
  return round(c);
}

function renderGrid() {
  // use nested loop to create a grid of shape 
  for (let x = 0; x < width; x = x + gridSpacing) {
    for (let y = 0; y < height; y = y + gridSpacing) {
      circle(x,y,gridSpacing);
      let d = circleDistance(x,y,mouseX,mouseY);

      if (d > 150) {
        fill(0)
      }
      else {
        fill(200,50,120);
      }
      circle(x,y,gridSpacing);

      fill(200);
      textSize(gridSpacing - 12);
      textAlign(CENTER,CENTER);
      text(d,x,y);
    }
  }
}