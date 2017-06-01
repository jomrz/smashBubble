var Target = function(pos, rad, points) {
	
	let self = this
	this.position = createVector(pos.x, pos.y)
	this.velocity = 1
	


	function angle(){
		let dy = ship.position.y - self.position.y
		let dx = ship.position.x - self.position.x
		return atan2(dy, dx)
	}


	function heading() {
		let vx = self.velocity * cos(angle())
		let vy = self.velocity * sin(angle())
		console.log(vx + " " + vy)
		return createVector(vx, vy)
	}

	//this.directionVector = () => createVector(this.vx, this.vy);

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
		this.position.add(heading()) 
	}
}
