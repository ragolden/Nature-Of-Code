# An Array of Movers

Creating an array of mover to mover towards the mouse cursor.

## Sketch.js

We now have an array of movers, so first declare the movers array.


```js
var movers = [];
```

Add a for loop to the setup() function appending 20 movers to the movers array, with the index of the array being the same as the for loop (i).

```js
function setup() {
	createCanvas(640, 360);
	for (var i = 0; i < 20; i++) {
		movers[i] = new Mover();
	}
}
```

In the draw() loop, call the update() and display() methods for each mover using another loop.

```js
function draw() {
	background(51);

	for (var i = 0; i < movers.length; i++) {
		movers[i].update();
		movers[i].display();
	}
}
```

The mover.js class is the same as the mouse in the follow sketch.