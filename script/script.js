$(document).ready(function() {
  //Hamburger menu styling
  $(".hamburger").hover(function() {
    $(".side-nav ").addClass("open");
  });
  $("section").hover(function() {
    $(".side-nav ").removeClass("open");
  });

  var s = skrollr.init();
  $(".nav-item").click(function() {
    $("a.active").removeClass("active");
    $(this).addClass("active");
    var active_section = $(this).attr("href"); //get active section id
    $("html, body").animate(
      {
        //and scroll to the section
        scrollTop: $(active_section).offset().top
      },
      800
    );
  });

  $(document).scroll(function() {
    //get document scroll position
    var position = $(document).scrollTop();
    //get header height
    var header = $("nav").outerHeight();

    //check active section
    $(".section").each(function(i) {
      if ($(this).position().top <= position) {
        $("a.active").removeClass("active");
        $("a")
          .eq(i)
          .addClass("active");
      }
    });
  });
});

// $("a").on("click", function(event) {
//   // Make sure this.hash has a value before overriding default behavior
//   if (this.hash !== "") {
//     // Prevent default anchor click behavior
//     event.preventDefault();

//     // Store hash
//     var hash = this.hash;

//     // Using jQuery's animate() method to add smooth page scroll
//     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//     $("html, body").animate(
//       {
//         scrollTop: $(hash).offset().top
//       },
//       800,
//       function() {
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       }
//     );
//   } // End if
// });
