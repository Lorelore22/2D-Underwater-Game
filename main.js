let mode;

function setup() {
    mode = 0;
    textSize(50);
    let gameCanvas = createCanvas(WIDTH, HEIGHT);
    gameCanvas.parent("gameCanvas");
    game.setup();
}

function draw() {
    if (mode === 0) {
        textSize(22);
        fill(1, 41, 89);
        textFont("Patrick Hand");
        // textFont("Amatic SC");
        text("Collect mussels!", 0.35 * WIDTH, 0.13 * HEIGHT);
        text("Be careful of your biggest enemy: HUMANS!", 0.16 * WIDTH, 0.2 * HEIGHT);
        textSize(25);
        text("Press SPACEBAR to go up. Press ENTER to start", 0.1 * WIDTH, 0.96 * HEIGHT);
    }
    if (mode === 1) {
        game.draw();
    }

    if (mode === 2) {
        loop();
        clear();
        if (game.player.score < SCOREWIN) {
            image(imgGameOver, 0, 0, WIDTH * 1.1, HEIGHT * 1.1);
        }
        fill(255, 255, 255);
        textFont("Amatic SC");
        textSize(50);
        text("Press ENTER to play again", 0, 0.98 * HEIGHT);

    }
}

function keyPressed() {
    if (keyCode === ENTER) {
        songBg.loop();
        mode = 1;
        game.fishhooks = [];
        game.mussels = [];
        game.hands = [];
        game.player.score = 0;
        console.log("test");
    }

    if (key === " ") {
        game.player.up();
        SPEEDB = 2;
        songSwimming.setVolume(0.2);
        songSwimming.play();
    }
}

const game = new Game();