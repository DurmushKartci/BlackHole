class Photon{

    constructor(x , y , c1=-c , c2=0 ){
        this.pos = createVector(x , y);
        this.vel = createVector(c1,c2);
        this.history = [];
        this.historyL = 40;
        this.eaten = false;
        this.eatenH = false;
        
    }

    update(){
        this.history.push(this.pos.copy());
        const deltaV = this.vel.copy();
        deltaV.mult(dt);
        this.pos.add(deltaV);

        if(this.history.length > this.historyL){
            this.history.splice(0,1);
        }
    }

    show(){
        if(this.eaten == false){
            strokeWeight(2);
            stroke(255)
            //point(this.pos.x, this.pos.y);
            stroke(255,75);
            noFill();
            strokeWeight(1);
        }
        
        beginShape();
        if(this.historyL >= 1 ){
            
            for(let v of this.history){
                vertex(v.x, v.y);
                
            }
            
            
        }
        
        
        
        endShape();
    }
}