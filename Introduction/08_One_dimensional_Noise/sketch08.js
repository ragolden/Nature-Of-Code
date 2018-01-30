var walker;

function setup() {
    createCanvas(1200, 1000);
    walker = new Walker();
    background(127);
}

function draw() {
    fill(0, 15);
    rect(0, 0, width, height);
    walker.step();
    walker.render();
}

function Walker() {
    this.x = width / 2;
    this.xOff = random(1000);
    
    this.render = funtion() {
        noStroke();
        fill(255, 45, 0, 50);
        ellipse(this.x, 500, 40, 40)
    }
    
    this.step = function() {
        this.x = map(noise(this.xOff), 0, 1, 0, width);
    }
}