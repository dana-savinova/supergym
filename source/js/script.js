'use strict';
(function () {
  // Слайдер абонементов
  var membershipBlock = document.querySelector('.membership');

  if (membershipBlock) {
    var allMembershipTabs = Array.prototype.slice.call(membershipBlock.querySelectorAll('.membership__toggle'));
    var membershipSlide = membershipBlock.querySelectorAll('.membership__rates');
    var membershipTab = membershipBlock.querySelectorAll('.membership__toggle');
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
      button.addEventListener('focus', onMembershipBtnClick);
    });
  }
})();
