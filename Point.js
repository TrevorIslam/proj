class Point {
  constructor (size, radius, theta, phi) {
    this.size = size;
    this.r = radius;
    this.theta = theta;
    this.phi = phi;
    this.x;
    this.y;
    this.z;
    this.rr;
  }

  draw () {
    this.y = this.r * sin(this.theta);
    this.rr = this.r * cos(this.theta);
    this.x = this.rr * sin(this.phi);
    this.z = this.rr * cos(this.phi);
    push()
      fill(this.z,this.y,this.x);
      translate(this.x,this.y,this.z);
      sphere(this.size);
    pop()
  }

  move () {
    this.theta+=PI/240;
  }

  static update () {
    for (let p of points) {
      p.draw();
      p.move();
    }
  }
}
