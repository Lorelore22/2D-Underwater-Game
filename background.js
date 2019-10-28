class Background {
    constructor() {
        this.xLandscape = 0;
        this.xSwarm = 0;
    }

    setup() {
        //this.bgLandscape.height = height;
        //  this.width = this.bgLandscape.width /10;
        //  this.height = this.bgLandscape.height /10;
        //this.bgLandscape.width = width;
    }

    draw() {
        clear();

        this.xLandscape -= SPEEDBG; // background is moving
        this.xSwarm -= 2.5;

        image(bgLandscape, this.xLandscape, 0, WIDTH * 2, HEIGHT);
        image(bgLandscape, this.xLandscape + WIDTH * 2, 0, WIDTH * 2, HEIGHT);

        image(bgSwarm, this.xSwarm, 0.05 * HEIGHT, 0.3 * WIDTH, 0.3 * HEIGHT);
        image(bgSwarm, this.xSwarm + WIDTH, 0.5 * HEIGHT, 0.25 * WIDTH, 0.22 * HEIGHT);

        if (this.xLandscape <= -WIDTH * 2) {
            this.xLandscape = 0;
        }

        if (this.xSwarm <= -WIDTH * 2) {
            this.xSwarm = WIDTH;
        }

    }
}