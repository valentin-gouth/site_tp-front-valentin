const c1 = document.getElementById("c1").getContext("2d");
const c2 = document.getElementById("c2").getContext("2d");
const c3 = document.getElementById("c3").getContext("2d");
const c4 = document.getElementById("c4").getContext("2d");
const main = document.getElementById("main").getContext("2d");

function clear(ctx) {
  ctx.clearRect(0, 0, 200, 200);
}


function figA(ctx) {
  const cx = 100, cy = 100;
  const step = 10;

  for (let i = 8; i >= 1; i--) {
    ctx.beginPath();
    ctx.arc(cx, cy, i * step, 0, Math.PI * 2);
    ctx.fillStyle = i % 2 === 0 ? "black" : "white";
    ctx.fill();
  }

  ctx.beginPath();
  ctx.arc(cx, cy, 4, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
}



function drawGrid(ctx, size = 20) {
  ctx.strokeStyle = "#ddd";
  for (let i = 0; i <= 200; i += size) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, 200);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(200, i);
    ctx.stroke();
  }
}


function figB   (ctx, unit = 20) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  drawGrid(ctx, unit);

  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;

  const contour = [
    [2,2],[3,3],[4,4],[4,5],[5,6],[7,6],[9,4],[8,4],^^^^^^^^^^^
    [9,3],[8,3],[8,2],[7,3],[5,3],[3,2],[2,2]
  ];

  ctx.beginPath();
  ctx.moveTo(contour[0][0] * unit, contour[0][1] * unit);
  for (let i = 1; i < contour.length; i++) {
    ctx.lineTo(contour[i][0] * unit, contour[i][1] * unit);
  }
  ctx.stroke();

  const couronne = [
    [3,2],[3,1.5],[3.25,1.75],[3.5,1.5],
    [3.75,1.75],[4,1.5],[4,2],[3,2]
  ];

  ctx.beginPath();
  ctx.moveTo(couronne[0][0] * unit, couronne[0][1] * unit);
  for (let i = 1; i < couronne.length; i++) {
    ctx.lineTo(couronne[i][0] * unit, couronne[i][1] * unit);
  }
  ctx.stroke();
}




function figC(ctx) {
  const size = 25;
  for (let y = 0; y < 200; y += size) {
    for (let x = 0; x < 200; x += size) {
      ctx.fillStyle = ((x / size + y / size) % 2 === 0) ? "black" : "white";
      ctx.fillRect(x, y, size, size);
    }
  }
}


function figD(ctx) {
  ctx.font = "14px sans-serif";
  ctx.fillText("Figure D à venir", 40, 100);
}


figA(c1);
figB(c2);
figC(c3);
figD(c4);


const figs = [figA, figB, figC, figD];
let index = 0;

function drawMain() {
  clear(main);
  figs[index](main);
}

drawMain();

document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % figs.length;
  drawMain();
});

