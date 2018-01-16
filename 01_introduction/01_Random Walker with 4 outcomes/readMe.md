# Random Walker with 4 Outcomes
In this file we create a Walker class which creates walker objects. Each time the step function is called on this object it selects a random number and based on that it produces an outcomes. We also constrain the x and y value using the built in constrain() function.

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

```
