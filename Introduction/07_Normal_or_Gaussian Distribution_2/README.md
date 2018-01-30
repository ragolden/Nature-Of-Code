# Normal/Gaussian Distribution 2 Dimensions

Identical to the original, first create a background.

```javascript
function setup() {
    createCanvas(320,640);
    background(127);     
}       
```

Then create a draw function to actually draw the circles. Within this function, we create two variables, xloc and yloc, and assign them both random Gaussian numbers with an average value of 0 and a deviation of 1. 

```javascript
function draw() {
 var xloc = randomGaussian();
 var yloc = randomGaussian();
```

We then create xsd and ysd, a standar deviation for each value. xMean dna yMean are also created to calculate the the center of the canvas.

```javascript
    var xsd = 100;
    var ysd = 40;
    

    var xmean = width /2;
    var ymean = height /2;
``` 

Random x Position is decided by multiplying the 'xloc' by standard deviation, and adding the mean value. This same equation is applied to discovered the y Position.

```javascript
    var xmean = width /2;
    var ymean = height /2;
    xloc = (xloc * xsd) + xmean;
    yloc = (yloc * ysd) + ymean;
```

'xloc' is now the x position in the ellipse function, and 'yloc' is the y position, so each circle is drawn in a new position on the canvas.

```javascript
     ellipse(xloc, height / 2, 16, 16);       
```