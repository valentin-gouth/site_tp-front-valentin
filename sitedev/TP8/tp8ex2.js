const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const W = 600;
const H = 480;

const bg = new Image();
bg.src = "fond.png";

const marioSheet = new Image();
marioSheet.src = "mario.png";

let COLS = 0;
const FW = 92;
const FH = 100;
const ROW = 0;
const OFFSET_Y = 0;

let frameIndex = 0;
let tick = 0;

let loaded = 0;
function checkLoaded() {
  loaded++;
  if (loaded === 2) requestAnimationFrame(draw);
}

bg.onload = checkLoaded;
marioSheet.onload = () => {
  COLS = Math.floor(marioSheet.width / FW);
  checkLoaded();
};

let bgX = 240;
const groundY = 390;

function draw() {
  ctx.clearRect(0, 0, W, H);

  bgX -= 2;
  if (bgX <= -bg.width) bgX = 0;

  ctx.drawImage(bg, bgX, 0);
  ctx.drawImage(bg, bgX + bg.width, 0);

  tick++;
  if (tick % 5 === 0) {
    frameIndex = (frameIndex + 1) % COLS;
  }

  ctx.drawImage(
    marioSheet,
    frameIndex * FW,
    ROW * FH + OFFSET_Y,
    FW,
    FH,
    200,
    groundY - FH,
    FW,
    FH
  );

  requestAnimationFrame(draw);
}







