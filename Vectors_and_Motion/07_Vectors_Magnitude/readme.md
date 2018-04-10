# Magnitude

Calculating the magnitude of the line and applying it to another element.

After creating the line, we can get it's magnitude by using the P5 function mag(), and apply it to the variable m.

```js
var m = vectorLine.mag();
```

This variable lets us style and display a rectangle that represents the lines magnitude, with m as the rectangles width.

```js
fill(255);
stroke(0);
rect(0, 0, m, 10);
```