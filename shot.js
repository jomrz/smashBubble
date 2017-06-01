var Shot = function(pos, angle, velocity) {
	let self = this
	
    this.position = createVector(pos.x, pos.y)
    this.diameter = 3
    this.radius = this.diameter / 2
    this.accuracy = random(-0.2, 0.2)
	this.velocity = velocity
    this.trajectory = Physics.trajectory(this.position, createVector(mouseX, mouseY), this.velocity, this.accuracy)

    this.display = function() {
    	push()
    	noStroke()
    	ellipse(this.position.x, this.position.y, this.diameter)
    	pop()
    }

    this.update = function() {
		this.position.add(this.trajectory)
    }

    this.isHit = function(index) {
    	shotManager.shots.splice(index, 1)
    }

    this.run = function() {
    	this.update()
    	this.display()
    }
}
