class Player {
    constructor() {
        // this.y = 0;
        this.x = 0.5 * WIDTH;
        this.gravity = 0.075;
        this.velocity = 0;
        this.score = 0;
        this.win = false;
    }

    up() {
        this.velocity += -3;
    }

    setup() {
        octopus.frameDelay = 30;
        this.y = HEIGHT * 0.5;
    }

    draw() {
        for (let i = 0; i < 2; i++) {
            octopus.images[i].width = WIDTH * 0.1;
            octopus.images[i].height = WIDTH * 0.1;
        }

        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.y > HEIGHT * 0.9) {
            this.y = HEIGHT * 0.9;
            this.velocity = 0;
        }

        if (this.y < 0) {
            this.y = 0;
        }

        animation(octopus, this.x, this.y);
    }

    increaseScore(){
        this.score++;
        document.body.querySelector("#score").innerText = this.score;
    }
}