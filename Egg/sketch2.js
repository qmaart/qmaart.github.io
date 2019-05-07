//Creating animations

//animations like p5 images should be stored in variables
//in order to be displayed during the draw cycle
var egg;
let img;


//it's advisable (but not necessary) to load the images in the preload function
//of your sketch otherwise they may appear with a little delay
function preload() {
  //background image
  img = loadImage('Egg/image/pan.jpg');
  //create an animation from a sequence of numbered images
  //pass the first and the last file name and it will try to find the ones in between
  egg = loadAnimation('Egg/image/eggflip（front）00.png', 'Egg/image/eggflip（front）30.png');
  // img1 = loadImage('eggflipJPG/eggflip（front）00.png');
  //create an animation listing all the images files
  egg.looping = false;

}

function setup() {
  createCanvas(768, 1024);
  // background(255);

}

function draw() {
  background(255, 255, 255);
  image(img,0,0,768, 1024);
  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  flipEgg();
  animation(egg,384, 520);
  egg.goToFrame(0);
}

function flipEgg(){
  if(mouseIsPressed){
    egg.goToFrame(0);
  } else{
    egg.goToFrame(egg.getLastFrame());
  }
}
