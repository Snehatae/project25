class Circle {
    constructor(x, y,r1, r2) {
        var options={
            isStatic:false,
            density:0.2,
            friction:1.1

            this.image=loadImage();
        }
        this.Body = Bodies.circle(x, y,r1,r2,options);
 
        World.add(world, this.body);
        this.radius = r1;
        this.radius2 = r2;
   
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        angleMode(RADIANS);
        rotate(this.body.angle);
        fill(255, 0, 0);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.width, this.height);

        pop();
    }
}