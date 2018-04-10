# Friction

Calculating and applying an external friction force to the mover to slow it down over time.

## Sketch.js

First define the coefficient of friction (c).


```js
var c = 0.5;
```

Define the normal (normal), the opposing force to the object on the surface.

```js
var normal = 1;
```

Calulate the friction magnitude by multiplying the coefficient by the normal.

```js
var frictionMag = c * normal;
```

Find the direction of friction, multiply it by the calculated friction magnitude and apply it to the mover.

```js
var friction = p5.Vector.mult(mover.velocity, -1);
friction.normalize();
friction.mult(frictionMag);

mover.applyForce(friction);
```