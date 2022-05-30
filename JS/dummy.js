$(function () {
  var $header = $("#header");
  $(window).on("load scroll", function () {
    var value = $(this).scrollTop();
    if (value > 0) { //スクロールしたら.scroll付与
      $header.addClass("scroll");
    } else {
      $header.removeClass("scroll");
    }
  });
});
