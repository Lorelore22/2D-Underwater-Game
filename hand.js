class Hand {
    constructor() {
        this.x = 0;

        this.width = 63 * 1.5 //imgHand.width * 1.5;
        this.height = 198 * 1.7 // imgHand.height * 1.5;

        this.y = random(-this.height - 0.2 * this.height, -this.height);

        this.xHand = this.x;
        this.yHand = this.y + this.height * 0.9;

    }

    draw() {
        image(imgHand, this.x, this.y, this.width, this.height);
        this.x += SPEEDHAND;
        this.xHand += SPEEDHAND;
        if (this.x < 0.4 * WIDTH) {
            this.y += 1.6;
            this.yHand += 1.6;
        } else if (this.x > 0.55 * WIDTH) {
            this.y -= 1.6;
            this.yHand -= 1.6;
        }
        // if (this.y < 0) {
        //     this.y += 2;
        // } else {
        //     this.y = 0; // this.player.y + this.height;
        // }
        // this.x += 1;
    }

}