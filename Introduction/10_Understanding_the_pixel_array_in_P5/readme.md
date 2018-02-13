# Understanding the Pixel Array in P5

How to show the colour of the pixel that will change

A background is created using the setup function. The Pixel is set at 1 pixel in both width and height, by using the pixelDensity function.

```javascript
function setup () {
	createCanvas (400,400);
	pixelDensity (0.5);
}
```

draw () displays the pixel on screen. loadPixel and updatePixel are used to close the function and update the canvas respectively, when the value has been changed.

```javascript
loadPixels ();
       […]
updatePixels ();
```

Only one pixel is changed in this application. First, the index of the pixel is calculated within the pixel array, done using the formula '(X+Y * Width) * 4'. This is multiplied by 4 as the pixel array is always based on the 3RGB values, and is opacity. This index is the first position, or the colour value of R(ed) in the array. The index value is increased by 1,2 or 3 in order to change the values for G, B and A.

```javascript
    var index = (2+2*5)*4;
    pixels[index+0] = 255;
    pixels[index+1] = 0;
    pixels[index+2] = 0;
    pixels[index+3] = 255;
```