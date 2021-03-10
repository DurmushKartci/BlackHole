class Blackhole{

    constructor(x , y , m){
        this.pos = createVector(x,y)
        this.mass = m;
        this.rs = (2 * G * this.mass) / (c*c);
        this.vel = createVector(random(-1,1)*c/1000,random(-1,1)*c/1000);
        this.var = false;
        this.eaten = false;
        

    }

    pull(photon){
        
        const force = p5.Vector.sub(this.pos , photon.pos);
        const r = force.mag();
        const fg = G * this.mass / (r*r);
        force.setMag(fg);
        photon.vel.add(force);
        photon.vel.setMag(c);
        if(this.pos.x <= photon.pos.x + 10 && this.pos.x >= photon.pos.x - 10 ){
            if(this.pos.y <= photon.pos.y + 10 && this.pos.y >= photon.pos.y - 10 ){
                photon.vel.set(0,0);
                if(photon.eaten == false ){
                    this.mass += 1;
                }
                
                photon.eaten = true;
                photon.historyL -= 0.3 ;
                
                
                
                
                
            }
        }
    }

    pullB(blackholes){
        
        for (let b of blackholes) {
            const force = p5.Vector.sub(this.pos , b.pos);
            const r = force.mag();
            const fg = G * this.mass / (r*r);
            force.setMag(fg);
            b.vel.add(force);
            b.vel.limit(c/10);
        }
        
        
        
    }

    update(){
        const deltaV = this.vel.copy();
        deltaV.mult(dt);
        this.pos.add(deltaV);
        this.rs = (2 * G * this.mass) / (c*c);
        console.clear();
        console.log(this.rs);
    }

    show(){
        fill(0);
        noStroke();
        circle (this.pos.x , this.pos.y , this.rs * 2);
    }

    merge(blackhole){
        if(this.var == false){
            
            if(this.pos.x <= blackhole.pos.x + 10 && this.pos.x >= blackhole.pos.x - 10 ){
                if((this.pos.y <= blackhole.pos.y + 10 && this.pos.y >= blackhole.pos.y - 10 )){
                    this.mass += blackhole.mass ;
                    this.rs = (2 * G * this.mass/1.5) / (c*c);
                    this.var = true;
                    blackhole.eaten = true;
                }

                
            }

            else{
                this.var = false;
            }
        }
        
        

    }
}