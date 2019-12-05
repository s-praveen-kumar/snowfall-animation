let _snowColor = "#ddd9";
let _snowBg = "#070b34";
let _snowCount = 200;
let _snowMinRadius = 1;
let _snowMaxRadius = 5;
let _snowMaxXVel = 0.5;
let _snowMinYVel = 0.5;
let _snowMaxYVel = 2;

const canvas = document.querySelector("#snowfall");
const c = canvas.getContext("2d");
window.addEventListener("resize", () => {
  invalidate();
});

function randomRange(min, max) {
  return min + Math.random() * (max - min);
}
function initCanvas() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  canvas.style.backgroundColor = _snowBg;
  canvas.style.position = "fixed";
  canvas.style.left = "0";
  canvas.style.top = "0";
  canvas.style.zIndex = "-1";
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
  c.fillStyle = _snowColor;
  c.fill();
};

Snow.prototype.update = function() {
  this.x += this.dx;
  this.y += this.dy;
  this.render();
};

function createSnow(start) {
  let radius = randomRange(_snowMinRadius, _snowMaxRadius);
  let x = randomRange(radius, canvas.width - radius);
  let y = randomRange(start ? -1000 : 30, 0);
  let dx = randomRange(-_snowMaxXVel, _snowMaxXVel);
  let dy = randomRange(_snowMinYVel, _snowMaxYVel);
  return new Snow(x, y, dx, dy, radius);
}
let snowArray;
function initDrawing() {
  snowArray = [];
  for (let i = 0; i < _snowCount; i++) {
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

function invalidate() {
  initCanvas();
  initDrawing();
}
invalidate();
animate();
