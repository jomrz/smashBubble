var Target = function(pos, rad, points) {
	
	let self = this
	this.position = createVector(pos.x, pos.y)
	this.velocity = 1
	this.alive = true
	this.radius = rad
	this.points = points
	
	this.isHit = (index) => this.alive = false

	this.run = function() {
		this.update()
		this.display()
	}

	this.display = function() {
		push()
		
		translate(this.position.x, this.position.y)
		fill(255, 100)
		stroke(255, 180)
		ellipse(0, 0, this.radius * 2, this.radius * 2)

		pop()
	}

	// mover, destination, angle, velocity, accuracy
	this.update = function() {
		this.position.add(Physics.heading(self.position, ship.position, this.velocity))
	}
}
