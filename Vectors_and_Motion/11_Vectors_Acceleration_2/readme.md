# Acceleration 2

Giving the mover randomly generated acceleration in a random direction.

Sketch.js remains unchanged, but mover.js is again different.

When declaring the movers acceleration, give it a random 2d vector using the P5 function p5.Vector.random2D().

```js
this.acceleration = p5.Vector.random2D();
```

This gives us a random vector with a large magnitude, so we then devide that magnitude using the div() function to make it slower.

```js
this.acceleration.div(15);
```