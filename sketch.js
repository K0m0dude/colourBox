var timer = 0
let numbers = [1,2,3,4]
var colorPicker;
var ellipseColor = 'blue';
var score = 0;
var x, y, w, h;
var offsetX, offsetY;
var dragging = false;
var angle = 45.0
var gravity = 0.2;
var speed = 0;
function setup() {
  x = 200;
  y = 200;
  w = 50;
  h = 50;
  createCanvas(400, 400);
  c = (angle)
  rectMode(CENTER);
  ellipseMode(CORNER);
  colorPicker = random(numbers)
  text ('X = ' + x, 190, 200);
  text ('Y = ' + y, 190, 215)
}

function draw() {
  if (colorPicker == 1) {
    ellipseColor = 'red'
  }
  if (colorPicker == 2) {
    ellipseColor = 'blue'
  }
  if (colorPicker == 3) {
    ellipseColor = 'green'
  }
  if (colorPicker == 4) {
    ellipseColor = '#FE72ED'
  }
  background('#3C3C3C');
  fill('white');
  noStroke()
  text('score = '+ score,140,15);
  text("time = " + timer + 's',200,15)
  fill(ellipseColor);
  noStroke()
  ellipse(x,y,60,60)
  y = y + speed;
  noFill()
  stroke('red')
  strokeWeight(5)
  rect(360,40,75,75)
  stroke('blue')
  rect(40,360,75,75)
  stroke('green')
  rect(360,360,75,75)
  stroke('#FE72ED')
  rect(40,40,75,75)
  
  // Add gravity to speed.
  speed = speed + gravity;
  if (y > height - 50) {
    speed = 0;
    y = height - 50;
  }
  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }
  if (y > 340) {
    y = 340
  }
  
  if (y < 0) {
    y = 0
  }
  if (x > 340) {
    x = 340
  }
  if (x < 0) {
    x = 0
  }
  
}
(function timerCount() {
  setTimeout(() => {
    timer = timer  + 1;
    timerCount();
  }, 1000)
})()

function mousePressed() {
  // Did I click on the rectangle?
  if (mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h) {
    dragging = true;
    // If so, keep track of relative location of click to corner of rectangle
    offsetX = x-mouseX;
    offsetY = y-mouseY;
  }
}
function mouseReleased() {
  // Quit dragging
  dragging = false;
  if (x > 300 && y < 50 && ellipseColor == 'red') {
    x = 200
    y = 200
    score = score + 1
    colorPicker = random(numbers)
  }
  if (x > 300 && y > 300 && ellipseColor == 'green') {
    x = 200
    y = 200
    score = score + 1
    colorPicker = random(numbers)
  }
  if (y > 300 && x < 50 && ellipseColor == 'blue') {
    x = 200
    y = 200
    score = score + 1
    colorPicker = random(numbers)
  }
  if (x < 50 && y < 50 && ellipseColor == '#FE72ED') {
    x = 200
    y = 200
    score = score + 1
    colorPicker = random(numbers)
  }
}
