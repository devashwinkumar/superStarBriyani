$(document).ready(function() {
  //Hamburger menu styling
  $(".hamburger").hover(function() {
    $(".side-nav ").addClass("open");
  });
  $("section").hover(function() {
    $(".side-nav ").removeClass("open");
  });

  function resizeForm() {
    var width =
      window.innerWidth > 0
        ? window.innerWidth
        : document.documentElement.clientWidth;
    if (width > 1100) var s = skrollr.init();
  }
  window.onresize = resizeForm;
  resizeForm();

  $(".nav-item").click(function() {
    $("a.active").removeClass("active");
    $(this).addClass("active");
  });
});

var heroHeight = $(".hero-landing").innerHeight();
var footPosition = $("footer").offset().top;

$(document).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= heroHeight && scroll < footPosition) {
    $(".hamburger").addClass("dark");
  } else {
    $(".hamburger").removeClass("dark");
  }
  // );
});
