// canvas setup
let w = window.innerWidth;
let h = window.innerHeight;
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// make the canvas fullscreen
window.addEventListener('resize', () => {
  w = window.innerWidth;
  h = window.innerHeight;
  canvas.width = w; canvas.h = h;
});
canvas.width = w; canvas.height = h;

// frame loop
let c = 0;
const render = (ts) => {
  if (c % 60 == 0) {
    let r = (Math.random() * 255 | 0).toString(16);
    let g = (Math.random() * 255 | 0).toString(16);
    let b = (Math.random() * 255 | 0).toString(16);
    let colour = `#${r}${g}${b}`;
    ctx.fillStyle = colour;
    ctx.fillRect(0, 0, w, h);
  }
  c++;

  ctx.fillStyle = '#ffffff';
  ctx.fillRect(w / 2 | 0, h / 2 | 0, 10, 10);

  ctx.fillRect(0, 0, 10, 10);
  ctx.fillRect(w - 10, 0, 10, 10);
  ctx.fillRect(0, h - 10, 10, 10);
  ctx.fillRect(w - 10, h - 10, 10, 10);

  ctx.strokeStyle = '#ffffff';
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(w, h);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(w, 0);
  ctx.lineTo(0, h);
  ctx.stroke();

  window.requestAnimationFrame(render);
};

// start frame loop
window.requestAnimationFrame(render);
