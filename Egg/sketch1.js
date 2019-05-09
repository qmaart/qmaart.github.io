//Setting a sprite lifespan and visibility
//click on the canvas to create self destructing sprite and toggle visibility

var egg;
let img, img1;
var count=1;
var henY=-1100;


function preload() {
  //background image
  img = loadImage('image/pan.jpg');
  img1 = loadImage('image/hen.png');
  img2 = loadImage('image/crack.png')
}

function setup() {
  createCanvas(768, 1024);
  egg = createSprite(384, 512);
  egg.addAnimation('normal', 'image/egg00.png', 'image/egg01.png');
  egg.velocity.x = 3;
}

function draw() {
  background(255, 255, 255);
  image(img,0,0,768, 1024);
  //sprites' visibility can be turned on an off
  //and invisible sprite is still updating normally

  if(mouseIsPressed)
    egg.visible = false;
  else
    egg.visible = true;

    if(egg.position.x > width/2)
        egg.position.x = width/2+1;

  //draw the sprites
  drawSprites();
  image(img1,0,henY,768, 1024);

  if (count>5){
  henY=0;
  image(img2,0,0,1000,1000);
  }
}

//every mouse press
function mousePressed() {
  count++;
  henY=henY+120;
  //create a sprite
  var flippingegg = createSprite(384, 512);
  flippingegg.addAnimation('normal', 'image/egg00.png', 'image/egg30.png');
  //set a self destruction timer (life)
  flippingegg.life = 120;
  if (count>5){
  flippingegg.visible=false;
  // img(img2,random(),random(),200,200);
  }
}
