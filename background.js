class Background {
    constructor() {
        this.xLandscape = 0;
        this.xSwarm = 0;
        this.red = 0;
        this.green = 40;
        this.blue = 150;
        this.transparent = 0;
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
        this.xSwarm -= SPEEDBGFISH;

        image(bgLandscape, this.xLandscape, 0, WIDTH * 2, HEIGHT);
        //tint(0, 153, 204, 126);
        image(bgLandscape, this.xLandscape + WIDTH * 2, 0, WIDTH * 2, HEIGHT);

        image(bgSwarm, this.xSwarm, 0.05 * HEIGHT, 0.3 * WIDTH, 0.3 * HEIGHT);
        image(bgSwarm, this.xSwarm + WIDTH, 0.5 * HEIGHT, 0.25 * WIDTH, 0.22 * HEIGHT);
        image(bgSwarm, this.xSwarm + WIDTH * 1.7, 0.2 * HEIGHT, 0.3 * WIDTH, 0.25 * HEIGHT);


        if (this.xLandscape <= -WIDTH * 2) {
            this.xLandscape = 0;
        }

        if (this.xSwarm <= -WIDTH * 2) {
            this.xSwarm = WIDTH;
        }

    }
}