// commentaires FR courts
document.addEventListener('DOMContentLoaded', function(){
  // 4) split du texte en spans .char pour animer caractère par caractère
  const seqEl = document.getElementById('seq');
  if(seqEl){
    const text = seqEl.textContent.trim();
    seqEl.textContent = ''; // vide puis remplissage
    for(let i=0;i<text.length;i++){
      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = text[i];
      span.style.animationDelay = (i*0.07)+'s'; // delay progressif
      seqEl.appendChild(span);
    }
    // après l'apparition, déclencher l'alerte (rouge+tremblement) puis disparition
    setTimeout(function(){ seqEl.classList.add('alert'); }, 1200 + text.length*70);
  }

  // 5) bouton : toggle classe 'clicked'
  const btn = document.getElementById('btn');
  if(btn){
    btn.addEventListener('click', function(){
      this.classList.toggle('clicked');
      this.setAttribute('aria-pressed', this.classList.contains('clicked')?'true':'false');
    });
  }

  // 7) transformer le texte wave en spans .waveChar pour appliquer delays (simple)
  const wave = document.querySelector('.wave');
  if(wave){
    const s = wave.textContent.trim();
    wave.textContent = '';
    for(let i=0;i<s.length;i++){
      const sp = document.createElement('span');
      sp.className = 'waveChar';
      sp.textContent = s[i];
      sp.style.animationDelay = (i*0.08)+'s';
      wave.appendChild(sp);
    }
  }
});

