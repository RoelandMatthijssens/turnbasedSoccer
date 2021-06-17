class Field {
  constructor(x, y, max_width, max_height){
    this.x = x
    this.y = y
    this.calculate_actual_dimensions(max_width, max_height)
  }

  draw(){
    rectMode(CENTER)
    stroke(255)
    strokeWeight(2)
    noFill()
    this.draw_borders()
    this.draw_goals()
    this.draw_penalty_area()
    this.draw_center_line()
    this.draw_corners()
  }

  calculate_actual_dimensions(max_width, max_height){
    const padding_width = 30
    const unit_height = 68
    const unit_width = 105

    const max_width_scale = floor((max_width-(padding_width*2)) / unit_width)
    const max_height_scale = floor((max_height-(padding_width*2)) / unit_height)
    this.scale_factor = min(max_width_scale, max_height_scale)
    this.width = unit_width * this.scale_factor
    this.height = unit_height * this.scale_factor
  }

  draw_borders(){
    rect(this.x, this.y, this.width, this.height)
  }

  draw_goals(){
    const box_height = 18.32 * this.scale_factor
    const box_width = 5.5 * this.scale_factor
    // left goal
    rect(this.x - this.width/2 + box_width/2, this.y, box_width, box_height)
    // right goal
    rect(this.x + this.width/2 - box_width/2, this.y, box_width, box_height)
  }

  draw_penalty_area(){
    const box_height = 40.32 * this.scale_factor
    const box_width = 16.5 * this.scale_factor
    const penalty_spot_distance = 11 * this.scale_factor
    const penalty_arc_radius = 9.15 * this.scale_factor
    const left_penalty_spot = {
      x: this.x - this.width/2 + penalty_spot_distance,
      y: this.y
    }
    const right_penalty_spot = {
      x: this.x + this.width/2 - penalty_spot_distance,
      y: this.y
    }
    // left area
    rect(this.x - this.width/2 + box_width/2, this.y, box_width, box_height)
    circle(left_penalty_spot.x, left_penalty_spot.y, 4);
    arc(
      right_penalty_spot.x,
      right_penalty_spot.y,
      penalty_arc_radius * 2,
      penalty_arc_radius * 2,
      0.71*PI,
      1.29*PI);
    // right area
    rect(this.x + this.width/2 - box_width/2, this.y, box_width, box_height)
    circle(right_penalty_spot.x, right_penalty_spot.y, 4);
    arc(
      left_penalty_spot.x,
      left_penalty_spot.y,
      penalty_arc_radius * 2,
      penalty_arc_radius * 2,
      1.71*PI,
      0.29*PI);
  }

  draw_center_line(){
    const circle_radius = 9.15 * this.scale_factor
    circle(this.x, this.y, 4);
    line(this.x, this.y-this.height/2, this.x, this.y+this.height/2)
    circle(this.x, this.y, circle_radius*2)
  }

  draw_corners(){
    const corner_radius = 1 * this.scale_factor
    arc( this.x-this.width/2, this.y-this.height/2, corner_radius * 2, corner_radius * 2, 0 * PI, 0.5 * PI);
    arc( this.x+this.width/2, this.y-this.height/2, corner_radius * 2, corner_radius * 2, 0.5 * PI, 1 * PI);
    arc( this.x-this.width/2, this.y+this.height/2, corner_radius * 2, corner_radius * 2, 1.5 * PI, 0 * PI);
    arc( this.x+this.width/2, this.y+this.height/2, corner_radius * 2, corner_radius * 2, 1 * PI, 1.5 * PI);
  }
}
