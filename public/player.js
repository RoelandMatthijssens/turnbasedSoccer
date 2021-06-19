class Player {
  constructor(x, y, color, scale_factor) {
    this.pos = createVector(x, y)
    this.color = color
    this.scale_factor = scale_factor
    this.r = 1.6 * this.scale_factor
    this.selected = false
    this.destination = this.pos.copy()
    this.speed = random(4, 10) * this.scale_factor
    this.step = this.pos.copy()
  }

  click(){
    if(this.selected){
      this.selected = false
    } else {
      this.selected = true
    }
    console.log(this)
  }

  set_destination(x, y){
    if (this.selected) {
      this.destination = createVector(x, y)
      this.step = this.calculate_next_step()
    }
  }

  set_pos(x, y){
    this.pos = createVector(x, y)
    this.reset_destination()
  }

  clear_destination(){
    this.destination = null
    this.step = null
  }

  move(){
    if(this.step){
      this.pos = this.step.copy()
      this.step = this.calculate_next_step()
    }
  }

  reset_destination(){
    this.destination = null
    this.step = null
  }

  draw(){
    noStroke()
    fill(this.color)
    circle(this.pos.x, this.pos.y, this.r)
    this.draw_selected_indicator()
    this.draw_trajectory()
  }

  draw_selected_indicator(){
    if(this.selected){
      stroke(230, 213, 69)
      noFill()
      circle(this.pos.x, this.pos.y, this.r * 2)
    }
  }

  draw_trajectory(){
    stroke(230, 213, 69)
    noFill()
    if(this.close_to_destination()){
      this.reset_destination()
    }
    if(this.destination){
      circle(this.destination.x, this.destination.y, 20)
    }
    if(this.step){
      line(this.pos.x, this.pos.y, this.step.x, this.step.y)
    }
  }

  calculate_next_step(){
    if (this.close_to_destination()) {
      this.reset_destination()
    }
    if (this.destination && this.pos) {
      let step = p5.Vector.sub(this.destination, this.pos)
      step.setMag(min(this.speed, step.mag()))
      step = p5.Vector.add(step, this.pos)
      return step
    } else {
      return null
    }
  }

  close_to_destination(){
    if(!this.destination){
      return true
    }
    const d = dist(this.pos.x, this.pos.y, this.destination.x, this.destination.y)
    return d < this.scale_factor
  }
}
