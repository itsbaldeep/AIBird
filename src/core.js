/*
 * This is the setup/preload file, it is loaded before anything
 * It contains generation of canvas and loading of sprites
 */

// Making canvas object and getting context
const canvas = document.createElement("canvas")
const context = canvas.getContext("2d")

// Setting height and width
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// Appending to the HTML
document.body.appendChild(canvas)

// Loading sprites
const sprites = {
    bird: [new Image(), new Image()],
    cloud: new Image()
}

sprites.cloud.src = "./sprites/cloud.png"
sprites.bird[0].src = "./sprites/bird-0.png"
sprites.bird[1].src = "./sprites/bird-1.png"

// Showing some text
context.font = `${canvas.width / 10}px Consolas`
context.fillStyle = "white"
context.textAlign = "center"
context.fillText("Press to play", canvas.width / 2, canvas.height / 2)
