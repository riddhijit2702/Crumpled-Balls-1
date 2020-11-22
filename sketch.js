const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball,dustbin,ground,dustbin1,dustbin2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ball=new Ball(100,663,30)
  ground=new Ground(400,680,800,20)
  dustbin=new Dustbin(400,300,30,150)
  dustbin1=new Dustbin(600,300,30,150)
  dustbin2=new Tilted(500,350,150,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


  ground.display();
  ball.display();
  dustbin.display();
  dustbin1.display();
  dustbin2.display();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW){
   Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
}

