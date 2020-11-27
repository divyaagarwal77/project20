var car1  ;
var wall1 ;
var speed , weight ;
function setup() {
  createCanvas(1600,400);
 car1 =  createSprite(100, 200, 50, 50);
 wall1 =  createSprite(1500, 200, 50, height/2);
 speed = random (55,90);
 weight= random (400,800);
 car1.shapeColor= "purple"
 wall1.shapeColor= "orange"
 
}

function draw() {
  background(0);  

  if (  keyDown ("space")  )
 
 {car1.veocityX = speed};
 
if (wall1.x - car1.x < (car1.width + wall1.width)/2)
{
car1.veocityX=0;
var deformation= 0.5 * weight * speed * speed /22509;
if (deformation>180){
  car1.shapeColor = color (255,0,0);
}
if (deformation < 180 && deformation>100 )
{
 car1.shapeColor = color (230,230,0);
}
if (deformation<100)
{
  car1.shapeColor= color (0 ,255,0);
}
}
  drawSprites();
}