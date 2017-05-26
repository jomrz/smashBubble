//Target Class

var Target = function(pos, rad, points) {
    this.acceleration = createVector(0, 0.01);
    this.velocity = createVector(random(-1, 1), random(0, 1));
    this.position = createVector(pos.x, pos.y)
    this.position = createVector(pos.x, pos.y)
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
        this.velocity.add(this.acceleration)
        this.position.add(this.velocity)
    }

}