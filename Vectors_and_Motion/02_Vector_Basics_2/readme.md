# Vector Basics 2

This script also moves the ball across the screen, but it now includes vertical movement.

We use the same script, but and assign both an X and a Y value for velocity - xspeed and yspeed.

```js
var x = 100;
var y = 100;
var xspeed = 2.5;
var yspeed = 2;
```

X and Yvalues are increased by the static speed every time the function is called., which constantly moves the ball to a different position.

```js
    x = x = x + xspeed;
    y = y + yspeed;
```

Again, we add an IF loop for both X and now Y to ensure that the ball does not run off the canvas.

```js
    if ((x> width) || (x<0)) {
        xspeed = xspeed * -1;
    }
     if ((y> height) || (y<0)) {
        yspeed = yspeed * -1;
     }
```