# Normal/Gaussian Distribution

Displaying normal or Gaussian distribution using circles. First, create a background using the setup function.

```javascript
function setup() {
    createCanvas(320,640);
    background(127);     
}       
```

Then create a draw function to actually draw the circles. Within this fucntion, we create the randomGaussian function and assign it's value to xloc. This is a built in function and will give a gaussian number with the mean value 0 and deviation of 1.

```javascript
function draw() {
 var xloc = randomGaussian();
    console-log(xloc);        
```

SD refers to Standard deviation, which is the maximum we will allow our samples to deviate from the norm. In this case, 60.

```javascript
   var sd = 60;        
```

Random x Position is decided by multiplying the 'xloc' by standard deviation, and adding the mean value.

```javascript
    var mean = width /2;
    xloc = (xloc * sd) + mean;        
```

'xloc' is now the x position in the elliple function, so each circle is drawn in a new position.

```javascript
     ellipse(xloc, height / 2, 16, 16);       
```