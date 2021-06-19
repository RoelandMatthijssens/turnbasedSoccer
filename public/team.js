class Team {
  constructor(color, position, game, side) {
    this.side = side
    this.color = color
    this.position = position
    this.game = game
    this.field = this.game.field
    this.scale_factor = this.game.scale_factor
    this.players = []
    this.setup_team()
  }

  draw(){
    this.players.forEach( (player) => player.draw() )
  }

  setup_team(){
    const players = []
    const keeper_position = { x: this.field.x - this.field.width / 2 + 10, y: this.field.y }
    let keeper = new Player(keeper_position.x, keeper_position.y, this.color, this.scale_factor)
    players.push(keeper)

    const x_delta = (this.field.x - keeper_position.x) / (this.position.length + 1)
    let next_x = keeper_position.x + x_delta

    for(let count of this.position){
      const y_delta =  this.field.height / (count + 1)
      let next_y = this.field.y - (this.field.height/2) + y_delta
      for (var i = 0; i < count; i++) {
        let player = new Player(next_x + 5 * this.scale_factor, next_y, this.color, this.scale_factor)
        players.push(player)
        next_y+=y_delta
      }
      next_x+=x_delta
    }

    if (this.side == 'right'){
      for(let player of players){
        const distance_to_center_line = this.field.x - player.pos.x
        player.set_pos(player.pos.x + distance_to_center_line * 2, player.pos.y)
      }
    }
    this.players = players
  }

  play_turn(){
    this.players.map(p => p.move())
  }
}
