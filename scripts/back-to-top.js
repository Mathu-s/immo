// Atelier — bouton "remonter en haut", partagé par toutes les pages.
(function(){
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.setAttribute('aria-label', 'Remonter en haut de la page');
  btn.setAttribute('type', 'button');
  btn.textContent = '↑';
  document.body.appendChild(btn);

  function onScroll(){
    if(window.scrollY > 400){
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }

  btn.addEventListener('click', function(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
