// child classs 1

class LineObject extends AnimatedObject {
    constructor() {
        super((random(width)),(random(height)));


    }

    move() {
        super.move();
        this.x -= 5;
        if(this.x <0) this.x = width;
    }
}
