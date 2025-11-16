const navToggle = document.querySelector('.nav__toggle--btn');
const mainNav = document.querySelector('.main__nav');
const overlay = document.querySelector('.overlay');
const quoteToggleBtns = document.querySelectorAll('.director__btn');
const quote = document.querySelector('.director__card');

const toggleMenu = () => {
  const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';

  navToggle.setAttribute('aria-expanded', String(!isExpanded));

  mainNav.classList.toggle('open');
  overlay.classList.toggle('active');
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

    button.setAttribute('aria-expanded', String(!isExpanded));
    const card = button.closest('.director__card');
    card.classList.toggle('show');
  });
});

// Code to check the error states in the contact form
const contactForm = document.querySelector('.form--contact');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = contactForm.elements.name.value;
  const email = contactForm.elements.email.value;
  const message = contactForm.elements.message.value;

  let hasErrors = false;

  if (name === '') {
    addErrorTo('name', 'This field is required');
    hasErrors = true;
  } else {
    removeErrorFrom('name');
  }

  if (email === '') {
    addErrorTo('email', 'Please use a valid email address');
    hasErrors = true;
  } else if (!isValid(email)) {
    addErrorTo('email', 'Email is not valid');
    hasErrors = true;
  } else {
    removeErrorFrom('email');
  }

  if (message === '') {
    addErrorTo('message', 'This field is required');
    hasErrors = true;
  } else {
    removeErrorFrom('message');
  }

  if (!hasErrors) {
    contactForm.submit();
  }
});

function addErrorTo(field, message) {
  const formGroup = contactForm[field].parentNode;
  formGroup.classList.add('error');

  const contactFormError = formGroup.querySelector('.error--message');
  contactFormError.innerText = message;
}

function removeErrorFrom(field) {
  const formGroup = contactForm[field].parentNode;
  formGroup.classList.remove('error');

  const contactFormError = formGroup.querySelector('.error--message');
  contactFormError.innerText = '';
}

function isValid(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
