class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        this.fishhooks = [];
    }

    setup() {
        this.background.setup();
        this.player.setup();
    }

    draw() {
        this.background.draw();
        this.player.draw();

        if (frameCount > 240 && frameCount % 60 === 0) {
            this.fishhooks.push(new Fishhook());
        }
        this.fishhooks.forEach((fishhook, index) => {
            fishhook.draw();

            if (fishhook.x + fishhook.width < 0) {
                this.fishhooks.splice(index, 1);
            }
        });

    }


}