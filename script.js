// Ano dinâmico no rodapé
document.getElementById('year').textContent = new Date().getFullYear();

// Logo/marca sempre volta ao topo da página
const brandHome = document.getElementById('brandHome');
brandHome.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  history.replaceState(null, '', window.location.pathname + window.location.search);
});

// Menu mobile
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Header com sombra ao rolar
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10 ? '0 4px 20px rgba(15,34,71,.08)' : 'none';
});

// Accordion FAQ
document.querySelectorAll('.accordion__item').forEach(item => {
  const trigger = item.querySelector('.accordion__trigger');
  const panel = item.querySelector('.accordion__panel');

  trigger.addEventListener('click', () => {
    const isOpen = item.classList.contains('is-open');

    document.querySelectorAll('.accordion__item.is-open').forEach(openItem => {
      if (openItem !== item) {
        openItem.classList.remove('is-open');
        openItem.querySelector('.accordion__panel').style.maxHeight = null;
      }
    });

    if (isOpen) {
      item.classList.remove('is-open');
      panel.style.maxHeight = null;
    } else {
      item.classList.add('is-open');
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});
