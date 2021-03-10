class Blackhole{

    //Here is constructor . Parameters are x coordinate , y coordinate and mass of blackhole
    constructor(x , y , m){
        //İt is position of blackhole
        this.pos = createVector(x,y)

        //This is mass of blackhole
        this.mass = m;

        //I calculated here for radius with mass and speed of light
        this.rs = (2 * G * this.mass) / (c*c);

        //it is velocity of blackhole
        this.vel = createVector(random(-1,1)*c/1000,random(-1,1)*c/1000);

        //This function checks whether the black hole has previously merged with another black hole.
        this.var = false;
        
        

    }

    //this function applies force to photons
    pull(photon){
        
        //Some calculating codes
        const force = p5.Vector.sub(this.pos , photon.pos);
        const r = force.mag();
        const fg = G * this.mass / (r*r);
        force.setMag(fg);
        photon.vel.add(force);
        photon.vel.setMag(c);

        //Here if blackhole eat the photon
        if(this.pos.x <= photon.pos.x + 10 && this.pos.x >= photon.pos.x - 10 ){
            if(this.pos.y <= photon.pos.y + 10 && this.pos.y >= photon.pos.y - 10 ){
                photon.vel.set(0,0);

                //İf photon is not eaten 
                if(photon.eaten == false ){

                    //Add mass of photon mass to blackhole's mass
                    this.mass += 1;
                }
                
                //Here is photon's function
                photon.eaten = true;
                photon.historyL -= 0.3 ;
                
                
                
                
                
            }
        }
    }

    //this function applies force to other blackholes
    pullB(blackholes){
        
        //turn all of the blackholes
        for (let b of blackholes) {
            //Some math codes
            const force = p5.Vector.sub(this.pos , b.pos);
            const r = force.mag();
            const fg = G * this.mass / (r*r);
            force.setMag(fg);
            b.vel.add(force);
            b.vel.limit(c/10);
        }
        
        
        
    }

    //This function for blackholes moves and changing velocity
    update(){
        //Some math codes
        const deltaV = this.vel.copy();
        deltaV.mult(dt);
        this.pos.add(deltaV);
        this.rs = (2 * G * this.mass) / (c*c);
        console.clear();
        console.log(this.rs);
    }

    //This function shows blackhole
    show(){
        //Color of blackhole
        fill(0);
        //No stroke
        noStroke();
        //Here is the blackhole
        circle (this.pos.x , this.pos.y , this.rs * 2);
    }

    //This function allows black holes to merge
    merge(blackhole){
        //İf blackhole is not merged before
        if(this.var == false){
            
            //if blackholes same position
            if(this.pos.x <= blackhole.pos.x + 10 && this.pos.x >= blackhole.pos.x - 10 ){
                if((this.pos.y <= blackhole.pos.y + 10 && this.pos.y >= blackhole.pos.y - 10 )){

                    //Add blackholes mass to merged blackholes
                    this.mass += blackhole.mass ;
                    //Update radius after changing mass
                    this.rs = (2 * G * this.mass/1.5) / (c*c);
                    this.var = true;
                    
                }

                
            }

        }
        
        

    }
}
