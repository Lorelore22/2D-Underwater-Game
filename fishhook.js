class Fishhook {
    constructor() {
        this.x = WIDTH;
        this.y = random(-HEIGHT * 0.8, 0);
        // just the position of the hook, without the rope
        this.xHook = this.x;
        this.yHook = this.y + HEIGHT * 0.999;
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
        this.x -= SPEEDBG * 1.15;
        this.xHook -= SPEEDBG * 1.15;
    }


}