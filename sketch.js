var bullet,wall
var speed,weight
var thickness
var damage

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(400, 200, 50, 20);

  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)

  wall = createSprite(1200,200,thickness,height/2)
  wall.shapeColor = color(80,80,80)

  bullet.velocityX = speed;


}

function draw() {
  background(255,255,255);  
  
  bullet.collide(wall)
  damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness)
    if(damage>10){
      bullet.shapeColor = color(255,0,0)
    }

    if(damage < 10){
      bullet.shapeColor = color(0,255,0)
    }

  
  drawSprites();
}