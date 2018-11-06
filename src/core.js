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
canvas.style.backgroundColor = "#000";
document.body.style.margin = "0";
