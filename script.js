$(function(){
  $('.corona').on('click', function(){
    $('.mask').css('display', 'flex')
    $('body').css('overflow-y', 'hidden')
  });
  $('.mask-close').on('click', function(){
    $('.mask').css('display', 'none')
    $('body').css('overflow-y', 'scroll')
  });


  var topBtn = $('.video');
  topBtn.show();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
  if ($(this).scrollTop() < 900) {
  //ボタンの表示方法
  topBtn.fadeIn();
  } else {
  //ボタンの非表示方法
  topBtn.fadeOut();
  }
});
});



window.onload = function () {
    autoScroll();
}
var $scrollY = 0;
function autoScroll() {
    var $sampleBox = document.getElementById( "scroll" );
    $sampleBox.scrollLeft = ++$scrollY;
    if( $scrollY < $sampleBox.scrollWidth - $sampleBox.clientWidth ){
        setTimeout( "autoScroll()", 60 );
    }else{
        $scrollY = 0;
        $sampleBox.scrollLeft = 0;
        setTimeout( "autoScroll()", 60 );
    }
}
