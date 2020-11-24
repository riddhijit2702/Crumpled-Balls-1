class Ball{

constructor(x,y,r)
{
var options={
    isStatic:false,
    density:1.2,
    restitution:1,
    friction:1,
}
this.x=x
this.y=y
this.r=r
this.body=Bodies.circle(this.x,this.y,r/2,options)
World.add(world,this.body)
}
display(){

var paperpos=this.body.position

push()
translate(paperpos.x,paperpos.y)
rectMode(CENTER)
stroke("red")
strokeWeight(2)
fill("pink")
ellipse(0,0,this.r,this.r)
pop()




}


}
