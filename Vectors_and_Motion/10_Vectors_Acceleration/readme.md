# Acceleration

Giving the mover an increasing acceleration and adding it to it's velocity.

The only thing that changes drastically is mover.js.

You first add a new acceleration vector to the mover, giving it any x and y value.

```js
this.acceleration = createVector(0.03, 0.04);
```

In the update() method you add the acceleration to the velocity of the mover using the P5 add() function. Then add this velocity to the location vector of the mover from the previous sketch. Limit the velocity to keep it from getting too big.

```js
this.update = function() {
	this.velocity.add(this.acceleration);
	this.velocity.limit(10);
	this.location.add(this.velocity);
}
```

The mover will constantly move towards the bottom right hand corner.