// Mobile nav toggle
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
  
  let startIndex = 0;
  
  function renderTestimonials() {
    const cards = document.getElementById('testimonialCards');
    cards.innerHTML = '';
    for (let i = 0; i < 2; i++) {
      let idx = (startIndex + i) % testimonials.length;
      let t = testimonials[idx];
      cards.innerHTML += `
        <div class="t-card${i === 1 ? ' alt' : ''}">
          <div>${t.text}</div>
          <span class="author">${t.author}</span>
        </div>
      `;
    }
  }
  
  document.getElementById('arrowLeft').onclick = function() {
    startIndex = (startIndex - 1 + testimonials.length) % testimonials.length;
    renderTestimonials();
  };
  document.getElementById('arrowRight').onclick = function() {
    startIndex = (startIndex + 1) % testimonials.length;
    renderTestimonials();
  };
  
  renderTestimonials();

  // FAQ Accordion Logic
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function() {
      const item = this.parentElement;
      const open = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!open) item.classList.add('open');
    });
  });