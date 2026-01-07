// scripts/exercice3.js
// Commentaires en français

document.addEventListener('DOMContentLoaded', function () {
  const prop = document.getElementById('propeller');
  if (!prop) return;

  // délai après le dernier scroll avant d'arrêter la rotation (ms)
  const STOP_DELAY = 160;
  let stopTimer = null;

  // Au scroll : ajouter la classe .spinning et remettre le timer
  function onScroll() {
    // si la classe n'est pas présente, on l'ajoute
    if (!prop.classList.contains('spinning')) {
      prop.classList.add('spinning');
      // pour a11y : indiquer que l'image est active (facultatif)
      prop.setAttribute('aria-hidden', 'false');
    }

    // réinitialiser le timer : on attend STOP_DELAY ms après le dernier scroll
    if (stopTimer) {
      clearTimeout(stopTimer);
    }
    stopTimer = setTimeout(function () {
      prop.classList.remove('spinning');
      prop.setAttribute('aria-hidden', 'true');
      stopTimer = null;
    }, STOP_DELAY);
  }

  // écouter l'événement scroll sur window
  window.addEventListener('scroll', onScroll, { passive: true });

  // Optionnel : démarrer l'animation si la page est déjà scrollée au chargement
  if (window.scrollY > 0) {
    prop.classList.add('spinning');
    // arrêter après un petit délai si l'utilisateur ne scrolle pas davantage
    stopTimer = setTimeout(function () {
      prop.classList.remove('spinning');
      prop.setAttribute('aria-hidden', 'true');
      stopTimer = null;
    }, STOP_DELAY);
  }
});

