//The setup function only happens once
var sandy=0;

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
 background(203,0,20); //an RGB color for the canvas' background
  //circle

}

//The draw function happens over and over again
function draw() {
  
  stroke(255,255,127) // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(175,400,sandy,sandy); // center of canvas, 20px dia

  fill(210,180,230);
  strokeWeight(2);
  rect(random(0,75),random(0,100),50,50);
  fill(79,mouseX,mouseY);

  triangle(150,mouseY-20,300,mouseY-150,400,mouseY-150);
  stroke(245,12,186);
  strokeWeight(5);
  line(100,100,400,sandy);

  textFont('Courier');

  textSize(50)
  text('World Trigger',75,250)
  strokeWeight(0)
  ellipse(mouseX,mouseY,20,20)
}

function mousePressed(){
 if (sandy>=300) {
  sandy=0;
 } else {
  sandy=sandy+10;
 }
}
