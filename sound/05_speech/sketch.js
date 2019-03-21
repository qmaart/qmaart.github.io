'use strict'

// speech library documentation: http://ability.nyu.edu/p5.js-speech/
// example source code: https://github.com/IDMNYU/p5.js-speech/blob/master/examples/01simple.html

// let talkButton;
let talkButton = select('#talk');
let voice = new p5.Speech(); //new p5.Speech object
let wordInput;

function setup() {
  talkButton = select('#talk');
  wordInput = select('#speechInput');
  talkButton.mousePressed(speak);

  voice.listVoices();

}

function draw() {

}

function speak() {
  voice.speak('so so so cool');
  voice.speak(wordInput.value());
}
