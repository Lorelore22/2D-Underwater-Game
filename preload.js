let bgLandscape;
let bgSwarm;
let octopus;
let frameNumber = 0;
let song;

function preload() {
    // background images
    bgLandscape = loadImage("/assets/background-landscape.png");
    bgSwarm = loadImage("/assets/background-fishswarm.png");

    // charakter
    octopus = loadAnimation("./assets/characters/octopus/1.png", "./assets/characters/octopus/2.png");
    
    // fishhooks
    imgFishhook = loadImage("/assets/fishhook.png");

    // mussels
    imgMussel = loadImage("/assets/mussel.png");

    // music
    song = loadSound("/assets/aquarium.mp3");
}