

var ShotManager = function () {
	this.shots = []

	this.addShot = function (shot) {
		this.shots.push(shot)
	}

	this.killShot = function (shot) {
		if (shot.position.y < 0 || shot.position.y > height || shot.position.x < 0 || shot.position.x > width) {
			this.shots.splice(s, 1)
		}
	}

	this.run = function () {
		for (s = 0; s < this.shots.length; s++) {
			shotFired = this.shots[s]
				shotFired.run()
				this.killShot(shotFired)
		}
	}

}
