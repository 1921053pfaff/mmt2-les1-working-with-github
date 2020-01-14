var rood = 127;
var groen = 255;
var blauw = 10;

function setup() {
  // put setup code here
  createCanvas(400,400);
  background(100,255,0);
}

function draw() {
  rood = random(255);
  stroke("yellow");
  strokeWeight(5);

  fill(0, 0, 255);
  ellipse(200, 200, 400, 400);
  fill(150, 10, 255);
  rect(150, 150, 100, 100);
  stroke("black")
  line(0, 200, 400, 200);
  fill(rood, 0, 0);
  ellipse(200, 200, 50, 50);
}

