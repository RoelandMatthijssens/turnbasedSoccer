let game

function setup() {
  createCanvas(windowWidth-10, windowHeight-40);
  frameRate(10)
  game = new Game()
}

function mousePressed(event) {
  game.input_handler.handle_click(event.offsetX, event.offsetY, event.button)
}

function keyTyped(event){
  game.input_handler.handle_key(key)
}

function draw() {
  background(57, 173, 67)
  game.draw()
}

document.oncontextmenu = function() {
  if (mouseX < width && mouseY < height){
    return false
  }
}

