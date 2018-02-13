# Vector Basics

In this chapter, we learn about the use of vectors in programming.

By definition, a vector is "An entity that has both intensity and direction. Typically, vectors are drawn as arrows, where the direction of the vector is indicated by the direction of the arrow, and the intensity is indicated by the length of the arrow itself."

This script should show a ball moving back and forth on the screen, to demonstrate the principle of forces acting on the ball.

Variable X and Y are assigned to start values, as the starting points. We then define xspeed for the balls movement. 'setup()' creates the canvas.


```javascript
var x = 320;
var y = 180;
var xspeed = 2;

function setup ()
    createCanvas (640,360);
}
```

'draw()' is then draws the ball each time the function is executed, at position x and y.

```js
    // Display circle at x position
    stroke (0);
    strokeWeight (2);
    fill (127);
    ellipse (x, y, 48,48,48);

}
```

The x position is changed and so the ball appears to move, due to xspeed. The constant drawing and given center point, it appears that the ball is moving.

```JS
    background (51);
    
    //Add the current speed to the position.
    x = x = x + xspeed;
```

An if loop is added so that the ball stays within the canvas. This simply checks that the value x is not less then zero of greater then the width of the canvas, and if either of those is met, the value for speed is revered and so is the direction.

```js    
    if ((x> width) || (x<0)) {
        xspeed = xspeed * -1;
    }
```