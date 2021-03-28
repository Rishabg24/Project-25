
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	Engine.update(engine);
	//Create the Bodies Here.
	paper= new Paper(100,100,70);
	dustbin1=new Dustbin(600,690,50,100);
	dustbin2=new Dustbin(650,600,100,50);
	dustbin3=new Dustbin(750,690,50,100);
	ground=new Ground(400,700,800,10);
	

 

	Engine.run(engine);
	
  
}


function draw() {
  
  background(0);
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  
  keyPressed();
}

function keyPressed(){
 if (keyCode === UP_ARROW){

Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})

 }
}


