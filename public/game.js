class Game {
  constructor() {
    this.field = new Field(width/2, height/2, width, height)
    this.teams = []
    this.scale_factor = this.field.scale_factor
    this.teams.push(new Team(color(200, 0, 0), [4, 3, 3], this, 'left'))
    this.teams.push(new Team(color(0, 0, 200), [4, 5, 1], this, 'right'))
    this.input_handler = new InputHandler(this)
  }

  draw(){
    this.field.draw()
    this.teams.forEach( (team) => team.draw() )
  }

  play_turn(){
    this.teams.map(t => t.play_turn())
  }
}
