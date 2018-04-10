# Acceleration Towards the Mouse

Accelerating the mover towards the mouse.

Sketch.js remains unchanged.

In the update() method of mover, declare the mouse location vector.

```js
this.update = function() {
	var mouse = createVector(mouseX, mouseY);
```

Set the acceleration  to the subtraction of the movers location from the mouse location. This gets the direction of acceleration. Normalise the vector and multiplt it to give it magnitude.

```js
	this.acceleration = p5.Vector.sub(mouse, this.location);
	this.acceleration.normalize();
	this.acceleration.mult(0.8);
```

Then add acceleration to velocity and velocity to loction like before.

```js
	this.velocity.add(this.acceleration);
	this.velocity.limit(10);
	this.location.add(this.velocity);
}
```