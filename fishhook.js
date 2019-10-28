class Fishhook {
    constructor() {
        this.x = WIDTH;
        this.y = random(-HEIGHT * 0.9, 0);
        //this.velocity = 0;
        //this.gravity = 3;


        //   this.width = 20;
        //   this.height = 400;
        this.width = imgFishhook.width * 0.5;
        this.height = imgFishhook.height * 0.5;
    }

    draw() {
        //this.velocity += this.gravity;
        //this.yHook += this.velocity;

        //  rect(this.x, this.y, this.width, this.height);
        image(imgFishhook, this.x, this.y, this.width, this.height);
        this.x -= SPEEDBG;
    }


}