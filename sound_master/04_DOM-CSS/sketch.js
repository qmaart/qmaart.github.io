'use strict'

//sounds
let bearSound;
let camelSound;
let otterSound;

//buttons
let bearButton;
let camelButton;
let otterButton;
let stopButton;


function preload() {
  bearSound = loadSound('../assets/animals/blackBear.mp3');
  camelSound = loadSound('../assets/animals/camel.mp3');
  otterSound = loadSound('../assets/animals/otterChirp.mp3');
}

function setup() {
  bearButton = select('#bear');
  otterButton = select('#otter');
  camelButton = select('#camel');

  bearButton.mousePressed(playBearSound);
  otterButton.mousePressed(playOtterSound);
  camelButton.mousePressed(playCamelSound);

  stopButton = createButton('stop');
  stopButton.parent('#buttonDiv');
  stopButton.style('background-color', '#ff2222')
  stopButton.mousePressed(stopSounds);
}

function draw() {
}

function playBearSound() {
  bearSound.play();
}

function playOtterSound() {
  otterSound.play();
}

function playCamelSound() {
  camelSound.play();
}

function stopSounds() {
  bearSound.stop();
  otterSound.stop();
  camelSound.stop();
}



// let bearSound;
// let camelSound;
// let otterSound;
//
//
// function preload() {
//   bearSound = loadSound('../assets/animals/blackBear.mp3');
//   camelSound = loadSound('../assets/animals/camel.mp3');
//   otterSound = loadSound('../assets/animals/otterChirp.mp3');
// }
//
// function setup() {
// }
//
// function draw() {
// }
//
