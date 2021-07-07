class Game {
  constructor() {
    this.field = new Field(width/2, height/2, width, height)
    this.teams = []
    this.scale_factor = this.field.scale_factor
    this.teams.push(new Team(color(200, 0, 0), [3, 2, 2, 3], this, 'left'))
    this.teams.push(new Team(color(0, 0, 200), [4, 5, 1], this, 'right'))
    this.input_handler = new InputHandler(this)
    this.players = this.teams.flatMap( t => t.players )
  }

  draw(){
    this.field.draw()
    this.teams.forEach( (team) => team.draw() )
  }

  play_turn(){
    this.players.map(p => p.move())
    this.get_colliding_players().map(([player1, player2]) => {
      player1.collision_with(player2)
    })
  }

  get_colliding_players(){
    // I know, i know. O(n^2) but there are at most 22 players on the field so fuckit
    const collisions = []
    for(let player1 of this.players){
      for(let player2 of this.players){
        const d = p5.Vector.dist(player1.pos, player2.pos)
        if(player1 === player2){
          continue
        }
        if(d < player1.r + player2.r){
          collisions.push([player1, player2])
        }
      }
    }
    return collisions
  }
}
