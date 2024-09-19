// Drawing with Loops
// Henry Vu
// Sept 19th 
//


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  myBackground();
  myForeground();
  noLoops()
  // this is where the screen will actually draw 

}

function myBackground() {
  // using loops to create gradient background 
  let rectHeight = 40;

  for(let y = height; y > 0; y -= rectHeight ) {
    let value = map(y,0,height,0,225);
    noStroke();
    fill(value,255-value,255-value);
    rect(0,y,width,rectHeight)
  }

}

function myForeground() {
  // loops to create shapes using FOR/While 
  for (let x = 0; x < width; x+= 50) {
    fill(0); 
    circle(x, height/2, 40);
    fill(255);
    text(x, x, height/2);
  }

  // create stars x100 
  let count = 0;

  while(count < 100){
    fill(255,0,0);
    let x = random(0, width);
    let y = random(0, height);
    circle(x,y,10)
    count+=1; 
  }
  
  }