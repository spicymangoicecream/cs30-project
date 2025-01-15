// Final Coding Challenge
// Henry Vu
// 1.15.2025

// Gorilla Animation Variable
let gorilla = [];
let gorillaSwipe = [];

// Indicating the state of the gorilla
let gorillaState = 0;

// Index to hold the animation order
let idleIndex = 0;
let swipeIndex = 0;

let spirals = [];

function preload() {
  // load image for Gorila idle animation and swipe animation
  for (let i = 1; i <= 6; i++) {
    gorilla.push(loadImage("assets/Gorilla/idle" + i +".png"));
    gorillaSwipe.push(loadImage("assets/Gorilla/swipe" + i +".png"));
  }

  // Spiral Images 
  for (let i = 0; i < 15; i++) {
    if(i < 10){
      spirals.push(loadImage("assets/Circle/Circle Animation0" + i + ".png"));
    }
    else {
      spirals.push(loadImage("assets/Circle/Circle Animation" + i + ".png"));
    }
  }
}

// -------------THE PROGRAMS ITSELF-------------

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  // Gorilla Code
  if (gorillaState === 0) {
    image(gorilla[idleIndex], width/2, height/2);
    if (frameCount % 12 === 0) {
      idleIndex++;
      if (idleIndex > 5) {
        idleIndex = 0;
      }
    }
    
  }

  else if(gorillaState === 1) {
    image(gorillaSwipe[swipeIndex], width/2, height/2);
    if (frameCount % 12 === 0) {
      swipeIndex++;
      if (swipeIndex > 5) {
        swipeIndex = 0;
      }
    }
  }
  // Spirals Code
  for (let i = 0; i < spiralObject.length; i++) {
    let s = spiralObject[i];
    s.display();
    if (s.active===false) {
      spiralObject.splice(i,1);
      i--;
    }
  }

}

function keyPressed() {
  if (gorilla === 0) {
    gorillaState = 1;
  }
  else{
    gorillaState = 0;
  }
} 

class Spiral {
  constructor(x,y) {
    this.x = x;
    this.y = y;

    this.currentFrame = 0;
    this.active = true;
  }

  // class methods 
  display() {
    if (this.currentFrame > 15) {
      this.active = false;
    }
    else {
      image(spirals[this.currentFrame],this.x,this.y);
    }
  }  
}