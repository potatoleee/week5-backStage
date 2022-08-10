$(function() {

  $('.btn__expand ').on('click',function(e){
    $('.btn__expand span ').toggleClass('open');
    $('.expand__content').slideToggle();
  

  })
  // select 預設淺灰 點擊後深黑色 start
// 還沒點選時是淺灰色
  var unSelected = "#6C757D";
  // 被點選時是深灰色
  var selected = "#212529"; 

  $("#newAdminSelect").css("color", unSelected);
  $("option").css("color", selected);
  $("select").change(function () {
      var selItem = $(this).val();
      if (selItem == $(this).find('option:first').val()) {
          $(this).css("color", unSelected);
      } else {
          $(this).css("color", selected);
      }
  });
// select 預設淺灰 點擊後深黑色 end

// creditor 套件 start
  ClassicEditor
  .create( document.querySelector( '#editor' ) )
  .catch( error => {
      console.error( error );
  } );
  // creditor 套件 end
});

