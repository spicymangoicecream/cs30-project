// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myGrid = [[0, 255, 0, 255, 0],
              [255, 0, 255, 0, 255],
              [0, 255, 0, 255, 0]];

const NUM_ROWS =3;
const NUM_COLS = 5;

function mouseClick() {
  
}

let rectWidth, rectHeight;

function setup() {
  createCanvas(500, 300);
  rectWidth = 500/NUM_COLS;
  rectHeight = 300/NUM_ROWS;
}

function renderGrid() {
  for (let x = 0; x < NUM_COLS; x++) {
    for(let y = 0; y < NUM_ROWS; y++) {
      fill(myGrid[y][x]);
      rect(x*rectWidth, y*rectHeight,rectWidth, rectHeight);
    }
  }
}

function draw() {
  background(220);
  // if(frameCount%30 === 0) {
  //   myGrid[int(random(NUM_ROWS))][int(random(NUM_COLS))] = int(random(255));
  // }
  renderGrid();
  print(mouseX, rectWidth, mouseX/rectWidth, rectHeight);
  
}
