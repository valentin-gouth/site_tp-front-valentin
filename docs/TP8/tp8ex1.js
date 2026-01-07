const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const SIZE = 512;
const SPEED = 10;
const ROWS = 4; 
const COLS = 4; 

const background = new Image();
background.src = "pelouse.png"; 


const spriteSheet = new Image();
spriteSheet.src = "sprites.png";

let x = 256;
let y = 256;
let direction = 1; 
let frame = 0;     
let FRAME_WIDTH, FRAME_HEIGHT;

let bgLoaded = false;
let spriteLoaded = false;

function draw() {
 
  if (bgLoaded) {
    ctx.drawImage(background, 0, 0, SIZE, SIZE);
  } else {
    ctx.fillStyle = "#aaddff";
    ctx.fillRect(0, 0, SIZE, SIZE);
  }

  
  if (spriteLoaded) {
    ctx.drawImage(
      spriteSheet,
      frame * FRAME_WIDTH,
      direction * FRAME_HEIGHT,
      FRAME_WIDTH,
      FRAME_HEIGHT,
      x, y,
      FRAME_WIDTH,
      FRAME_HEIGHT
    );
  }
}

document.addEventListener("keydown", e => {
  switch(e.key){
    case "ArrowUp":    direction = 1; y -= SPEED; break; // haut
    case "ArrowDown":  direction = 0; y += SPEED; break; // bas
    case "ArrowLeft":  direction = 2; x -= SPEED; break;
    case "ArrowRight": direction = 3; x += SPEED; break;
    default: return;
  }

  frame = (frame + 1) % COLS;

  
  x = Math.max(0, Math.min(SIZE - FRAME_WIDTH, x));
  y = Math.max(0, Math.min(SIZE - FRAME_HEIGHT, y));

  draw();
});


background.onload = () => {
  bgLoaded = true;
  if (spriteLoaded) draw();
};


spriteSheet.onload = () => {
  FRAME_WIDTH = spriteSheet.width / COLS;
  FRAME_HEIGHT = spriteSheet.height / ROWS;
  spriteLoaded = true;
  if (bgLoaded) draw();
};


