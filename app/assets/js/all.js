$(function() {

  $('.btn__expand ').on('click',function(e){
    $('.btn__expand span ').toggleClass('open');
    $('.expand__content').slideToggle('slow');

  })

});