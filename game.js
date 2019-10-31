class Game {
    constructor() {
        this.background = new Background();
        this.player = new Player();
        this.fishhooks = [];
        this.mussels = [];
        this.hands = [];
        //this.win = false;
    }

    setup() {
        this.background.setup();
        this.player.setup();
        //songBg.loop();
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

        // mussels
        if (frameCount > 400 && frameCount % 120 === 0) {
            this.mussels.push(new Mussel());
        }
        this.mussels.forEach((mussel, index) => {
            mussel.draw();

            if (mussel.x + mussel.width < 0) {
                this.mussels.splice(index, 1);
            }

            if (this.collisionMussel(mussel, this.player)) {
                songEat.play();
                this.player.increaseScore();
                this.mussels.splice(index, 1);
                if (this.player.score % 4) {
                    SPEEDBG += 0.1;
                }
                if (this.player.score >= 20) {
                    this.win();

                }

            }

            if (this.player.score >= SCOREWIN) {
                this.win();
            }
        });

        // hand
        if (this.player.score >= ENEMYSCORE) {
            if (frameCount % 4 === 0 && this.background.transparent < 130) {
                this.background.transparent++;
                this.background.green++;
                this.background.blue++;
            }
            strokeWeight(0);
            fill(this.background.red, this.background.green, this.background.blue, this.background.transparent);
            rect(0, 0, WIDTH, HEIGHT);

            this.background.green -= 1;
            this.background.blue -= 1;
            if (frameCount > 240 && frameCount % 600 === 0) {
                songEnemy.setVolume(0.8);
                songEnemy.play();
                this.hands.push(new Hand());

            }
            this.hands.forEach((hand, index) => {
                hand.draw();

                if (hand.x > WIDTH) {
                    this.hands.splice(index, 1);
                }
                if (this.collisionHand(hand, this.player)) {
                    this.gameOver();
                }
            });
        }


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

    collisionHand(hand, player) {
        if (player.x <= hand.xHand || hand.xHand + hand.width * 0.9 < player.x) {
            return false;
        }
        if (player.y + octopus.images[0].height < hand.yHand * 1.05 || hand.y + hand.height < player.y) {
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
        document.body.querySelector("#heading").innerText = "game over";
        noLoop();
        songBg.stop();
        songDead.play();
        this.sleep(1500);

        mode = 2;

        // document.body.removeChild(gameCanvas);
        // const img = document.createElement("img");
        // img.setAttribute("src", "/assets/gameover-img.jpg");
        // document.body.appendChild(img);
    }

    win() {
        document.body.querySelector("#heading").innerText = "Now you are free! Far away from the humans!";
        noLoop();
        songBg.stop();
        songWinner.play();
        this.sleep(1000);
        // document.body.removeChild(gameCanvas);
        mode = 2;
        // const videoWin = document.createElement("video");
        // videoWin.setAttribute("src", "/assets/videoWinner.mp4");
        // document.body.appendChild(videowin);
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