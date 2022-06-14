class Child {
    color = [];
    alive = true;
    time_alive = 0;

    constructor(p) {
        let a = Math.floor(Math.random() * 20) - 10;
        let b = Math.floor(Math.random() * 20) - 10;
        let c = Math.floor(Math.random() * 20) - 10;

        this.alive = true;

        this.color = [p.color[0] + a, p.color[1] + b, p.color[2] + c];

        this.x = Math.floor(Math.random() * 1000);
        this.y = Math.floor(Math.random() * 1000);

        setInterval(() => {
            if(this.alive) {
                this.time_alive++;
            }
        }, 1000);
    }

    draw() {
        if(this.alive) {
            fill(this.color[0], this.color[1], this.color[2]);
            rect(this.x, this.y, 50, 50);
        }
    }

    clicked() {
        let d = dist(mouseX, mouseY, this.x, this.y);
        if(d <= Math.sqrt(1250)) {
            console.log(this.time_alive);
            this.alive = false;
        }
    }
}