// 1px = 1cm
// gravity = -9.8m/s/s = 98cm/s/s

const height = 400, width = 720, radius = 25, canvasId = 'canvas';

const canvas = document.createElement('canvas');
canvas.setAttribute('id', canvasId);
canvas.setAttribute('height', height);
canvas.setAttribute('width', width);

document.body.appendChild(canvas);

class Ball {
  constructor(x, y, vx, vy, mass, r, color) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.mass = mass;
    this.r = r;
    this.color = color;
  }

  init = (canvas) => {
    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext('2d');

    this.draw();
  }

  draw = () => {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    this.ctx.closePath();
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }
}

const ball = new Ball(100, 100, 0, 0, 0, radius, 'blue');

ball.init(canvasId);

console.log(ball);