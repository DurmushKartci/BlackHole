const c = 20;
const G = 6;
const dt = 0.40;

let m87 ;
let m88 ;
let d = 0;
let previousB;

const photons = [];
const blackholes = [];
const stars = [];

let starx ;
let stary ;

let angle = 15;

function setup(){
    createCanvas(screen.width-10, screen.height-132.5);
    // m87 = new Blackhole(random(width),random(height),3500);
    // m88 = new Blackhole(random(width),random(height),3500);
    // m87 = new Blackhole(random(width),random(height),random(5000)+1000);
    // m88 = new Blackhole(random(width),random(height),random(5000)+1000);

    
    starx = random(width);
    stary = random(height);

    for (let y = 1; y <= 1; y+= 1) {
        blackholes.push(new Blackhole(random(width),random(height),random(1200)+1200));
        
    }
    for (let y = 1; y <= 1000; y+= 1) {
        stars.push(new Star(random(width),random(height),random(1.5)+1));
        
    }

    // console.log(m87.pos.x + " " + m87.pos.y)
    // console.log(m88.pos.x + " " + m88.pos.y)
}


function draw(){
    // background(136,16,16);
    background(0);
    for (let s of stars) {
        s.show();  
    }
         
    for (let p of photons) {
        for (let b of blackholes) {
            b.pull(p);
            b.pull(p);
        }
        if(p.vel.equals(0, 0)){
            //d +=1 ;
            //console.log(d);
        }
        p.show();
        p.update();
        
    }

    for (let b of blackholes) {

        if(previousB == null){
            b.show();
            b.update();
            console.log("noluyo lan")
        }
        else{
            b.show();
            b.update();
            b.pullB(blackholes);
            b.merge(previousB);
        }
        previousB = b;
    }
    
}

function mouseClicked(){
    
    blackholes.push(new Blackhole(mouseX,mouseY,random(1200)+1200));
}

function keyPressed(){
    if(key=="d"||key == "D"){
        let start = height+2000;
        let end = -2000;
        for (let y = end; y < start; y+= angle) {
            photons.push(new Photon(width ,y ));
            
        }
    }

    if(key=="a"||key == "A"){
        let start = height+2000;
        let end = -2000;
        for (let y = end; y < start; y+= angle) {
            photons.push(new Photon(0,y ,c,0));
            
        }
    }

    if(key=="w"||key == "W"){
        let start = width+2000;
        let end = -2000;
        for (let y = end; y < start; y+= angle) {
            photons.push(new Photon(y,0, 0 , c));
            
        }
    }

    if(key=="s"||key == "S"){
        let start = width+2000;
        let end = -2000;
        for (let y = end; y < start; y+= angle) {
            photons.push(new Photon(y,height, 0 , -c));
            
        }
    }
}
