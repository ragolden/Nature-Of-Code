# Random Walker with 4 Outcomes

In this we create a Walker class that creates walker objects. We also create a draw function, and each time the step function is called it selects a random number and draws the outcome based on the number chosen.


```js
var walker;

function setup() {
    createCanvas(320,640);
    background(127);
    walker = new Walker();
}

function draw() {
    walker.render();
    walker.step();
}
```

Inside of the Walker class, two variables are assigned values. The render function then draws  a dot at the designated co ordinates (x and y)

```js
function Walker() {
    this.x = width/2;
    this.y = height/2;
    
    this.render = function() {
        stroke(0);
        point(this.x,this.y);
    }
```

The step function is what generates the random number. The 4 in brackets, means that the number will be between 0 and 4. The result of this causes the dot to move, based on the else if statement it corresponds to, drawing it's new position on the next update.
    
```js
    this.step = function() {
        var choice = floor(random(4));
        if (choice === 0) {
            this.x++;
        } else if (choice === 1) {
            this.x--;
        } else if (choice === 2) {
            this.y++;
        } else {
            this.y--;
        }
        
        this.x = constrain(this.x,0,width);
        this.y = constrain(this.y,0,height);
    }
    
}

```