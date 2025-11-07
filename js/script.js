const navToggle = document.querySelector('.nav__toggle--btn');
const mainNav = document.querySelector('.main__nav');
const overlay = document.querySelector('.overlay');

const toggleMenu = () => {
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';

  navToggle.setAttribute('aria-expanded', !isExpanded);

  mainNav.classList.toggle('open');
  overlay.classList.toggle('active');

  console.log(isExpanded);
};

navToggle.addEventListener('click', toggleMenu);

overlay.addEventListener('click', toggleMenu);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mainNav.classList.contains('open')) {
    toggleMenu();
  }
});
