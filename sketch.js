var wall,thickness;
var bullet,speed,weight;

function setup() {
  var canvas = createCanvas(1200,400);
thickness=random(22,83);

wall=createSprite(1100,200,thickness,height/2);

speed=random(223,321);
weight=random(30,52);

bullet=createSprite(50,200,100,10);
bullet.shapeColor="silver";
bullet.velocityX=speed;

}

function draw() {
  
  background("gray"); 
 
  if(hasCollied(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}
function hasCollied(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  else return false;
  }
