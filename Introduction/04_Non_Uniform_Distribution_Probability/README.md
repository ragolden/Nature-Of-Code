# Probability & Non Uniform Distribution

This refers to influencing probability so that it is similar to a previous outcome, but still randomised.

To influece probability of the directions, an array is created with possibilities introduced. Each entry is the array was assigned a number from 1 - 3, the first two with the value 1, third with the value 2 and final two wth the value 3. Since two entries contain 1 or 3, the possibility of those numbers being chosen is 40% each, and only 20% for the number 2 to be chosen. 

```javascript
    this.step = function() {
        var probArray = [];
        probArray[1] = 1;
        probArray[2] = 1;
        probArray[3] = 2;
        probArray[4] = 3;
        probArray[5] = 3;
        
        var index = floor(random(probArray.length));
        var r = probArray[index];
```