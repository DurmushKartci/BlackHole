class Star{
    constructor(x,y,r){
        this.pos = createVector(x,y);
        this.r = r;
        this.red = random(150)+100;
        this.green = random(50)+50;
        this.blue = random(100)+100;

    }

    show(){
        stroke(this.red ,this.green ,this.blue);
        strokeWeight(this.r);
        point(this.pos.x,this.pos.y);
    }
}