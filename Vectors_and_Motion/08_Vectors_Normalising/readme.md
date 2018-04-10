# Normalising Vectors

Normalising the vector line between the centre and the position of the mouse cursor =, keeping it at a consistant length.

Once the vectorLine has been created, we then use the P5 function normalise(), to reduce the line to one pixel pointing  in the direction of the cursor.

```js
vectorLine.normalize();
```

Then we just multiply the line using the mult() function to set it to the desired length.

```js
vectorLine.mult(50);
```