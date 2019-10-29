let mode;

function setup() {
    mode = 0;
    textSize(50);

    let gameCanvas = createCanvas(600, 400);
    gameCanvas.parent("gameCanvas");
    game.setup();
    song.play();

}

function draw() {
    if (mode === 0) {
        text("Press Tab to go up. Press Enter to start", 0.3 * WIDTH, 0.25 * HEIGHT);
    }
    if (mode === 1) {
        game.draw();
    }

function loaded(){
    song.play();
}


}

function keyPressed() {
    if (keyCode === ENTER) {
        mode = 1;
    }

    if (key === " ") {
        game.player.up();
    }
}

const game = new Game();