var backImage,background;
var player, player_running;
var ground;

var FoodGroup, bananaImage;
var obstaclesGroup, obstacle_img;

var gameOver;
var score=0;

function preload(){
  backImage=loadImage("jungle.jpg");
player_running= loadAnimation ("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
 bananaImage = loadImage("banana.png");
  obstacle_img = loadImage("stone.png"); 
  
}

function setup() {
  createCanvas(600,600);
  
 background = createSprite(200,300)
 background.addImage(backImage)
  
 player = createSprite(100,500,10,10)
 player.addAnimation("running",player_running)
 player.scale = 0.12;
  
  
 ground = createSprite(200,530,600,10) 
 ground.visible = false;
  
 FoodGroup = new Group();
 obstaclesGroup = new Group(); 
 
  
  
}

function draw() {
  
  background.velocityX = -3
  
   if (background.x < 100){
      background.x = background.width/2;
    }
 
  
  player.collide(ground)
   
 if(keyDown("space")&& player.y >= 390) {
        player.velocityY = -17   ;
    }
  player.velocityY = player.velocityY+0.6;
  
  food();
  Obstacle();
  
  if(FoodGroup.isTouching(player)){
     FoodGroup.destroyEach();
     score = score+2;
     }       
  
  
  drawSprites();
  
  switch(score){
    case 5 : player.scale = 0.14;   
          break;
    case 10 :player.scale = 0.16;
          break;
    case 15 :player.scale = 0.18;
          break;
    case 20 :player.scale = 0.2;  
  
  }
  
  if (obstaclesGroup.isTouching(player) ){
     player.scale = 0.09;
  }
    
   stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50)
}


function food() {
  if (frameCount % 60 === 0) {
    banana = createSprite(600,250,40,10);
    banana.y = random(220,400);    
    banana.velocityX = -5;
    banana.lifetime = 120;
    player.depth = banana.depth + 1;
     banana.addImage(bananaImage);
     banana.scale=0.07;
     FoodGroup.add(banana);
  }
}

function Obstacle() {
  if(frameCount % 200 === 0) {
    obstacle = createSprite(800,500,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstacle_img);
    obstacle.scale=0.2;   
    obstacle.lifetime = 133;
    obstaclesGroup.add(obstacle);
  }
}


