let bgLandscape;
let bgSwarm;
let octopus;
let imgHand;
let frameNumber = 0;
let song;
let songWinner;

function preload() {
    // background images
    bgLandscape = loadImage("assets/background-landscape.png");
    bgSwarm = loadImage("assets/background-fishswarm.png");

    // charakter
    octopus = loadAnimation("assets/characters/octopus/1.png", "./assets/characters/octopus/2.png");

    // fishhooks
    imgFishhook = loadImage("assets/fishhook.png");

    // mussels
    imgMussel = loadImage("assets/mussel.png");

    // hand
    imgHand = loadImage("assets/hand1.png");

    // game-over
    imgGameOver = loadImage("assets/gameover-img.jpg");

    // winner
    //imgWinner = loadImage("assets/characters/octopus/1.png");

    // music
    songBg = loadSound("assets/sounds/aquarium.mp3");

    songEat = loadSound("assets/sounds/eatMussel/numnum.mp3");

    songEnemy = loadSound("assets/sounds/enemyHand.mp3");

    songHooks = loadSound("assets/sounds/hooks.mp3");

    songDead = loadSound("assets/sounds/deadOctopus.mp3");

    songWinner = loadSound("assets/sounds/winnerSound.wav");

    songSwimming = loadSound("assets/sounds/swimmingSound.wav");
}