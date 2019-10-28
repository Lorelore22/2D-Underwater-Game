function setup() {
    let gameCanvas = createCanvas(600, 400);
    gameCanvas.parent("gameCanvas");
    game.setup();
}

function draw() {
    game.draw();
}

function keyPressed() {
    if (key === " ") {
        game.player.up();
    }
}

const game = new Game();