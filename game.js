class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        this.fishhooks = [];
        this.mussels = [];
        this.win = false;
    }

    setup() {
        this.background.setup();
        this.player.setup();
    }

    draw() {
        this.background.draw();
        this.player.draw();

        // fishhooks
        if (frameCount > 240 && frameCount % 60 === 0) {
            this.fishhooks.push(new Fishhook());
        }
        this.fishhooks.forEach((fishhook, index) => {
            fishhook.draw();

            if (fishhook.x + fishhook.width < 0) {
                this.fishhooks.splice(index, 1);
            }

            if (this.collisionFishhook(fishhook, this.player)) {
                this.gameOver();
            }

        });

        if (frameCount > 400 && frameCount % 120 === 0) {
            this.mussels.push(new Mussel());
        }
        this.mussels.forEach((mussel, index) => {
            mussel.draw();

            if (mussel.x + mussel.width < 0) {
                this.mussels.splice(index, 1);
            }

            if (this.collisionMussel(mussel, this.player)) {
                this.player.increaseScore();
                this.mussels.splice(index, 1);
                if (this.player.score > 20) {
                    this.win();

                }
            }
        });

    }

    collisionFishhook(fishhook, player) {
        //octopus.images[0].width
        if (player.x <= fishhook.xHook || fishhook.xHook + fishhook.width * 0.9 < player.x) {
            return false;
        }
        if (player.y + octopus.images[0].height < fishhook.yHook || fishhook.y + fishhook.height < player.y) {
            return false;
        } else {
            return true;
        }
    }

    collisionMussel(mussel, player) {
        if (player.x <= mussel.x || mussel.x + mussel.width < player.x) {
            return false;
        }
        // octopus.images[0].height
        if (player.y < mussel.y || mussel.y + mussel.height < player.y) {
            return false;
        } else {
            return true;
        }
    }

    gameOver() {
        noLoop();
        song.stop();
        this.sleep(500);
        document.body.removeChild(gameCanvas);
        const img = document.createElement("img");
        img.setAttribute("src", "/assets/gameover-img.jpg");
        document.body.appendChild(img);
    }

    win() {
        noLoop();
        song.stop();
    }

    sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
            if ((new Date().getTime() - start) > milliseconds) {
                break;
            }
        }
    }

}