// canvas setup
let w = window.innerWidth;
let h = window.innerHeight;
const BG_COLOUR = '#2f3640';
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// make the canvas fullscreen
window.addEventListener('resize', () => {
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.width = w; canvas.h = h;
});
canvas.width = w; canvas.height = h;

// entity objects to be drawn to the canvas
const entities = [];

// frame loop steps
const clear = () => {
  ctx.fillStyle = BG_COLOUR;
  ctx.fillRect(0, 0, w, h);
};
const update = () => {
  for (let i = 0; i < entities.length; i++) {
    entities[i].update();
    if (entities[i].shouldRemove()) {
      entities.splice(i, 1);
    }
  }
  addBalls();
};
const draw = () => {
  entities.forEach(entity => entity.draw());
};

// frame loop
const render = (ts) => {
  clear(); update(); draw();
  window.requestAnimationFrame(render);
};

const addBalls = () => {
  const colours = ['#ee5253', '#fa983a', '#78e08f', '#f6b93b', '#e84393'];
  for (let i = 0; i < 10; i++) {
    let a = Math.random() * 10 | 0 + 2;
    let b = Math.random() * 10 | 0 + 2;

    let pos = new Vector(w / 2 | 0, h / 2 | 0);
    let vel = new Vector(a % 2 == 0 ? -a : a, b % 2 == 0 ? -b : b);

    let rad = Math.random() * 100 | 0;
    let col = colours[Math.random() * colours.length | 0];

    let ball = new Ball(pos, vel, rad, col, canvas, ctx);
    entities.push(ball);
  }
};

// start frame loop
window.requestAnimationFrame(render);
