document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  const wrapper = document.querySelector('.fade-wrapper');

  // Esperar a que todo cargue (imágenes, scripts, etc.)
  window.addEventListener('load', () => {
    loader.style.display = 'none';
    wrapper.style.display = 'block';

    // Transición suave al mostrar contenido
    setTimeout(() => {
      wrapper.classList.add('fade-in');
    }, 10);
  });

  // Fade-out al navegar a otra página
  document.querySelectorAll('a').forEach(link => {
    const href = link.getAttribute('href');
    const target = link.getAttribute('target');

    if (href && !href.startsWith('#') && target !== '_blank') {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        wrapper.classList.remove('fade-in');
        wrapper.classList.add('fade-out');

        setTimeout(() => {
          window.location.href = href;
        }, 200);
      });
    }
  });
});
