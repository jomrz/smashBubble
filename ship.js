//////////////////////////////////////////////
// ship class
var Ship = function() {
	this.alive = true
	this.position = createVector(width / 2, height - 15)

	this.aim = function() {
		this.dx = this.position.x - mouseX
		this.dy = this.position.y - mouseY
		return atan2(this.dy, this.dx)
	}
    this.contact = false

    this.colorState = function(){
        if(this.contact == false){
            return color(255,255,255)
        } else {
            return color(255,0,0)
        }
    }

	this.display = function() {
		push()
		translate(this.position.x, this.position.y)
		rotate(this.aim() + 90)
		noStroke()
        fill(this.colorState())
		
		if (graphics == false){
			rect(0, 0, 10, 20)			
		} else {
        image(img,-25,-33,50,66)
		}
		
		pop()
	}

	this.isHit = function(){
		targetManager.score = 0
	}

	this.move = function() {
		if (keyIsDown(65)) {
			ship.left()
		}
		if (keyIsDown(68)) {
			ship.right()
		}
		if (keyIsDown(87)) {
			ship.up()
		}
		if (keyIsDown(83)) {
			ship.down()
		}
	}

	this.left = function() {
		this.position.add(-5)
	}

	this.right = function() {
		this.position.add(5)
	}
	this.up = function() {
		this.position.add(0, -5)
	}
	this.down = function() {
		this.position.add(0, 5)
	}
	this.bound = function() {
		if (this.position.x < 0) {
			this.position.x = width
		}
		if (this.position.x > width) {
			this.position.x = 0
		}
		if (this.position.y < 0) {
			this.position.y = height
		}
		if (this.position.y > height) {
			this.position.y = 0
		}
	}

	this.run = function() {
		if (this.alive = true) {
			this.bound()
			this.move()
			this.shoot()
            this.display()
		}
	}

	this.shoot = function() {
		if (mouseIsPressed) {

			if (mouseButton === LEFT) {
				shotManager.addShot(new Shot(this.position, this.aim(),random(10,15)))
			}
		}
	}
}