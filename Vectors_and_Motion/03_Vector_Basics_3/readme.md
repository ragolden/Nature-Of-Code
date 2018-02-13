# Vector Basics 3

Now we introduce Vectors. We first create the variables 'position' and 'velocity'. These are then initiated in the setup() function using 'createVector'. We now have an X and Y value for the position, and an output value for the speed.

```js
var position;
var velocity;

function setup () {
    createCanvas (640,360);
    position = createVector (100,100);
    velocity = createVector (2,2);
```

To increase the speed, we instead address the vectors themselves using position.y or velocity.x

And to ensure they don't run off the canvas, we use the same If loop only calling individual values of the vectors.

```js 
    position. x = position. x + velocity.x;
    position. y = position. y + velocity.y;

    if ((position. x > width) || (position. x < 0)) {
        velocity. x = velocity. x * -1;
    }
    
    if ((position. y > height) || (position. y < 0)) {
        velocity. y = velocity. y * -1;
    }
```

