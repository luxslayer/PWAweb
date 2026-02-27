//Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./serviceworker.js')
      .then(reg => console.log('Service Worker registrado', reg))
      .catch(err => console.error('Error SW', err));
  });
}

// Animación scroll
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});
