// Portfolio Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentSlide = 0;
  let autoPlayInterval;

  function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => {
      slide.classList.remove('active');
    });

    // Remove active class from all dots
    dots.forEach(dot => {
      dot.classList.remove('active');
    });

    // Show current slide and activate corresponding dot
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Event listeners
  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
  }

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });

  // Auto-play functionality
  function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoPlay() {
    clearInterval(autoPlayInterval);
  }

  // Start auto-play
  startAutoPlay();

  // Pause auto-play on hover
  const sliderContainer = document.querySelector('.slider-container');
  if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', stopAutoPlay);
    sliderContainer.addEventListener('mouseleave', startAutoPlay);
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  });

  // Initialize first slide
  showSlide(0);
});
// FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;

            // Remove active class from all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Add active class to the clicked FAQ item
            faqItem.classList.add('active');
        });
    });

    // Services interaction
    const serviceCards = document.querySelectorAll('.service-card');
    const previewContents = document.querySelectorAll('.preview-content');

    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const serviceIndex = this.dataset.service;

            // Remove active class from all cards
            serviceCards.forEach(c => c.classList.remove('active'));

            // Add active class to clicked card
            this.classList.add('active');

            // Hide all preview contents
            previewContents.forEach(content => content.classList.remove('active'));

            // Show the corresponding preview content
            const targetPreview = document.querySelector(`.preview-content[data-preview="${serviceIndex}"]`);
            if (targetPreview) {
                targetPreview.classList.add('active');
            }
        });
    });

    
