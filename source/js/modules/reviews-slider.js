'use strict';

(function () {

  var sliderReviewsBlock = document.querySelector('.reviews__slider');

  if (sliderReviewsBlock) {
    sliderReviewsBlock = new window.Swiper('.reviews__wrapper', {
      loop: true,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
      navigation: {
        nextEl: '.reviews__btn--next',
        prevEl: '.reviews__btn--prev',
      },
    });
  }
})();
