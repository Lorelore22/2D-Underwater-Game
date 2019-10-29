class Mussel {
    constructor() {
        this.x = WIDTH;
        this.y = random(0, HEIGHT * 0.9);

        this.width = imgMussel.width * 0.4;
        this.height = imgMussel.height * 0.4;
    }

    draw() {
        image(imgMussel, this.x, this.y, this.width, this.height);
        this.x -= SPEEDBG * 1.5;
    }
}