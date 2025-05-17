
document.getElementById('navToggle').onclick = function() {
    document.querySelector('.nav-links').classList.toggle('open');
  };

  const testimonials = [
    {
      text: "shopTena makes shopping so easy! I found all my favorite brands in one place and the delivery was super fast.",
      author: "- Alice M., Nairobi"
    },
    {
      text: "The deals on shopTena are unbeatable. I always check here first for electronics and fashion. Highly recommended!",
      author: "- Brian K., Mombasa"
    },
    {
      text: "Customer support is amazing and the checkout process is smooth. shopTena is my go-to for online shopping.",
      author: "- Cynthia W., Kisumu"
    },
    {
      text: "I love the variety on shopTena. Groceries, gadgets, and more-all delivered to my door. Five stars!",
      author: "- David O., Eldoret"
    }
  ];
  
 let currentLang = 'en';

function updateContent(lang) {
  fetch('translations.json')
    .then(res => res.json())
    .then(trans => {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (trans[lang][key]) {
          el.innerText = trans[lang][key];
        }
      });

      // Update price and date
      document.getElementById('price').innerText = "$9.99";
      document.getElementById('date').innerText = new Date().toLocaleDateString(lang);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  updateContent(currentLang);

  // Language dropdown listener
  const langSelector = document.getElementById('language-select');
  if (langSelector) {
    langSelector.addEventListener('change', (e) => {
      currentLang = e.target.value;
      updateContent(currentLang);
    });
  }
});
