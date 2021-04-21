class Stone{
    constructor(x,y,width,height) {
        var options = {
            'density':1.5,
            'friction':1.0,
            'restitution' : 0.5
        }
        polygon= Bodies.circle(50,200,20);
        this.width=50;
        this.height=50;
        this.Image=loadImage("polygon.png");
        World.add(world,polygon);

       
}
display(){
    var pos=this.body.position;
    pos.x= mouseX;
    pos.Y=mouseY;
    var angle = this.body.angle;

    Push();
    Translate(pos.x,pos.y);
    rotate(angle);
    strokeweight(3)
    stroke('blue')
    fill('red')
    ImageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);
    pop();
}
}