// Multiple Files
// Henry Vu
// 

let object = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i<10; i++) {
    object.push(new AnimatedObject(random(width),random(height)));
    object.push(new LineObject(random()))
  }
}

function draw() {
  background(220);
  for (let o of object) {
    o.move();
    o.display();
  }
}


