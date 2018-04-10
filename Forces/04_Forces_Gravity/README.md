# Gravity

Creating varying shaped movers to demonstrate gravity and it's effect on different objects.

## Sketch.js

Create an array of movers and add a gravity vector. Then, multiply the force by the mass of the mover for each mover.

```js
var gravity = createVector(0, 0.1 * m);
```

## Mover.js

Multiplying the gravity force by the mass is then cancelled out when it is divided by the mass in the applyForce() method.

```js
this.applyForce = function(force) {
	var f = p5.Vector.div(force, this.mass);
	this.acceleration.add(f);
}
```