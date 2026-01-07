const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function drawPacman(ctx) {
  const w = canvas.width;
  const h = canvas.height;

  ctx.clearRect(0, 0, w, h);

  
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, w, h);

  
  const cx = 150;
  const cy = 150;
  const r = 100;
  const mouth = Math.PI / 6;

  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.arc(cx, cy, r, mouth, 2 * Math.PI - mouth);
  ctx.closePath();
  ctx.fillStyle = "yellow";
  ctx.fill();

 
  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(cx + 60, cy, 6, 0, Math.PI * 2);
  ctx.arc(cx + 90, cy, 6, 0, Math.PI * 2);
  ctx.fill();
}

drawPacman(ctx);

  
