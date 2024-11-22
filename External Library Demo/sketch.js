// External Libraries
// Henry Vu
// 11.12.2024

let start = false;
let pos; let vel;
let totalBounces = 0;

function setup() {
  createCanvas(700, 500);
  textSize(30);
  textAlign(CENTER);

  pos = createVector(width/2, height/2);
  vel = createVector(5,3);

  if(localStorage.getItem("bounces") === null) {
    localStorage.setItem("bounces",0);
  }
  else {
    totalBounces = int(localStorage.getItem("bounces"));
  }
}

function draw() {
  background(220);
  if (start === false) {
    text("Click to begin", width/2, height/2);
    if (mouseIsPressed) {
      start = true;
    }
  }

  else {
    text(totalBounces,width/2, height/2);
    updateBall();
  }
}

function updateBall() {
  pos.add(vel);

  if (pos.x < 0 || pos.x > width) {
    totalBounces ++;
    localStorage.setItem("bounces",totalBounces);
    vel.x *= -1;
  }

  if (pos.y < 0 || pos.y > height) {
    totalBounces++;
    localStorage.setItem("bounces",totalBounces);
    vel.y *= -1;
  }
  circle(pos.x, pos.y, 20);
}
