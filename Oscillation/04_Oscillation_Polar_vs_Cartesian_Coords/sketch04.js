var r;
var theta;

function setup() {
    createCanvas(640, 360);

    r = height * 0.45;
    theta = 0;
}

function draw() {
    background(255);

    translate(width / 2, height / 2);

    var x = r * cos(theta);
    var y = r * sin(theta);

    ellipseMode(CENTER);
    fill('#ff0244');
    stroke(0);
    strokeWeight(3);
    line(0, 0, x, y);
    ellipse(x, y, 30, 30);

    theta += 0.02;
}