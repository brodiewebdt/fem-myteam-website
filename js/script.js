const navToggle = document.querySelector('.nav__toggle--btn');
const mainNav = document.querySelector('.main__nav');
const overlay = document.querySelector('.overlay');
const quoteToggleBtns = document.querySelectorAll('.director__btn');
const quote = document.querySelector('.director__card');

const toggleMenu = () => {
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';

  navToggle.setAttribute('aria-expanded', !isExpanded);

  mainNav.classList.toggle('open');
  overlay.classList.toggle('active');

  console.log(isExpanded);
};

const toggleQuote = (e) => {
  const button = e.currentTarget;
  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  button.setAttribute('aria-expanded', !isExpanded);

  quote.classList.toggle('show');
};

navToggle.addEventListener('click', toggleMenu);

overlay.addEventListener('click', toggleMenu);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mainNav.classList.contains('open')) {
    toggleMenu();
  }
});

quoteToggleBtns.forEach((button) => {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';

    button.setAttribute('aria-expanded', !isExpanded);
    const card = button.closest('.director__card');
    card.classList.toggle('show');
  });
});
