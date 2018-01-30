# One Dimensional Noise

In the setup, we now add a for loop, which increases the ammount of walkers by one everytime the loop repeats, up to a cap of 10.

```javascript
    walkers = [];
    for (i = 0; i < noOfWalkers; i++) {
        walkers[i] = new Walker();
    } 
```

The draw loop draws each walker in a new location every time the loop is updated.

```javascript
    for (i = 0; < noOfWalkers; i ++) {
        walkers[i].step();
        walkers[i].render();
    }
```

A Vector is created. Vectors can be used to store 2 values in a variable. This is used to store the x and y position of the walkers.

```javascript
    this.position = createVector(width / 2, height / 2);
    this.noff = createVector(random(1000), random(1000));
``` 

The ellipses are then drawn using the x and y positions stored in the vector previously created.

```javascript
this.render = function() {
        noStroke();
        fill(255, 45, 0, 50);
        ellipse(this.position.x, this.position.y, map(noise(this.noff.x), 0, 1, 20, 200),
        map(noise(this.noff.x), 0, 1, 20, 200))
    }
```

The step function uses noise to move the ellipses across the screen. The noise value is then also generated usiong the variables stored inside of the vectors.

```javascript
this.position.x = map(noise(this.noff.x), 0, 1, 0 -200, width + 200);
        this.position.y = map(noise(this.noff.y), 0, 1, 0 -200, height + 200);
        this.noff.add(0.005, 0.005);
```