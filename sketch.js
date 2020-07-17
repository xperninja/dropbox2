var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dropzoneleft,leftsprite;
var dropzoneright,rightsprite;
var dropzonemid,rightmid;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

dropzoneleft = Bodies.rectangle(width/2-60,605,15,80,{isStatic:true});
leftsprite = createSprite(width/2-60,605,15,80);
leftsprite.shapeColor = color(255,0,0);
World.add(world,dropzoneleft);

dropzoneright = Bodies.rectangle(width/2+60,605,15,80,{isStatic:true});
rightsprite = createSprite(width/2+60,605,15,80);
rightsprite.shapeColor = color(255,0,0);
World.add(world,dropzoneright);

dropzonemid = Bodies.rectangle(width/2,650,125,15,{isStatic:true});
midsprite = createSprite(width/2,650,134.5,15);
midsprite.shapeColor = color(255,0,0);
World.add(world,dropzonemid);

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)




	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y; 
leftsprite.x = dropzoneleft.position.x;
leftsprite.y = dropzoneleft.position.y;
rightsprite.x = dropzoneright.position.x;
rightsprite.y = dropzoneright.position.y;
midsprite.x = dropzonemid.position.x;
midsprite.y = dropzonemid.position.y;

 keyPressed(); 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
  Matter.Body.setStatic(packageBody,false);   
  }
}