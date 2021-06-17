let field
function setup() {
  createCanvas(windowWidth, windowHeight);
  field = new Field(width/2, height/2, width, height)
}

function draw() {
  background(57, 173, 67);
  field.draw()
}
