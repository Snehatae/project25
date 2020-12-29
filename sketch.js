
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body= Matter.Body;

var engine, paper,world;
var ground,block1,block2,block3;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

 block1= new Block(900,395,130,10);
 block2= new Block(840,350,10,150);
 block3= new Block(960,350,10,150);

    ground = Bodies.rectangle(200,390,400,25,ground_options);
    World.add(world,ground);

	Matter.Bodies.circle(20,30,55,55);
    
    paper= new Circle(200,200,7,7);
    
}

function draw(){
    background(0);
    Engine.update(engine);
   
	ellipseMode(RADIANS);
    paper.display();
    block1.display();
    block2.display();
    block3.display();

    keyPressed();
}

function keyPressed(){
    if(keyCode=== UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})

    }
}

