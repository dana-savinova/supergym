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
