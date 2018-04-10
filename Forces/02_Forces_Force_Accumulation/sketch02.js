var mover;

function setup() {
	createCanvas(640, 640);
	mover = new Mover();
}

function draw() {
	background(51);

	var wind = createVector(0.1, 0);
	var gravity = createVector(0, 0.01);

	mover.applyForce(wind);
	mover.applyForce(gravity);

	mover.display();
	mover.update();
	mover.checkEdges();
}