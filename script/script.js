$(document).ready(function() {
  //Hamburger menu styling
  $(".hamburger").hover(function() {
    $(".side-nav ").addClass("open");
  });
  $("section").hover(function() {
    $(".side-nav ").removeClass("open");
  });
});
