
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var paper1, paper2, paper3, paper4, paper5, c1,c2,c3,c4,c5,roof1,roof2,roof3,roof4,roof5,ground
var world;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	myEngine = Engine.create();
	myWorld = myEngine.world;
    ground = new Ground(400,595,800,10)
	roof1 = new Ground(320,100,40,10)
	roof2 = new Ground(360,100,40,10)
	roof3 = new Ground(400,100,40,10)
	roof4 = new Ground(440,100,40,10)
	roof5 = new Ground(480,100,40,10)
	paper1 = new Paper(320,300,20)
	paper2 = new Paper(360,300,20)
	paper3 = new Paper(400,300,20)
	paper4 = new Paper(440,300,20)
	paper5 = new Paper(480,300,20)
	c1 = new Connection (paper1.paper,roof1.ground)
	c2 = new Connection (paper2.paper,roof2.ground)
	c3 = new Connection (paper3.paper,roof3.ground)
	c4 = new Connection (paper4.paper,roof4.ground)
	c5 = new Connection (paper5.paper,roof5.ground)
	Engine.run(myEngine);
	
  
}


function draw() {
  background(230);
 ground.disPlay()
 roof1.disPlay()
 roof2.disPlay()
 roof3.disPlay()
 roof4.disPlay()
 roof5.disPlay()
 paper1.display()
 paper2.display()
 paper3.display()
 paper4.display()
 paper5.display()
 c1.display()
 c2.display()
 c3.display()
 c4.display()
 c5.display()
}
function keyPressed(){
	if(keyDown("UP_ARROW")){
		Matter.Body.applyForce(paper1.paper,paper1.paper.position,{x:-0.105,y:-0.105})
	}
	}