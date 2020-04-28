var sun ;
var planet1,planet2 ,planet3 ;

function setup() {
  createCanvas(400,400);
  
  sun = createSprite (50,200,250,350);
  planet1 = createSprite (250,100,50,50);
  planet2 = createSprite (300,200,50,50);
  planet3 = createSprite (350,300,50,50);

}

function draw() {
  background("black");  
  drawSprites();
sun.shapeColor="orange";
planet1.shapeColor="green";
planet2.shapeColor="blue";
planet3.shapeColor="purple";

planet1.velocityX= -1 ;
planet2.velocityX= -2 ;
planet3.velocityX= -3 ;

if (sun.isTouching(planet1)) {
  planet1.destroy();
}
if (sun.isTouching(planet2)) {
  planet2.destroy();
}
if (sun.isTouching(planet3)) {
  planet3.destroy();
}

drawSprites();

}