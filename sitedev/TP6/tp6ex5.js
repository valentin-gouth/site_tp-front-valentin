document.addEventListener('DOMContentLoaded', function () {
  const revealEls = document.querySelectorAll('.reveal');
  const toggleBtn = document.getElementById('toggleAnim');
  const body = document.body;

  const ioOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.15
  };

  function ioCallback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(ioCallback, ioOptions);

  revealEls.forEach((el, i) => {
    if (i % 2 === 1) el.classList.add('delay-1');
    if (i % 3 === 2) el.classList.add('delay-2');
    observer.observe(el);
  });

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const pressed = toggleBtn.getAttribute('aria-pressed') === 'true';
      toggleBtn.setAttribute('aria-pressed', String(!pressed));
      toggleBtn.textContent = pressed ? 'Désactiver animations' : 'Activer animations';
      body.classList.toggle('no-anim');
    });
  }

  if (!('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('in-view'));
  }
});

