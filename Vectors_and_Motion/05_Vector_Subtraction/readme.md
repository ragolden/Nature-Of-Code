# Vector Subtraction

This will subtract two Vectors from each other.

Much like the addition of two vectors, this will subtract the X and Y in Vector one from the X and Y in Vector two, creating a brand new Vector at a new position with the values X and Y. 

We also store the position of the mouse and the center of the canvas as Vectors.

```js
  var mouse = createVector (mouseX, mouseY);
  var center = createVector (width/2, height/2);
```

We use '. sub()', a built in function, and attach it to the first vector. The vector to be subtracted is in brackets.

```js
   var vectorLine = mouse. sub (center);
```

The canvas center is then subtracted from the mouse coordinates to the line endpoint coordinates. A new vector always starts an 0,0. So the new vector can be drawn, it is shifted by half of the width/height of the canvas.

```js
translate (width /2, height/2);
```