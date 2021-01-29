
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob(700,100,40);
	bob2 = new Bob(620,100,40);
	bob3 = new Bob(540,100,40); 
	bob4 = new Bob(460,100,40);
	bob5 = new Bob(380,100,40);
	roof = new Roof(400,360,width/2,40);
	chain1 = new Chain(bob1.body,roof.body);
	chain2 = new Chain(bob2.body,roof.body);
	chain3 = new Chain(bob3.body,roof.body);
	chain4 = new Chain(bob4.body,roof.body);
	chain5 = new Chain(bob5.body,roof.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

}



