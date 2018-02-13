# Understanding the Pixel Array in P5 - Multiple Pixels

In this script, we will change multiple pixels on the canvas, as oposed to one. This adds two loops connected together in a series, one that queries each Y column and a second that queries the corresponding X column.

```javascript
	for (var y = 0; y < height; y++) {)
		for (var x = 0; x < width; x++) {)
```

Just like the last one, an index is determined, however it is relative to the loop value of X and Y. Just as previously done, we adjust the pixel array to the corresponding index.

```javascript
    var index = (x + y * width) * 4;
    pixels[index + 0] = 255;
    pixels[index + 1] = 0;
    pixels[index + 2] = 0;
    pixels[index + 3] = 255;
```