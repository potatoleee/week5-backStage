"use strict";

$(function () {
  $('.btn__expand ').on('click', function (e) {
    $('.btn__expand span ').toggleClass('open'); // $('.expand__content').slideToggle('slow');

    $('.expand__content').toggleClass('open');
  });
});
//# sourceMappingURL=all.js.map
