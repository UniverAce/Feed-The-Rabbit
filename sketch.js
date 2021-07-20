var garden,rabbit;
var gardenImg,rabbitImg,appleImg,orgleafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  orgleafImg = loadImage ("orangeLeaf.png")
  appleImg = loadImage ("apple.png")

}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}



function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX
  
  spawnApples();
  spawnLeaves();
  drawSprites();
}

function spawnApples() {
  if(frameCount%80===0) {
    var apple=createSprite(400,200,40,20);
    apple.addImage(appleImg);
    apple.x=Math.round(random(20,320))
    apple.scale=0.05
    apple.velocityY=3
  }
}

function spawnLeaves() {
  if (frameCount%80===0){
  var orangeleaf= createSprite(300,150,40,20);
  orangeleaf.addImage(orgleafImg);
  orangeleaf.x=Math.round(random(30,390))
  orangeleaf.scale=0.05
  orangeleaf.velocityY=2
 }
}

