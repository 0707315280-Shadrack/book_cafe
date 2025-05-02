
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    item.classList.toggle('open');

  
    faqItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove('open');
      }
    });
  });
});


const contactForm = document.getElementById('contact-form');
const messageBox = document.getElementById('message-box');

contactForm?.addEventListener('submit', function (e) {
  e.preventDefault();
  messageBox.innerText = "Thanks for your message! We'll get back to you soon.";
  contactForm.reset();
});
