'use strict';

(function () {

  var sliderTrainersBlock = document.querySelector('.trainers__slider');

  if (sliderTrainersBlock) {
    sliderTrainersBlock = new window.Swiper('.trainers__slider-wrapper', {
      loop: true,
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40,
      navigation: {
        nextEl: '.trainers__btn--next',
        prevEl: '.trainers__btn--prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30
        },
        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 40
        }
      }
    });
  }
})();
