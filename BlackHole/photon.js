class Photon{

    //it is constructor part
    constructor(x , y , c1=-c , c2=0 ){

        //this code is position of photon
        this.pos = createVector(x , y);
        //This is the velocity of photon
        this.vel = createVector(c1,c2);
        //this is the hidtory array for photon's tail
        this.history = [];
        //Length of photon's tail
        this.historyL = 40;
        //is it eaten from blackhole
        this.eaten = false;
        
    }

    //This function for photon moves , changing velocity and photons tail
    update(){
        this.history.push(this.pos.copy());
        const deltaV = this.vel.copy();
        deltaV.mult(dt);
        this.pos.add(deltaV);

        if(this.history.length > this.historyL){
            this.history.splice(0,1);
        }
    }

    //This function shows the photon and his tail
    show(){
        //if it isnt eaten
        if(this.eaten == false){
            //Show photon
            strokeWeight(2);
            stroke(255)
            //here is the photon
            point(this.pos.x, this.pos.y);
            
        }
        
        beginShape();
        //if lenght of photon's tail is greater than 1
        if(this.historyL >= 1 ){
            
            //Turn all history
            for(let v of this.history){
                //color
                stroke(255,75);
                noFill();
                //width of tail
                strokeWeight(1);
                //Here is the tail
                vertex(v.x, v.y);
                
            }
            
            
        }
        
        
        
        endShape();
    }
}
