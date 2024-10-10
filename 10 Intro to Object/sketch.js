// Intro to Object Demo 
// Henry V
// 10.10.2024

let myBook;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book("CS 30 Textbook" , "Mr.Scott" , "leatherbound" , 300, 12345678, width * 0.3);
  myBook2 = new Book("Whatever" , "luke" , "softcover" , 300, 987654, width * 0.4);
  myBook3 = new Book("shark man" , "adeeb" , "hardcover" , 300, 98274985, width * 0.5);
}

function draw() {
  background(220);
  myBook.display();
  myBook2.display();
  myBook3.display();
}


class Book { 
  // 1. Constructor 
  constructor(title, author, coverType, pages, isbn, x) {
    this.title = title;
    this.author = author;
    this.coverType = coverType;
    this.pages = pages;
    this.isbn = isbn; 
    this.x = x; 
  }

  // 2. class methods
  printSummary() {
    // print of a nicely formative desc of the object
    print(this.title + ",by" + this.author);
    print("length" + this.pages + "pages.");
    print("Covertype" + this.coverType);
    print("ISBN" + this.isbn);
  }

  display() {
    /// visualize the book based on its properties 
    rectMode(CENTER); textAlign(CENTER, CENTER);
    switch(this.coverType) {
      case "softcover":
        fill(255,200,200); break; 
      
      case "hardcover":
        fill(120,255,240); break;
      
      case "leatherbound":
        fill(150,100,12); break;
    }
    rect(this.x, height/2, this.pages/10, 150);
    textSize(16); fill(255);
    text(this.title[0], this.x, height/2 - 50);
  }
}