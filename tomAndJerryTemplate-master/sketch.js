var jerryOne,jerryy;
var garden,gardenImg;
var tomOne,tomTwo,tomThree,tomFour,tom_running,tom_collided,tomLastImg,tom_still;
function preload() {
    //load the images here
    tomLastImg=loadAnimation("images/tomFour.png");
    tom_still=loadAnimation("images/tomOne.png");
    tom_running=loadAnimation("images/tomTwo.png", "images/tomThree.png","images/tomFour.png");
    tom_collided=loadAnimation("images/tomTwo.png");
    gardenImg=loadImage("images/garden.png");
    jerryOne=loadAnimation("images/jerryOne.png");
    jerryTwo = loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(600,600);
    tom=createSprite(450,480,20,50);
    tom.addAnimation("collided",tom_still);
    tom.addAnimation("running", tom_running);
    tom.addAnimation("lastImage",tomLastImg);

    tom.scale=0.1;
    tom.velocity=2;
    //create tom and jerry sprites here
    garden=createSprite(0,300,1200,1200);
    garden.addImage("garden",gardenImg);

    jerry=createSprite=(50,480,20,50);
    jerry.addAnimation("any",jerryOne)

    jerry.scale=0.1;
    jerry.velocityX=0;

    tom.setCollider("circle" , 100,0,40);
    tom.debug = false;

}

function draw() {

    background(gardenImg);
    
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0
    }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.addAnimation("tom_running",tomTwo);
        tom.changeAnimation("tom_running");
    }
  //For moving and changing animation write code here


}
