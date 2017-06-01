const Physics = {
	
//return angle between two objects, pass it a vector object parameter
	angle : function(objA, objB) {
		let dy = objA.y - objB.y
		let dx = objA.x - objB.x
		return atan2(dy, dx)
	},

//returns vector to add to position, requires to objects	
	heading : function (mover, destination, velocity) {
		let vx = velocity * cos(this.angle(destination, mover))
		let vy = velocity * sin(this.angle(destination, mover))
		return createVector(vx, vy)
	},
	
	trajectory : function (origin, crosshair, velocity, accuracy){

		
		let a = this.angle(origin, crosshair)
		let dx = cos(a) * -(velocity + accuracy)
		let dy = sin(a) * -(velocity + accuracy)
		
		console.log(a)
		console.log(dx)
		console.log(dy)

		
		return createVector(dx, dy )
	}
}
