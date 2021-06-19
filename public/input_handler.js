class InputHandler {
  static LEFT = 0
  static MIDDLE = 1
  static RIGHT = 2
  static ENTER = 'Enter'
  constructor(game) {
    this.game = game
    this.teams = game.teams
    this.players = this.teams.flatMap( t => t.players )
  }

  handle_key(key){
    switch(key){
      case InputHandler.ENTER:
        this.game.play_turn()
        break;
    }
  }

  handle_click(x, y, button){
    switch (button) {
      case InputHandler.LEFT:
        this.handle_left_click(x, y)
        break;
      case InputHandler.RIGHT:
        this.handle_right_click(x, y)
        break;
      case InputHandler.MIDDLE:
        console.log('middle clicked')
        break;
    }
  }

  handle_left_click(x, y){
    const clicked_players = this.list_clicked_players(x, y)
    if (clicked_players.length === 0) {
      this.players.map(p => p.set_destination(x, y))
    } else {
      clicked_players.map(p => p.click())
    }
  }

  handle_right_click(x, y){
    const clicked_players = this.list_clicked_players(x, y)
    clicked_players.map(p => p.clear_destination())
    this.deselect_players()

  }

  deselect_players(){
    this.players.map(p => p.selected = false)
  }

  list_clicked_players(x, y){
    let clicked_players = []
    for(let player of this.players){
      const d = dist(player.pos.x, player.pos.y, x, y)
      if(d < player.r){
        clicked_players.push(player)
      }
    }
    return clicked_players
  }
}
