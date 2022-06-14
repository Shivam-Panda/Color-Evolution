let gen = [];
let cur_gen_count = 1;

let t = 0;
let cur_t = 0;

function setup() {
    createCanvas(1000, 1000);
    console.log(`Generation ${cur_gen_count}`)
    for(let i = 0; i < 10; i++) {
        let p = new Parent();
        gen.push(p);
    }
    setInterval(() => {
        t++;
    }, 15000) 
}

function next_gen() {
    gen.sort((a, b) => a.time_alive - b.time_alive)
    let p1 = gen[0];
    let p2 = gen[1];
    let copy = [];
    for(let i = 0; i < 5; i++) {
        let c = new Child(p1);
        copy.push(c);
    }
    for(let i = 0; i < 5; i++) {
        let c = new Child(p2);
        copy.push(c);
    }
    gen = copy;
}

function draw() {
    background(0, 0, 0);

    if(t != cur_t) {
        cur_t = t;
        cur_gen_count++;
        console.log(`Generation ${cur_gen_count}`)
        next_gen();
    }

    for(let i = 0; i < gen.length; i++){ 
        gen[i].draw();
    }
}


function mouseClicked() {
    for(let i = 0; i < gen.length; i++) {
        gen[i].clicked();
    }
}

function getBest() {
    gen.sort((a, b) => a.time_alive - b.time_alive);
    return gen[0];
}