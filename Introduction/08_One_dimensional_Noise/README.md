# One Dimensional Noise

First we create a background and the walker class

```javascript
function setup() {
    createCanvas(1200, 1000);
    walker = new Walker();
    background(127);
}     
```

The draw loop then draws a block with 15% oppacity every frame, creating a trail effect.

```javascript
function draw() {
    fill(0, 15);
    rect(0, 0, width, height);
    walker.step();
    walker.render();
}
```

X Position starts in the center of the canvas. Xoff is a random number between 1 and 1000 used to represent time. This noise value is between 0 and 1.

```javascript
function Walker() {
    this.x = width / 2;
    this.xOff = random(1000);
``` 

Render draws the ellipse with 50% oppacity with a no stroke pen.

```javascript
this.render = funtion() {
        noStroke();
        fill(255, 45, 0, 50);
        ellipse(this.x, 500, 40, 40)
```

A noise value is generated for the current moment in time (xOff) and is then mapped between 0 and the width. Time (xOff) is then incremented.

```javascript
this.step = function() {
        this.x = map(noise(this.xOff), 0, 1, 0, width);
    }       
```