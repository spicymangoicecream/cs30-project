// Balloon Tree Project
// Henry Vu
// Finished day: 11.18.2024
//

let seed;
let scale = 15;
let userLeaf = 5;

function setup() {
  seed = 30;
  createCanvas(500, 500);
  background(255);
}

function draw() {
  background(225);
  drawTree(width/2, height*0.9, 90, 6);
  randomSeed(seed); // seed to keep leaf size random but stay fixed
  drawLeaf();
}

function drawLine( x1, y1, x2, y2, depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  strokeWeight(depth, 1, 5, 1, 3.5); // map for changing thickness based on depth
  line(x1, y1, x2, y2);
  stroke(30);
}

function drawTree(x1, y1, angle, depth) {
  let difAngle = map(mouseX, 0, width, 10, 60); // this function response for changing the blooming
  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle))*depth*scale); //calculate endpoints of
    // current branch
    
    let y2 = y1 - (sin(radians(angle))*depth*scale); //using trig ratios. Get
    // shorter based on depth

    drawLine(x1, y1, x2, y2, depth);

    // draw leaf according to the depth 
    if (depth < userLeaf) {
      drawLeaf(x2,y2,depth);
    }

    //for a 3-branch tree: 
    // added another branch function to make it 3 branches
    drawTree(x2,y2, angle-difAngle, depth-1);
    drawTree(x2, y2, angle-0, depth-1);
    drawTree(x2, y2, angle+difAngle, depth-1);
  }
}

function drawLeaf(x,y,depth) {
  let min = map(depth, 1, 5, 5, 40); // map min and max size for the leaf 
  let max = map(depth, 1, 5, 15, 40);
  let size = random(min, max);
  fill(random(255),random(255),random(255)); // random colour for leave
  circle(x, y, size);
}

function keyPressed() {
  if (key === "z") {
    if (userLeaf >= 0) {
      userLeaf -= 1; // check if at 0 then reduce depth down by 1 to make less leaf
    }
  }
  
  if (key === "x") {
    if (userLeaf < 5) {
      userLeaf += 1; // check if we reached over 5 then increase depth by 1 until we reached max value
    }
  }
}