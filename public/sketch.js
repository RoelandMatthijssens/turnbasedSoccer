let field
let teams
let scale_factor
let click_handler

function setup() {
  createCanvas(windowWidth, windowHeight);
  // frameRate(10)
  field = new Field(width/2, height/2, width, height)
  scale_factor = field.scale_factor
  teams = []
  teams.push(new Team(color(200, 0, 0), [4, 3, 3], field, 'left'))
  teams.push(new Team(color(0, 0, 200), [4, 5, 1], field, 'right'))
  click_handler = new ClickHandler(teams)
}

function mousePressed(event) {
  click_handler.handle_click(event)
}

function draw() {
  background(57, 173, 67)
  field.draw()
  teams.forEach( (team) => team.draw() )
}

document.oncontextmenu = function() {
  if (mouseX < width && mouseY < height){
    return false
  }
}

