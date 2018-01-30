# Random Walker with 9 Outcomes

Only a small section of code has been modified. We divide the steps in the x and y direction. A random number between -1 and 2 is chosen for both x and y, and then that is reduced to a pre deciaml number (floor). This allows 9 different outcomes to be created, including 0/0, which means the dot will not move.

```javascript
 this.step = function() {
        var stepx = floor(random(-1,2));
        var stepy = floor(random(-1,2));
        
        this.x = this.x +stepx;
        this.y = this.y +stepy;
    
        this.x = constrain(this.x,0,width);
        this.y = constrain(this.y,0,height);
    }
```