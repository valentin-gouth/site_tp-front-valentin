const c1 = document.getElementById("c1").getContext("2d");
const c2 = document.getElementById("c2").getContext("2d");
const c3 = document.getElementById("c3").getContext("2d");


function petale(ctx) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.quadraticCurveTo(20, -40, 0, -80);
  ctx.quadraticCurveTo(-20, -40, 0, 0);
  ctx.fillStyle = "pink";
  ctx.fill();
}


function fleur(ctx, petals = 8) {
  ctx.save();
  for (let i = 0; i < petals; i++) {
    ctx.rotate((Math.PI * 2) / petals);
    petale(ctx);
  }
  ctx.restore();
}


c1.save();
c1.translate(100, 150);
petale(c1);
c1.restore();


c2.save();
c2.translate(100, 100);
fleur(c2, 10);
c2.restore();


let angle = 0;

function animate() {
  c3.clearRect(0, 0, 200, 200);
  c3.save();
  c3.translate(100, 100);
  c3.rotate(angle);
  fleur(c3, 12);
  c3.restore();

  angle += 0.01;
  requestAnimationFrame(animate);
}

animate();
