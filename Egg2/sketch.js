//Sprite creation
//Click to create a new sprite with random speed

var egg,chick;
var chicksound;

function preload(){
  egg=loadImage('egg.png');
  chick=loadImage('chick.png');
  chicksound = loadSound('chick.wav');
}
function setup() {
  createCanvas(1024, 1366);
  textFont('Baloo Bhai');
}

function draw() {
  background(252, 201, 224);
  fill(0);
  textAlign(CENTER);
  textSize(100);
  text('Click the egg', width/2, height/2);
  //draw all the sprites added to the sketch so far
  //the positions will be updated automatically at every cycle
  image(egg,mouseX-100,mouseY-100,1024,1366);
  drawSprites();
}

function mousePressed() {

  //create a sprite at the mouse position and store it in a temporary variable
  var s = createSprite(mouseX+360, mouseY+600, 30, 30);
  s.addImage(chick);
  //if no image or animation is associated it will be a rectancle of the specified size
  //and a random color

  //now you can use the variable to set properties
  //e.g. a random velocity on the x and y coordinates
  s.velocity.x = random(-5, 5);
  s.velocity.y = random(-5, 5);
  chicksound.play();
}
