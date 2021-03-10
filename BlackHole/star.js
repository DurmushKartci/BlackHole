class Star{
    //it is constructor
    constructor(x,y,r){
        //I created a vector named pos for stars positiıon
        this.pos = createVector(x,y);

        //This variable for point's strokeWeight
        this.r = r;

        //There are for random color
        this.red = random(150)+100;
        this.green = random(50)+50;
        this.blue = random(100)+100;

    }

    //This function shows stars on canva
    show(){
        
        //Color of star
        stroke(this.red ,this.green ,this.blue);

        //width of star
        strokeWeight(this.r);

        //it is code which is show the star
        point(this.pos.x,this.pos.y);
    }
}
