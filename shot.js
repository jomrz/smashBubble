

////////////////////////////////////////
// Shot Class
// could add acceleration later if wanted

var Shot = function(pos, angle, speed) {
    //this.acceleration = createVector(0.5,0.5);
    this.speed = speed
    this.position = createVector(pos.x, pos.y)
    this.diameter = 3
    this.radius = this.diameter / 2
    this.accuracy = random(-0.1, 0.1)
    this.dx = (cos(angle) * -this.speed)
    this.dy = (sin(angle) * -this.speed)

    this.velocity = createVector(this.dx + this.accuracy, this.dy + this.accuracy)

    this.display = function() {
    	push()
    	noStroke()
    	ellipse(this.position.x, this.position.y, this.diameter)
    	pop()
    }

    this.update = function() {
        //this.velocity.add(this.acceleration)
        this.position.add(this.velocity)
    }

    this.isHit = function(index) {
    	shotManager.shots.splice(index, 1)
    }

    this.run = function() {
    	this.update()
    	this.display()
    }

}