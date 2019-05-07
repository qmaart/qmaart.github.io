//egg's position
var value = 100;
//how many times you have turn the pan
var count =0;
//how close the hen is (Hen's position)
var henlocation=-100;




function setup(){
  createCanvas(600,600);
  background(255);
  //pan handle
  rect(250,height/2,100,300);
  //pan
  fill(255);
  ellipse(width/2,height/2,500,500);
  ellipse(width/2,height/2,400,400);

}


function draw() {
  //test rectangle
  fill(value);
  rect(25, 25, 50, 50);
  //egg
  fill(255,255,0);
  noStroke();
  ellipse(width/2,height/2,value,value);
  // hen
  fill(250,100,0);
  rect(width/2-150, henlocation,300,300);
}

//Mobile use version
function deviceTurned() {
  //when the player turn the pan, the egg will go toward player and drop down on the pan (egg size will change become bigger-> smaller-> orignial)
  if (turnAxis === 'X'||turnAxis ==='Y') {
    //if the egg is on the pan when player turning the pan, the egg will start change the size
    if (value === 100) {
      //use sin() to control the speed of egg's size change
      for(var x=0;x<=PI;x=x+0.001){
        value=sin (x)*50+value;
      }
      //every time turn the pan, the count will add 1
      count++;
      // henlocation=count*100-100;
    }else{
      //if the egg is in the air when turning the pan, the egg go back on pan
      value=100;
    }
  }
}

//computer use version
function mouseClicked(){
  //when the player click the screen, the egg will go toward player and drop down on the pan (egg size will change become bigger-> smaller-> orignial)
    //if the egg is on the pan when player turning the pan, the egg will start change the size

    if (value === 100) {
      //use sin() to control the speed of egg's size change
      for(var x=0;x<=PI;x=x+0.1){
        value=sin (x)*50+value;
      }
      //every time turn the pan, the count will add 1
      count++;
      // henlocation=count*100-100;
    }else{
      //if the egg is in the air when turning the pan, the egg go back on pan
      value=100;
    }
  }


//every time turn the pan, the hen will come closer
function Hen(){
  if(count<5){
    henlocation=count*100-100;
  }else{
    //the 5th time the player turn the pan, the hen will come super closer, she is angry and break the screen
    henlocation=600;
    stroke(0);
    line(100,100,400,400);
    line(100,400,400,100);
  }
}
