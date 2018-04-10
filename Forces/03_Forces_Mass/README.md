# Mass

Adding mass to the mover and observing it's affects.

## Sketch.js

Pass in the value for the mass of the mover when creating the setup.


```js
function setup() {
	createCanvas(640, 640);
	mover = new Mover(5);
}
```

## Mover.js

Set the attribute mass to the value m.

```js
this.mass = m;
```

Use the mass to generate the size of the ellipse as a visual representation. Multiply this for large differences.

```js
this.display = function() {
	noStroke();
	fill(255, 0, 0);

	ellipse(this.location.x, this.location.y, this.mass * 10, this.mass * 10);
}
```
Declare a new f force when applying external forces to the mover. Divide this by the mass of the mover and add f force to the acceleration of the mover.

```js
this.applyForce = function(force) {
	var f = p5.Vector.div(force,this.mass);
	this.acceleration.add(f);
}
```