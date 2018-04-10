# Multiplication and Division

Multiplying and Dividing the line between the centre of the canvas and the position of the mouse cursor, using the P5 functions mult() and div().

After setting up the line like in the previous sketch, we can begin to divide or multiply it.

```js
var mouse = createVector(mouseX, mouseY);
var center = createVector(width/2, height/2);
var vectorLine = mouse.sub(center);
```

We multiply it by 2 to make it twice the disrance between the centre and the cursor.

```js
vectorLine.mult(2);
```

We can also divide it by 2 and half the length.


```js
vectorLine.div(2);
```