'use strict';
(function () {
  // Слайдер серивисов
  var membershipBlock = document.querySelector('.membership');

  if (membershipBlock) {
    var membershipTab = membershipBlock.querySelectorAll('.membership__toggle');
    var membershipSlide = membershipBlock.querySelectorAll('.membership__rates');
    var allMembershipTabs = Array.prototype.slice.call(membershipTab);

    allMembershipTabs.forEach(function (button, n) {
      function onMembershipBtnClick() {
        for (var i = 0; i < membershipSlide.length; i++) {
          membershipSlide[i].classList.remove('membership__rates--active');
          allMembershipTabs[i].classList.remove('membership__toggle--active');
        }
        membershipTab[n].classList.add('membership__toggle--active');
        membershipSlide[n].classList.add('membership__rates--active');
      }

      button.addEventListener('click', onMembershipBtnClick);
    });
  }
})();

'use strict';

(function () {

  var sliderTrainersBlock = document.querySelector('.trainers__slider');

  if (sliderTrainersBlock) {
    sliderTrainersBlock = new Swiper('.trainers__slider-wrapper', {
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
