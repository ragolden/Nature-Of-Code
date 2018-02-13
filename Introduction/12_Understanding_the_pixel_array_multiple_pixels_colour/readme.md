# Understanding the Pixel Array in P5 - Multiple Pixels and Colours

In this script, we will change multiple pixels on the canvas, as oposed to one, as well as changing each pixels colour as it's drawn, decided by the position that it appears on.

The only change that's made from sketch11.js is that we define the values of X and Y as colour values. In this example, the X-value is R and the Y-Value is B.

```javascript
			pixels[index + 0] = x;
			pixels[index + 1] = 0;
			pixels[index + 2] = y;
			pixels[index + 3] = 255;
```