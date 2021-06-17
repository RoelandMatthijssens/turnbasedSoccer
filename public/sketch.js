let field
let teams
let scale_factor
function setup() {
  createCanvas(windowWidth, windowHeight);
  field = new Field(width/2, height/2, width, height)
  scale_factor = field.scale_factor
  teams = []
  teams.push(new Team(color(200, 0, 0), [4, 3, 3], field, 'left'))
  teams.push(new Team(color(0, 0, 200), [4, 5, 1], field, 'right'))
}

function draw() {
  background(57, 173, 67)
  field.draw()
  teams.forEach( (team) => team.draw() )
}
