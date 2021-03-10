//That variables for blackholes and photons
const c = 20;
const G = 6;
const dt = 0.40;


//This variable for blackhole's for loop
let previousB;


const photons = [];
const blackholes = [];
const stars = [];

//This variable for distance of photons
let angle = 15;

function setup(){
    createCanvas(screen.width-10, screen.height-132.5);

    //This "for loop" for create blackhouse and push blackholes array
    for (let y = 1; y <= 1; y+= 1) {
        blackholes.push(new Blackhole(random(width),random(height),random(1200)+1200));
    }
    
    //This "for loop" for background stars
        //İt create new star and push stars array
    for (let y = 1; y <= 1000; y+= 1) {
        stars.push(new Star(random(width),random(height),random(1.5)+1));
        
    }
}


function draw(){
    //background is optional I am using red background
    background(136,16,16);
    //background(0);
    
    //This loop shows stars
    for (let s of stars) {
        s.show();  
    }
       
    //This loop for photon's function
    for (let p of photons) {
        
        //Here,  blackholes pull photons
        for (let b of blackholes) {
            b.pull(p);
            b.pull(p);
        }
        
        //This function shows photon
        p.show();
        
        //This function for photon moves and changing velocity
        p.update();
        
    }

    //This loop for photon's function
    for (let b of blackholes) {
        
        //Here if , b is the first blackhole of blaackholes array
        if(previousB == null){
            //This function shows blackholes
            b.show();
            //This function for blackholes moves and changing velocity
            b.update();

        }
        else{
            //This function shows blackholes
            b.show();
            
            //This function for blackholes moves and changing velocity
            b.update();
            
            //This function pull other blackholes
            b.pullB(blackholes);
            
            //This function enables black holes to merge
            b.merge(previousB);
        }
        
        //Here previous blackhoseu is current blackhouse
        //I use for merge function of blackhole
        previousB = b;
    }
    
}

//İf mouse clicked
function mouseClicked(){
    
    //create new Blackhole and push blackholes array
    blackholes.push(new Blackhole(mouseX,mouseY,random(1200)+1200));
}

//İf some keys pressed
function keyPressed(){
    
    //İf key is d
    if(key=="d"||key == "D"){
        //Create new photons on right
        let start = height+2000;
        let end = -2000;
        for (let y = end; y < start; y+= angle) {
            photons.push(new Photon(width ,y ));
            
        }
    }

    //İf key is a
    if(key=="a"||key == "A"){
        //Create new photons on left
        let start = height+2000;
        let end = -2000;
        for (let y = end; y < start; y+= angle) {
            photons.push(new Photon(0,y ,c,0));
            
        }
    }

    //İf key is w
    if(key=="w"||key == "W"){
        //Create new photons on top
        let start = width+2000;
        let end = -2000;
        for (let y = end; y < start; y+= angle) {
            photons.push(new Photon(y,0, 0 , c));
            
        }
    }

    //İf key is s
    if(key=="s"||key == "S"){
        //Create new photons on bottom
        let start = width+2000;
        let end = -2000;
        for (let y = end; y < start; y+= angle) {
            photons.push(new Photon(y,height, 0 , -c));
            
        }
    }
}
