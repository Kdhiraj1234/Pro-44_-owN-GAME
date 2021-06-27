var hero,villain,villain2;
var heroImg;
var bgImg;
var winnerRibbon;
var score = 0;
var gameState = 1;
var leftEdge,rightEdge;

function preload(){
    heroImg = loadImage("heroImg.png");
    bgImg = loadImage("bg.png");
}

function setup(){
  createCanvas(displayWidth,displayHeight);
 
  hero = createSprite(displayWidth/2,displayHeight-100,10,10);
  hero.addImage(heroImg);
  hero.scale = 0.15;

  winnerRibbon = createSprite(displayWidth/2,displayHeight/10,300,10);
  winnerRibbon.shapeColor = "red";

  villain = new Villain();
  villain2 = new Villain();
  
}

function draw(){
  background(bgImg);

  if(gameState === 1){
  villain.show();

  textSize(15)
  fill("black")
  text("SCORE :"+score,displayWidth/6,displayHeight/8);

  if(keyDown(UP_ARROW)){
    hero.velocityY = -4;
  }

  if(keyDown(DOWN_ARROW)){
    hero.velocityY= 4;
  }

  if(keyDown(RIGHT_ARROW)){
    hero.velocityX = -4;
  }

  if(keyDown(LEFT_ARROW)){
    hero.velocityX = 4;
  }
  }

   if(villain.x === hero.x || villain.y === hero.y || villain2.x === hero.x || villain2.y === hero.y){
    gameState = 0;
  }

  if(gameState === 0){
    textSize(40);
    text("GAMEOVER",displayWidth/2-25,displayHeight/2);
    text("SCORE:"+score,displayWidth/2-5,displayHeight/2+20)
  }

  if(winnerRibbon.x === hero.x && winnerRibbon.y === hero.y){
     gameState = 2;
     hero.velocityX = 0;
     hero.velocityY = 0;
     score = 1
  }

  if(gameState === 2){
    textSize(40);
    fill("black");
    text("YOU WIN",displayWidth/2-75,displayHeight/2);
    text("SCORE:"+score,displayWidth/2-5,displayHeight/2+70)
  }


  drawSprites();
}