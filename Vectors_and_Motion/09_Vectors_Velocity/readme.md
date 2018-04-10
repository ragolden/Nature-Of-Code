# Velocity

Creating a move object with velocity and motion

## Mover.js

The move object has the attributed location and velocity, as well as 3 callable methods.

You first create a location vector and give it random coordinates between 0 and the width and height. Then create a velocity vecor with any x and y values.

```js
this.location = createVector(random(width), random(height));
this.velocity = createVector(10, 5);
```

Add the velocity vector to the location vector inside of the update() method of the mover.

```js
this.update = function() {
	this.location.add(this.velocity);
}
```

Display the mover with the display() method, using the location vector.

```js
this.display = function() {
	noStroke();
	fill(255, 0, 0);

	ellipse(this.location.x, this.location.y, 20, 20);
}
```

We then add checkEdges() to ensure that the mover always stays within the canvas, instead of flying off screen.

```js
this.checkEdges = function() {
	if (this.location.x > width || this.location.x < 0) {
		this.velocity.x = this.velocity.x * -1;
	}
	if (this.location.y > height || this.location.y < 0) {
		this.velocity.y = this.velocity.y * -1;
	}
}
```

## Sketch.js 

Declare the mover and add it to the setup() function.

```js
var mover;

function setup() {
	createCanvas(640, 360);
	mover = new Mover();
}
```

Call each of the methods in the mover class on loop in the draw() function. Ensure it's also displaying a background so no trail is left.

```js
function draw() {
	background(51);

	mover.update();
	mover.checkEdges();
	mover.display();
}
```