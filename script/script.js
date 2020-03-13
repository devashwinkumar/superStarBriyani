$(document).ready(function() {
  //Hamburger menu styling
  $(".hamburger").hover(function() {
    $(".side-nav ").addClass("open");
  });
  $("section").hover(function() {
    $(".side-nav ").removeClass("open");
  });

  $("div[data-animation=animation_blocks]").each(function() {
    var i = 0;
    $(this)
      .find(".lec_icon_box, .skill-bar-content, .lec_anim_box")
      .each(function() {
        $(this).css("transition-delay", "0." + i + "s");
        i++;
      });
  });
});
