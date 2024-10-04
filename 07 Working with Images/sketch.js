// Working with Images
// Henry V
// 4.10.2024
//

let lionL, lionR;
let facingRight = true;

function preload(){
  // run before setup, wait for loading to complete 
  lionL = loadImage('assets/lion-left.png');
  lionR = loadImage('assets/lion-right.png');
  for(i = 0; i<9; i++) {
    pinImages.push(loadImage'assets/pin-0' + i + '.png');

  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  imageMode(CENTER);
  updateDirection();
  if (facingRight){
    image(lionR, mouseX, mouseY);
}
else{
  image(lionL, mouseX, mouseY);
}

// pinwheel color
image(pinImages[currentFrame], width/2, height/2);
currentFrame++;
if (currentFrame > 8) {
  currentFrame = 0;
}
}


function updateDirection() {
  if(mouseX > pmouseX) facingRight = true;
  else if (mouseX < pmouseX) facingRight = false;
}