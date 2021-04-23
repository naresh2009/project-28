
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world,engine;
var ground;
var tree;
var boy,boyImage;
var stone;
var mango,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
//var slingshot;
function preload()
{
	boyImage = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
  world = engine.world;
  
  	//Create the Bodies Here.

   ground = new Ground();
   
   stone = new Stone();
   boy= createSprite(200,650,20,20);
   boy.scale=0.05;
   boy.addImage(boyImage);
   mango = new Mango();
   mango1 = new Mango();
   mango2 = new Mango();
   mango3 = new Mango();
   mango4 = new Mango();
   mango5 = new Mango();
   mango6 = new Mango();
   mango7 = new Mango();
   mango8 = new Mango();
   mango9 = new Mango();
   mango10 = new Mango();
   //slingshot = new Slingshot(stone.body,{x:150,y:600});
  Engine.run(engine);
  tree = new Tree();
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  ground.display();
  stone.display();
  tree.display();
  boy.display();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  //slingshot.display();
  drawSprites();
 
}



