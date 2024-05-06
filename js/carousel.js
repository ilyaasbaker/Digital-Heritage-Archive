document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slider-header img');
    let currentSlide = 0;
  
    // Function to show slide
    function showSlide(index) {
      slides.forEach((slide) => slide.classList.remove('active'));
      slides[index].classList.add('active');
    }
  
    // Function to switch to next slide
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    // Start slider
    setInterval(nextSlide, 3000); // Change slide every 3 seconds
  });
  