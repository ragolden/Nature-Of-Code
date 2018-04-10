# Force Accumulation

Applying external forces to the mover and watching two forces act on the same object.

Mover.js remains unchanged, , however we add the force vector gravity as well as the wind force vector, apply both to the mover class using the applyForce method.

```js
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
```