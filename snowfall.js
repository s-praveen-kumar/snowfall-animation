const snowColor = "#ddd9";
const bg = "#070b34";
const snowCount = 200;
const minRadius = 1;
const maxRadius = 5;
const maxXVel = 0.5;
const minYVel = 0.5;
const maxYVel = 2;

const canvas = document.querySelector("#snowfall");
const c = canvas.getContext("2d");
window.addEventListener("resize", () => {
  initCanvas();
  initDrawing();
});

function randomRange(min, max) {
  return min + Math.random() * (max - min);
}
function initCanvas() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  canvas.style.backgroundColor = bg;
}

function Snow(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
}

Snow.prototype.render = function() {
  c.beginPath();
  c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  c.fillStyle = snowColor;
  c.fill();
};

Snow.prototype.update = function() {
  this.x += this.dx;
  this.y += this.dy;
  this.render();
};

function createSnow(start) {
  let radius = randomRange(minRadius, maxRadius);
  let x = randomRange(radius, canvas.width - radius);
  let y = randomRange(start ? -1000 : 30, 0);
  let dx = randomRange(-maxXVel, maxXVel);
  let dy = randomRange(minYVel, maxYVel);
  return new Snow(x, y, dx, dy, radius);
}
let snowArray;
function initDrawing() {
  snowArray = [];
  for (let i = 0; i < snowCount; i++) {
    snowArray.push(createSnow(true));
  }
}

function animate() {
  /*Clear canvas*/
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  /*Draw snow*/
  snowArray.forEach((snow, i, arr) => {
    snow.update();
    if (
      snow.x + snow.radius > canvas.width ||
      snow.x - snow.radius < 0 ||
      snow.y + snow.radius > canvas.height
    ) {
      arr.splice(i, 1);
      arr.push(createSnow());
    }
  });
}
initCanvas();
initDrawing();
animate();
