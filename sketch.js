const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World=Matter.World;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var a;
var circles=[];
function setup() {
  createCanvas(800,800);
  stroke(255)
  
  	engine = Engine.create();
	world = engine.world;
  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)


  ground = new Ground(600,600,200,20);
  
  ground2 = new Ground(600,200,200,20);
  
  box1 = new Box (570,170,30,30);
   box2 = new Box (600,170,30,30);
 box3 = new Box (630,170,30,30);
   box4 = new Box (585,140,30,30);
   box5 = new Box (615,140,30,30);
   box6 = new Box (600,110,30,30);
  
   box7 = new Box (570,570,30,30);
   box8 = new Box (600,570,30,30);
   box9 = new Box (630,570,30,30);
   box10 = new Box (585,540,30,30);
   box11 = new Box (615,540,30,30);
   box12 = new Box (600,510,30,30);
 poly= new Balls (100,500,20)
  chai=new Chain (poly.body,{x:100,y:500});

 
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  Engine.update(engine);
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);

 ground.display();
  ground2.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
  
   box7.display();
   box8.display();
   box9.display();
   box10.display();
   box11.display();
   box12.display();
 poly.display();
  chai.display();
   
 
 drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(poly.body,{x:mouseX,y:mouseY});
  //chai.attach(poly.body)
}


function mouseReleased(){

	chai.fly();
}