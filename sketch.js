const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,box1,box6;
var stone;

function preload(){

}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
 ground= new Ground(200,390,400,20);
 box1 = new Box1(330,235,30,40);
 box2 = new Box2(360,235,30,40);
 box3 = new Box3(390,235,30,40);
 box4 = new Box4(420,235,30,40);
 box5 = new Box5(450,235,30,40);
 box6 = new Box6(360,195,30,40);
 stone = new stone(50,200,20);
 slingshot = new slingShot(this.polygon,{x:100,y:200});
var options={
    bodyA: bird.body,
    bodyB:constraintstone.body,
    stiffness: 0.04,
    length:10
}
}



function draw(){
    background(0);
    Engine.update(engine);
   ground.dislpay();
 
   box1.dislpay();
   box2.dislpay();
   box3.dislpay();
   box4.display();
   box5.display();
   box6.display();
   stone.display();
   slingShot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
