// Map and Files Demo
// Henry Vu
// 12.19.2024
// split(), spred syntax 

let grid, img, rows, cols, colorMap, txtFile;

function preload() {
  txtFile = loadStrings("assets/info.txt");
  img = loadStrings("assets/colorImage.txt");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  processText();
  rows = img.length; cols = img[0].length;

  // make 2d arrays
  grid = [];
  for (let i = 0; i < rows; i++) {
    grid.push([...img[i]]);
  }

  //next, create a map or the colors 
  colorMap = new Map([
    ["b","black"],
    ["w", "white"],
    ["r","sienna"],
    ["l","peru"],
    ["p", color(150,150,255)],
  ]);
}

function draw() {
  background(220);
  renderGrid();
}

function renderGrid() {
  let cellWidth = width/cols;
  let cellHeight = height/rows;

  // visit each 2d arrays location
  for (let x = 0; x < cols;x++) {
    for (let y = 0; y < rows; y++) { 
      let currentKey = grid[x][y];
      fill(colorMap.get(currentKey));
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function processText() {
  // print("SPLIT INTO WORDS");
  // let splitwords = txtFile[0].split(" ");
  // print(splitwords);

  // print("SPREAD into chars");
  // let spreadLetters = [...txtFile[2]];
  // print(spreadLetters);
}