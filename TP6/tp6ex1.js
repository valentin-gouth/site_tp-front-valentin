// ===========================
// JS pour Exercice 1 - Rideau sur image
// Commentaires en français
// ===========================

/*
 But du script :
 - gérer l'ouverture/fermeture du rideau aussi via clavier (touche Entrée ou Espace) lorsque
   la zone a le focus, pour améliorer l'accessibilité.
 - aucun besoin JS pour l'effet principal (CSS hover suffit), mais c'est un plus pédagogique.
*/

document.addEventListener('DOMContentLoaded', function () {
  const area = document.getElementById('imageArea');
  const curtain = document.getElementById('curtain');

  if (!area || !curtain) return;

  // si l'utilisateur appuie sur Entrée ou Espace quand la zone est focusée,
  // on bascule l'état (ouvert/fermé) en jouant sur une classe CSS.
  area.addEventListener('keydown', function (e) {
    // key : "Enter" ou " " (espace). On supporte les deux.
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
      e.preventDefault();
      // si le rideau est fermé (scaleY(1)), on ouvre ; si ouvert, on ferme.
      // on utilise une classe pour laisser le CSS gérer la transition si besoin.
      area.classList.toggle('js-open');
      // appliquer l'état via style si on veut forcer (mais ici la classe suffit)
      if (area.classList.contains('js-open')) {
        curtain.style.transform = 'scaleY(0)';
        curtain.setAttribute('aria-hidden', 'false');
      } else {
        curtain.style.transform = 'scaleY(1)';
        curtain.setAttribute('aria-hidden', 'true');
      }
    }
  });

  // lorsque la souris quitte la zone, on retire la classe éventuelle d'ouverture via JS
  area.addEventListener('mouseleave', function () {
    if (area.classList.contains('js-open')) {
      area.classList.remove('js-open');
      curtain.style.transform = 'scaleY(1)';
      curtain.setAttribute('aria-hidden', 'true');
    }
  });

  // petit fallback : si le navigateur ne gère pas correctement pointer-events:none,
  // on ajoute un écouteur pointerenter/pointerleave pour forcer l'animation.
  area.addEventListener('pointerenter', function () {
    // rien à faire : CSS hover gère l'animation
  });

});
