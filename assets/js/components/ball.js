class Ball extends Entity {
  constructor(pos, vel, rad, col, canvas, ctx) {
    super(pos, vel, canvas, ctx);
    this.rad = rad;
    this.col = col;
  }

  update() {
    this.pos.add(this.vel);
  }

  draw() {
    this.ctx.fillStyle = this.col;
    this.ctx.beginPath();
    this.ctx.arc(this.pos.x, this.pos.y, this.rad, 0, 2 * Math.PI);
    this.ctx.fill();
  }

  shouldRemove() {
    return this.pos.x + this.rad <= 0 ||
      this.pos.y + this.rad <= 0 ||
      this.pos.x - this.rad >= this.canvas.width ||
      this.pos.y - this.rad >= this.canvas.height;
  }
}
