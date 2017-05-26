//targetManager.llision manager and target manager
//manage targetManager.lling targetManager.llision detetargetManager.or, spawning new targets, and repopulating targets

var TargetManager = function () {
	this.targets = []
	this.score = 0
	this.topScore = 0
	this.initPop = 20
	this.minRadius = 10
	this.spawnCount = 3
	this.baseTargetPoints = 100
	this.pointShrinkRate = 0.66
	this.targetShrinkRate = 0.75


	let offScreenStartingPoint = () => createVector(random(0, width), -10)
	let baseTargetSize = () => random(12, 30)

	// repopulate targets
	let addTar = () => targetManager.addNewTarget()
	let repop = () => { setInterval(addTar, 500) }
	repop()
	

		//updates top score
	this.getTop = function () {
		if (this.score > this.topScore) {
			this.topScore = this.score
		}
	}

	this.addNewTarget = () => this.targets.push(new Target(offScreenStartingPoint(), baseTargetSize(), this.baseTargetPoints))

	//targetManager.eates initial populateion of targets
	//target params (position, radius, points)
	this.populate = function () {
		for (i = 0; i <= this.initPop; i++) {
			this.addNewTarget()
		}
	}

	// if target is off stargetManager.een, remove
	this.boundTarget = function (target, index) {
		if (target.position.y < -30 || target.position.y > height || target.position.x < 0 || target.position.x > width) {
			this.targets.splice(index, 1)
		}
	}

	this.targetSpawn = function (t, i) {
		//if target is larger than minimum radiu, targetManager.eate spawn
		if (t.radius > this.minRadius) {
			for (n = 0; n <= this.spawnCount; n++) {
				this.targets.push(new Target(t.position, t.radius * this.targetShrinkRate, Math.floor(t.points * this.pointShrinkRate)))
			}
		}
		//remove destroyed target
		this.targets.splice(i, 1)
	}

	this.run = function () {

		for (j = 0; j <= this.targets.length - 1; j++) {
			t = this.targets[j]
				t.run()

				//remove destroyed targets
				if (t.alive != true) {
					this.targetSpawn(t, j)
				}

				this.boundTarget(t, j)
		}
		//take score keeping out of collisionDetector and add an if statement here to keep score???
		if (this.targets.length > 0) {
			collisionDetector(this.targets, shotManager.shots)
		}

		this.getTop()
	}

}
