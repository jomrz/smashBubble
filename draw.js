var img
const graphics = true

if (graphics != false){
	function preload() {
		img = loadImage('ship.png')
	}
}

function setup() {
	createCanvas(window.innerWidth, window.innerHeight)

	cursor(CROSS)
	rectMode(CENTER)
	angleMode(DEGREES)

	ship = new Ship();
	shotManager = new ShotManager();

	targetManager = new TargetManager()
	targetManager.populate()

}


function draw() {
	clear()
	
	if (graphics == false){
		background(126, 192, 238)
	}
	
	ship.run()
	shotManager.run()
	targetManager.run()
	push()
	textSize(16)
	textStyle(BOLD)
	fill(255)
	text("Score: " + targetManager.score, 20, 20)
	text("Top Score: " + targetManager.topScore, 20, 35)
	text(Math.floor(frameRate()), 20, 50)
	pop()
}
