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

// Code to check the error states in the contact form
const contactForm = document.querySelector('.form--contact');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = contactForm['name'].value;
  const email = contactForm['email'].value;
  const message = contactForm['message'].value;

  console.log(name);

  if (name === '') {
    addErrorTo('name', 'This field is required');
  } else {
    removeErrorFrom('name');
  }

  if (email === '') {
    addErrorTo('email', 'Please use a valid email address');
  } else if (!isValid(email)) {
    addErrorTo('email', 'Email is not valid');
  } else {
    removeErrorFrom('email');
  }

  if (message === '') {
    addErrorTo('message', 'This field is required');
  } else {
    removeErrorFrom('message');
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
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
