//  Slide home
//  const sliderTrack = document.querySelector('.hero-slider-track');
//   const totalSlides = document.querySelectorAll('.slide').length;
//   let currentIndex = 0;

//   function slideToNext() {
//      currentIndex = (currentIndex + 1) % totalSlides;
//     sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
//   }
   

  setInterval(slideToNext, 5000);

  const hamburger = document.querySelector('#hamburger-menu');
  const navMenu = document.querySelector('.navbar-nav');


  hamburger.addEventListener('click', function (){
    navMenu.classList.toggle('active');
  });
