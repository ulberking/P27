class Paper
{
constructor(x,y,r){
    var paper_features = {
        restitution : 1,
        friction : 1
      }
    this.paper = Bodies.circle(x,y,r,paper_features)
    World.add(myWorld,this.paper)
    this.r = r
}
display(){
    push()
    translate (this.paper.position.x,this.paper.position.y)
    rotate(this.paper.angle)
    
    ellipse (0,0,40,40)
    pop()
}
}