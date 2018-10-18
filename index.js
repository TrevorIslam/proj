var points = [];

function setup () {
  createCanvas(500,500,WEBGL);
  normalMaterial();
  for (let i=0;i<1000;i++) {
    points.push(new Point( 2, 150, random(0, 2*PI), random(0, 2*PI) ));
  }
}
function draw() {
  background(0,0,0);
  Point.update();
}
