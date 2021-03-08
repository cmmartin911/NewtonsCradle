
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, groundObject, rope1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	bobObject1 = new bob(400,350,25);
	bobObject2 = new bob(450,350,25);
	bobObject3 = new bob(500,350,25);
	bobObject4 = new bob(350,350,25);
	bobObject5 = new bob(300,350,25);
	groundObject = new ground(400,25,250,10);
	rope1 = new rope(bobObject1.body,{x:400, y:31});
	rope2 = new rope(bobObject2.body,{x:450, y:31});
	rope3 = new rope(bobObject3.body,{x:500, y:31});
	rope4 = new rope(bobObject4.body,{x:350, y:31});
	rope5 = new rope(bobObject5.body,{x:300, y:31});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  drawSprites();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  groundObject.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  if(keyWentDown(UP_ARROW)){
    Body.applyForce(bobObject3.body, bobObject3.body.position, {x:10000,y:-10000});
 }
 
}



