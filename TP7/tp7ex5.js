const img = new Image();
img.src = "600x450.jpg"; 

const c1 = document.getElementById("c1").getContext("2d");
const c2 = document.getElementById("c2").getContext("2d");
const c3 = document.getElementById("c3").getContext("2d");
const canvas4 = document.getElementById("c4");
const c4 = canvas4.getContext("2d");

img.onload = () => {
  const iw = img.width;
  const ih = img.height;

  
  c1.clearRect(0,0,1280,720);
  const x1 = (1280 - iw) / 2;
  const y1 = (720 - ih) / 2;
  c1.drawImage(img, x1, y1);

  c2.drawImage(img, 0, 0, 1280, 720);

  
  const ratioImg = iw / ih;
  const ratioCanvas = 1280 / 720;

  let sx, sy, sw, sh;

  if (ratioImg > ratioCanvas) {
    sh = ih;
    sw = ih * ratioCanvas;
    sx = (iw - sw) / 2;
    sy = 0;
  } else {
    sw = iw;
    sh = iw / ratioCanvas;
    sx = 0;
    sy = (ih - sh) / 2;
  }

  c3.drawImage(img, sx, sy, sw, sh, 0, 0, 1280, 720);

  
  canvas4.width = iw * 2;
  canvas4.height = ih;

  
  c4.save();
  c4.scale(-1, 1);
  c4.drawImage(img, -iw, 0);
  c4.restore();

  
  c4.drawImage(img, iw, 0);
};
