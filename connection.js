class Connection{
	constructor(a,b){
	var connection_featurs = {
		bodyA : a,
		bodyB : b,
		stiffness : 0.04,
		length : 300
	}
	this.c = Constraint.create(connection_featurs)
	World.add(myWorld,this.c)
	
	}
	display(){
	var a = this.c.bodyA.position
	var b = this.c.bodyB.position
	push ()
	stroke("blue")
	strokeWeight(5)
	line (a.x,a.y,b.x,b.y)
	pop()
	}
	
	}