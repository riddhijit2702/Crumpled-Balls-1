class Dustbin{

    constructor(x,y,width,height)
    {
    var options={
        isStatic:true,
        
    }
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y+height/2,width,height,options)
    World.add(world,this.body)

    this.rightbody=Bodies.rectangle(x+width/2,y-width/2,height,width,options)
    World.add(world,this.rightbody)

    this.leftbody=Bodies.rectangle(x-width/2,y-width/2,height,width,options)
    World.add(world,this.leftbody)
/*this.x=x;
this.y=y;
this.angle=angle*/
}

display(){

var pos =  this.body.position
var pos2 =  this.rightbody.position
var pos3 =  this.leftbody.position
//var angle = this.body.angle

push()
translate(pos.x,pos.y)
strokeWeight(2)
fill("white")
rect(0,0,this.width,this.height)
pop();

push()
translate(pos2.x,pos2.y)
strokeWeight(2)
fill("white")
rect(0,0,this.height,this.width)
pop();

push()
translate(pos3.x,pos3.y)
strokeWeight(2)
fill("white")
rect(0,0,this.height,this.width)
pop();
}

}
