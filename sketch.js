var ship, sea, ship_running;
var seaImage;

function preload(){
ship_running = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  ship= createSprite(200,160,20,50);
  ship.addAnimation("running", ship_running);
  edges =createEdgeSprites();
  ship.scale = 2;
  ship.x= 50;
  sea = createSprite(200,80,400,50);
  sea.addImage("sea", seaImage);
  sea.x = sea.width/2;

  
  
}

function draw() {
  background("blue");
  sea.velocityX = -2;
  console.log(sea.y);

  if (sea.x<0){
    sea.x = sea.width/2;
  }
  if(keyDown("space")){
    ship.velocityY = -10;
  }
  ship.velocityY = ship.velocityY + 0.5;

  ship.collide(sea);

  drawSprites();
 
}