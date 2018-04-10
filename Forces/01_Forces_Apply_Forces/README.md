# Apply Forces

Applying external forces to a mover and affecting it's movement.

## Sketch.js

The only change to this is that we add a wind force vector and calle the applyForce() method in the wubd firce vector.


```js
function draw() {
	background(51);

	var wind = createVector(0.1, 0.01);

	mover.applyForce(wind);

	mover.display();
	mover.update();
	mover.checkEdges();
}
```

## Mover.js

Add the method applyForce(). This is used to apply external forces to the mover.

Take the passed in force and set the acceleration value of the new force.


```js
this.applyForce = function(force) {
	this.acceleration = force;
}
```