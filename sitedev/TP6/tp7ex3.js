const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let rect = {
  x: 50,
  y: 50,
  w: 50,
  h: 50,
  colorIndex: 0,
  filled: true,
  visible: true
};

const colors = ["yellow", "red", "blue", "green"];

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (!rect.visible) return;

  ctx.strokeStyle = colors[rect.colorIndex];
  ctx.fillStyle = colors[rect.colorIndex];

  if (rect.filled) {
    ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
  } else {
    ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
  }
}

draw();

// Largeur
document.getElementById("w").addEventListener("click", () => {
  rect.w += 10;
  if (rect.w > 200) rect.w = 10;
  draw();
});

// Hauteur
document.getElementById("h").addEventListener("click", () => {
  rect.h += 10;
  if (rect.h > 200) rect.h = 10;
  draw();
});

// Couleur
document.getElementById("color").addEventListener("click", () => {
  rect.colorIndex = (rect.colorIndex + 1) % colors.length;
  draw();
});

// Style
document.getElementById("style").addEventListener("click", () => {
  rect.filled = !rect.filled;
  draw();
});

// Visibilité
document.getElementById("vis").addEventListener("click", () => {
  rect.visible = !rect.visible;
  draw();
});
