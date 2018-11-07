// Making a canvas and getting Context
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");

// Setting height and width
let height = window.screen.height;
let width = window.screen.width;
height = width > height ? (width = 500) : width;
canvas.width = canvas.height = width;

// Adding it to the HTML
document.querySelector("#game").appendChild(canvas);

// Styling
canvas.style.backgroundColor = "rgb(109,182,227)";

// Loading sprites
const birdSprite = new Array();
birdSprite[0] = new Image();
birdSprite[0].src = "./../sprites/bird-0.png";
birdSprite[1] = new Image();
birdSprite[1].src = "./../sprites/bird-1.png";

const cloudSprite = new Image();
cloudSprite.src = "./../sprites/cloud.png";
