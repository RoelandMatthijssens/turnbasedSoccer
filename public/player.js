class Player {
  constructor(x, y, color, scale_factor) {
    this.x = x
    this.y = y
    this.color = color
    this.scale_factor = scale_factor
    this.r = 1.6 * this.scale_factor
    this.selected = false
    this.destination = createVector(this.x, this.y)
  }

  click(){
    if(this.selected){
      this.selected = false
    } else {
      this.selected = true
      this.reset_destination()
    }
  }

  move_to(x, y){
    if (this.selected) {
      this.destination = createVector(x, y)
    }
  }

  reset_destination(){
    this.destination = createVector(this.x, this.y)
  }

  draw(){
    noStroke()
    fill(this.color)
    circle(this.x, this.y, this.r)
    this.draw_selected_indicator()
    this.draw_trajectory()
  }

  draw_selected_indicator(){
    if(this.selected){
      stroke(230, 213, 69)
      noFill()
      circle(this.x, this.y, this.r * 2)
    }
  }

  draw_trajectory(){
    stroke(230, 213, 69)
    noFill()
    const d = dist(this.x, this.y, this.destination.x, this.destination.y)
    if(d > this.scale_factor){
      line(this.x, this.y, this.destination.x, this.destination.y)
    }
  }


}
