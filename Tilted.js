class Tilted{

    constructor(x,y,width,height)
    {
    var options={
        isStatic:true,
        
    }
    this.body=Bodies.rectangle(x,y,50,100,options)
    World.add(this.body,World)
/*this.x=x;
this.y=y;
this.angle=angle*/
}

display(){

var pos =  this.body.position
var angle = this.body.angle

push()
translate(pos.x,pos.y)
rotate(angle)
strokeWeight(2)
fill("white")
rect(0,300,150,30)
pop();
}

}