var plr, plrImg, enemy, enemyImg,bg, bgImage;
var gameState,reward, rewardImg;

var plrWalks, plrAttacks, plrJumps, plrDies;

var enemyRuns, enemyAttacks, enemyDies;

var zombieRuns, zombieAttacks, zombieDies;

var platform1, platform2;
var platform1Img, platform2Img;

function preload(){
  bgImage = loadImage("images/bg/bg.jpg")
  
  plrWalks = loadAnimation("images/freeknight/png/Run (1).png",
  "images/freeknight/png/Run (2).png", "images/freeknight/png/Run (3).png", "images/freeknight/png/Run (4).png", 
  "images/freeknight/png/Run (5).png", "images/freeknight/png/Run (6).png", "images/freeknight/png/Run (7).png",
  "images/freeknight/png/Run (8).png", "images/freeknight/png/Run (9).png", "images/freeknight/png/Run (10).png");
  
  plrAttacks = loadAnimation("images/freeknight/png/Attack (1).png","images/freeknight/png/Attack (2).png",
  "images/freeknight/png/Attack (3).png","images/freeknight/png/Attack (4).png","images/freeknight/png/Attack (5).png",
  "images/freeknight/png/Attack (6).png","images/freeknight/png/Attack (7).png","images/freeknight/png/Attack (8).png",
  "images/freeknight/png/Attack (9).png","images/freeknight/png/Attack (10).png");
  
  plrJumps = loadAnimation("images/freeknight/png/Jump (1).png","images/freeknight/png/Jump (2).png",
  "images/freeknight/png/Jump (3).png","images/freeknight/png/Jump (4).png","images/freeknight/png/Jump (5).png",
  "images/freeknight/png/Jump (6).png","images/freeknight/png/Jump (7).png","images/freeknight/png/Jump (8).png",
  "images/freeknight/png/Jump (9).png","images/freeknight/png/Jump (10).png");
   
  plrDies = loadAnimation("images/freeknight/png/Dead (1).png","images/freeknight/png/Dead (2).png",
   "images/freeknight/png/Dead (3).png","images/freeknight/png/Dead (4).png","images/freeknight/png/Dead (5).png",
   "images/freeknight/png/Dead (6).png","images/freeknight/png/Dead (7).png","images/freeknight/png/Dead (8).png",
   "images/freeknight/png/Dead (9).png","images/freeknight/png/Dead (10).png",)

  enemyRuns = loadAnimation("images/freedinosprite/png/1.png","images/freedinosprite/png/2.png",
  "images/freedinosprite/png/3.png","images/freedinosprite/png/4.png","images/freedinosprite/png/5.png",
  "images/freedinosprite/png/Walk (6).png","images/freedinosprite/png/Walk (7).png","images/freedinosprite/png/Walk (8).png",
  "images/freedinosprite/png/Walk (9).png","images/freedinosprite/png/Walk (10).png");

  enemyAttacks = loadAnimation("images/freedinosprite/png/Run (1).png","images/freedinosprite/png/Run (2).png",
  "images/freedinosprite/png/Run (3).png","images/freedinosprite/png/Run (4).png","images/freedinosprite/png/Run (5).png",
  "images/freedinosprite/png/Run (6).png","images/freedinosprite/png/Run (7).png","images/freedinosprite/png/Run (8).png");

  enemyDies = loadAnimation("images/freedinosprite/png/Dead (1).png","images/freedinosprite/png/Dead (2).png",
  "images/freedinosprite/png/Dead (3).png","images/freedinosprite/png/Dead (4).png","images/freedinosprite/png/Dead (5).png",
  "images/freedinosprite/png/Dead (6).png","images/freedinosprite/png/Dead (7).png","images/freedinosprite/png/Dead (8).png")
  

  platform1Img = loadImage("images/platform/platform1.png")
  
  platform2Img = loadImage("images/platform/platform2.png")
}

function setup() {
  createCanvas(800,400);
  bg = createSprite(400, 180, 50, 50);
  bg.addImage(bgImage)
  bg.scale = 1.8
  bg2 = createSprite(1370, 180, 50, 50);
  bg2.addImage(bgImage)
  bg2.scale = 1.8
  bg2.mirrorX(-1)

  
  plr = createSprite(200,150,50,50)
  plr.addAnimation("walk", plrWalks)
  plr.scale = 0.15
  
  platform1 = createSprite(200, 200)
  platform1.addImage(platform1Img)
  platform2 = createSprite(200, 400)
  platform2.addImage(platform2Img)

  platform1.scale = 0.7
  platform2.scale = 0.7
}

function draw() {
  background(255,255,255);  
camera.x = plr.x+200;
camera.y = plr.y;



  plr.collide(platform1)
  if(keyDown("space")){
    plr.velocityY = -8
  }


  if(keyDown("right")){
    plr.x += 10
  }

  if(keyDown("left")){
    plr.x -= 10
  }
  plr.velocityY += 0.6
 
  if(plr.x-platform1.x>400) platform1.x=plr.x+400;
  if(plr.x-bg.x>500) bg.x=plr.x+500;
  if(plr.x-bg2.x>500) bg2.x=plr.x+500;
  
  drawSprites();
}
