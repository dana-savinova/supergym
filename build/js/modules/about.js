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
