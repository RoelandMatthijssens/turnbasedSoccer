class Player {
  constructor(x, y, color, scale_factor) {
    this.x = x
    this.y = y
    this.color = color
    this.scale_factor = scale_factor
  }

  draw(){
    noStroke()
    fill(this.color)
    circle(this.x, this.y, 1.6 * this.scale_factor)
  }
}
