// scripts/exercice4.js
// Commentaires en français — comportement accessible et examen-friendly

document.addEventListener('DOMContentLoaded', function () {
  // éléments
  const menu = document.getElementById('mainNav');
  const toggle = document.getElementById('menuToggle');
  const subToggles = document.querySelectorAll('.sub-toggle');

  // --- 1) bouton mobile : ouvre/ferme le menu ---
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      // classes visuelles
      if (!expanded) menu.classList.add('open');
      else menu.classList.remove('open');
    });
  }

  // --- 2) sous-menus : toggle accessible ---
  subToggles.forEach(btn => {
    // chaque bouton contrôle un <ul id="..."> via aria-controls
    const subId = btn.getAttribute('aria-controls');
    const sub = document.getElementById(subId);

    // fonction d'ouverture/fermeture
    function toggleSub(open) {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';
      const willOpen = typeof open === 'boolean' ? open : !isOpen;
      btn.setAttribute('aria-expanded', String(willOpen));
      if (willOpen) {
        btn.parentElement.classList.add('open');
        if (sub) { sub.hidden = false; }
      } else {
        btn.parentElement.classList.remove('open');
        if (sub) { sub.hidden = true; }
      }
    }

    // clic souris
    btn.addEventListener('click', function (e) {
      e.preventDefault(); // empêcher focus inattendu
      toggleSub();
    });

    // clavier : Entrée ou Espace ouvrent/ferment
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        toggleSub();
      }
    });
  });

  // --- 3) close all submenus on click outside (politesse UX) ---
  document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      // fermer tous les sous-menus
      subToggles.forEach(btn => {
        btn.setAttribute('aria-expanded', 'false');
        const sid = btn.getAttribute('aria-controls');
        const s = document.getElementById(sid);
        if (s) s.hidden = true;
        btn.parentElement.classList.remove('open');
      });
      // et fermer menu mobile si ouvert
      if (menu.classList.contains('open')) menu.classList.remove('open');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // --- 4) progressive enhancement : si JS absent, laisser les <ul> visibles ---
  // (ici on assume JS présent, rien à faire — bonne pratique : en HTML, <ul> peut être visible par défaut)
});

