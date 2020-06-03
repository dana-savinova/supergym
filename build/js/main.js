'use strict';
(function () {
  var membershipBlock = document.querySelector('.membership');

  if (membershipBlock) {
    var membershipTab = membershipBlock.querySelectorAll('.membership__toggle');
    var membershipSlide = membershipBlock.querySelectorAll('.membership__rates');
    var allMembershipTabs = Array.prototype.slice.call(membershipTab);

    allMembershipTabs.forEach(function (button, n) {
      function onMembershipBtnClick(evt) {
        evt.preventDefault();
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
  var userPhoneInput = document.querySelector('input[type="tel"]');

  if (userPhoneInput) {
    var maskOptions = {
      mask: '+{7}(000)000-00-00'
    };

    window.mask = new window.IMask(userPhoneInput, maskOptions);
  }

})();

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

'use strict';

(function () {
  var heroBtn = document.querySelector('.hero__btn');
  var membershipBlock = document.querySelector('.membership');
  var moveTo = new window.MoveTo();

  if (heroBtn && membershipBlock) {
    heroBtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      moveTo.move(membershipBlock);
    });
  }
})();

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
