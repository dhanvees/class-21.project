const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var rightSide;
var leftSide;
var ball;
var ground;

function preload()
{
	
}

function setup() {
  createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;



	//Create the Bodies Here.
  var options = {
    isStatic : true
  };
   
 ground = Bodies.rectangle(400,350,800,10,options);
	 World.add(world,ground);

 rightSide = Bodies.rectangle(700,320,20,120,options);
	 World.add(world,rightSide);

 leftSide = Bodies.rectangle(600,320,20,120,options);
   World.add(world,leftSide);



  var ball_options = {
    isStatic : false,
    restitution : 0.1,
    frictionAir : 0,
    density : 1.2 
  }

	ball = Bodies.circle(80,150,10,ball_options);
   World.add(world,ball);

  Engine.run(engine);
}

function draw() {
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  background(0);
 fill("grey");
  rect(ground.position.x,ground.position.y,800,5);
  fill("lightblue");
  rect(rightSide.position.x,rightSide.position.y,5,60);
  fill("lightblue");
  rect(leftSide.position.x,leftSide.position.y,5,60);
  fill("teal");
  ellipse(ball.position.x,ball.position.y,10,10);

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{x : 20 , y : -9});
  }
}



