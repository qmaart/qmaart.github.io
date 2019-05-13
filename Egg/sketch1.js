//Setting a sprite lifespan and visibility
//click on the canvas to create self destructing sprite and toggle visibility

var egg;
let img,img1,img2,img4,bg;
var bgsound,cookingsound,cracksound;
var count=1;
var henY=-1500;


function preload() {
  //background image
  bg = loadImage('image/background.png');
  img = loadImage('image/pan.png');
  img1 = loadImage('image/hen.png');
  img2 = loadImage('image/crack.png')
  // img3 = loadImage('image/background.png')
  img4 = loadImage('image/hint.png')
  bgsound = loadSound('sound/backgroundmusic.mp3');
  cookingsound = loadSound('sound/cooking.wav');
  cracksound = loadSound('sound/crack1.wav');
}

function setup() {
  createCanvas(1024, 1366);
  // createCanvas(768, 1024);
  egg = createSprite(width/2, height/2);
  egg.addAnimation('normal', 'image/egg00.png', 'image/egg01.png');
  egg.velocity.x = 3;
  egg.scale=1.5;
  bgsound.loop();
  cookingsound.loop();

}

function draw() {
  background(247, 217, 200);
  image(bg,0,0,width,height);
  image(img,0,0,width,height);
  image(img4,0,0,width,height);
  //sprites' visibility can be turned on an off
  //and invisible sprite is still updating normally

  if(mouseIsPressed){
    egg.visible = false;
  }
  else{
    egg.visible = true;
  }

    if(egg.position.x > width/2){
        egg.position.x = width/2+1;
    }
  //draw the sprites
  drawSprites();
  image(img1,0,henY,width,height);

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
  var flippingegg = createSprite(width/2, height/2);
  flippingegg.addAnimation('normal', 'image/egg00.png', 'image/egg30.png');
  //set a self destruction timer (life)
  flippingegg.life = 120;
  flippingegg.scale=1.5
  if (count>5){
  flippingegg.visible=false;
  cracksound.play();
  // img(img2,random(),random(),200,200);
  }
}

function deviceTurn(){
  if (turnAxis === 'X'||turnAxis === 'Y') {
    count++;
    henY=henY+120;
    //create a sprite
    var flippingegg = createSprite(width/2, height/2);
    flippingegg.addAnimation('normal', 'image/egg00.png', 'image/egg30.png');
    //set a self destruction timer (life)
    flippingegg.life = 120;
    flippingegg.scale=1.5
    if (count>5){
    flippingegg.visible=false;
    cracksound.play();
    // img(img2,random(),random(),200,200);
    }
}
}

// function deviceMoved(){
//     count++;
//     henY=henY+120;
//     //create a sprite
//     var flippingegg = createSprite(width/2, height/2);
//     flippingegg.addAnimation('normal', 'image/egg00.png', 'image/egg30.png');
//     //set a self destruction timer (life)
//     flippingegg.life = 120;
//     flippingegg.scale=1.5
//     if (count>5){
//     flippingegg.visible=false;
//     // img(img2,random(),random(),200,200);
//     }
// }
