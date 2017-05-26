//Target Class


var Target = function(pos, rad, points) {
    this.position = createVector(pos.x, pos.y)
	//this.velocity = createVector(random(-1, 1), random(0, 1));
	this.velocity = 0.05
	
	this.dy = ship.position.y - this.position.y
	this.dx = ship.position.x - this.position.x
	this.angle = atan2(this.dy,this.dx)
	this.vx = (this.velocity * cos(this.angle))
	this.vy = (this.velocity * sin(this.angle))
	
    this.directionVector = createVector(this.vx, this.vy);
   
	this.radius = rad
    this.points = points
	

    this.run = function() {
        this.update()
        this.display()
    }

    this.alive = true

    this.display = function() {
        push()
        
        translate(this.position.x, this.position.y)
        fill(255, 100)
        stroke(255, 180)
        ellipse(0, 0, this.radius * 2, this.radius * 2)

        pop()
    }

    this.isHit = function(index) {
        this.alive = false

    }

    this.update = function() {
        //this.velocity.add(this.acceleration)
        this.position.add(this.directionVector)
    }
}
