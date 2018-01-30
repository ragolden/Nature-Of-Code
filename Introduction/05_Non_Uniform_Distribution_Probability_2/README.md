# Probability & Non Uniform Distribution

This refers to influencing probability so that it is similar to a previous outcome, but still randomised.

To influence the probability of the dot moving in a certain direction, an if loop in added to the code. This outputs 4 possible results which can increase or decrease x or y by one. R is created and can be any number between 0 and 1, which mans that if r outputs a value of 0.4, there is a 50% chance that the dot will move.

```javascript
 this.step = function() {
        var choice = floor(random(4))
        var r = random(1);
        // A 40% of moving to the right
        if (r< 0.4) {this.x++;}
        else if (r < 0.6) {this.x--}
        else if (r < 0.8) {this.y++}
        else {this.y--;}
        
```