// Arrays
// Henry V 
// 10.17.2024

let names = ['John' , 'Jane' , 'Stefan']

function setup() {
  createCanvas(windowWidth, windowHeight);
  names.push('Liam');
  print(names);

  let nameLast = names.pop(); // remove items at the end of the list //.pop() can refer to the last item too.
  print(names);
  print(nameLast);

  let nameFirst = names.shift(); //.shift() refers to the first item in list 
  console.log(nameFirst);

  names.push('mitsaal');
  names.push('samperland');
  names.push('bob');
  names.push('mitsaal2');

    for(n of names) {
      console.log(n);
    }

    console.log(random(names));
}

function draw() {
  background(220);
}
