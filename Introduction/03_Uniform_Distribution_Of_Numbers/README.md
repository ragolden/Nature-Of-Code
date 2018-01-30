# Uniform Distribution of Numbers

An empty array, randomCount is defined. Avariable called 'total' is also defined for the number of elements in the array.

```javascript
var randomCounts = [];
var total = 20;
```

A canvas is drawn in the setup function, and a loop is setup that adds 0's to the array.

```javascript
function setup() {
    createCanvas(640,360);
    for (var i = 0; i < total; i++) {
        randomCounts[i] = 0;
    }
}
```

The draw function creates a new background every time the function is called, and a number between 0 and 19 is generated. It is then reduced to a pre-comma digit, and the value increased the idexes of this number by one.

```javascript
function draw() {
    background(127);
    var index = floor(random(total));
    randomCounts[index]++;
```

Calculating the width of each bar.

```javascript
var w = width/randomCounts.length;
```

The loop repeats itself as many times as there are bars, and creates one based on the value in the array when the function was called.

```javascript
    for (var x=0; x < randomCounts.length; x++) {
        rect(x*w, height - randomCounts[x], w - 1, randomCounts[x]);
    }
}
```