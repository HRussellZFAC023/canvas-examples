class Entity {
  constructor(pos, vel, canvas, ctx) {
    this.pos = pos || new Vector(0, 0);
    this.vel = vel || new Vector(0, 0);
    this.canvas = canvas;
    this.ctx = ctx;
  }

  update() {}

  draw() {}

  shouldRemove() {
    return false;
  }
}
