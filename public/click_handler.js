class ClickHandler {
  static LEFT = 0
  static MIDDLE = 1
  static RIGHT = 2
  constructor(teams) {
    this.teams = teams
    this.players = this.teams.flatMap( t => t.players )
  }

  handle_click(event){
    const x = event.offsetX
    const y = event.offsetY
    switch (event.button) {
      case ClickHandler.LEFT:
        this.handle_left_click(x, y)
        break;
      case ClickHandler.RIGHT:
        this.handle_right_click(x, y)
        break;
      case ClickHandler.MIDDLE:
        console.log('middle clicked')
        break;
    }
  }

  handle_left_click(x, y){
    const clicked_players = this.list_clicked_players(x, y)
    if (clicked_players.length === 0) {
      this.players.map(p => p.move_to(x, y))
    } else {
      clicked_players.map(p => p.click())
    }
  }

  handle_right_click(x, y){
    this.deselect_players()
  }

  deselect_players(){
    this.players.map(p => p.selected = false)
  }

  list_clicked_players(x, y){
    let clicked_players = []
    for(let player of this.players){
      const d = dist(player.x, player.y, x, y)
      if(d < player.r){
        clicked_players.push(player)
      }
    }
    return clicked_players
  }
}
