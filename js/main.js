(function ($) {
  "use strict";

  window.odometerOptions = {
    auto: false, // Don't automatically initialize everything with class 'odometer'
    selector: ".my-numbers", // Change the selector used to automatically find things to be animated
    format: "(,ddd).dd", // Change how digit groups are formatted, and how many digits are shown after the decimal point
    duration: 500, // Change how long the javascript expects the CSS animation to take
    theme: "car", // Specify the theme (if you have more than one theme css file on the page)
    animation: "count", // Count is a simpler animation method which just increments the value,
    // use it when you're looking for something more subtle.
  };
  var counter = function () {
    $("#section-counter, .hero-wrap, .ftco-counter").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          var comma_separator_number_step =
            $.animateNumber.numberStepFactories.separator(",");
          $(".number").each(function () {
            var $this = $(this),
              num = $this.data("number");
            console.log(num);
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step,
              },
              1500
            );
          });
        }
      },
      { offset: "95%" }
    );
  };
  counter();

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner(0);

  var counter = function () {
    $("#section-counter, .hero-wrap, .ftco-counter").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          var comma_separator_number_step =
            $.animateNumber.numberStepFactories.separator(",");
          $(".number").each(function () {
            var $this = $(this),
              num = $this.data("number");
            console.log(num);
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step,
              },
              1500
            );
          });
        }
      },
      { offset: "95%" }
    );
  };
  counter();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".navbar").addClass("sticky-top shadow-sm");
    } else {
      $(".navbar").removeClass("sticky-top shadow-sm");
    }
  });

  // Hero Header carousel
  $(".header-carousel").owlCarousel({
    animateOut: "fadeOut",
    items: 1,
    margin: 0,
    stagePadding: 0,
    autoplay: true,
    smartSpeed: 500,
    dots: true,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
  });

  // attractions carousel
  $(".blog-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: false,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="fa fa-angle-right"></i>',
      '<i class="fa fa-angle-left"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  // testimonial carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="fa fa-angle-right"></i>',
      '<i class="fa fa-angle-left"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 5,
    time: 2000,
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });
})(jQuery);

const postDetails = document.querySelector(".post-details");
const postSidebar = document.querySelector(".post-sidebar");
const postSidebarContent = document.querySelector(".post-sidebar > div");

const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
  triggerElement: postSidebar,
  triggerHook: 0,
  duration: getDuration,
}).addTo(controller);

if (window.matchMedia("(min-width: 768px)").matches) {
  scene.setPin(postSidebar, { pushFollowers: false });
}

// in your projects, you might want to debounce resize event for better performance
window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 768px)").matches) {
    scene.setPin(postSidebar, { pushFollowers: false });
  } else {
    scene.removePin(postSidebar, true);
  }
});

function getDuration() {
  return postDetails.offsetHeight - postSidebarContent.offsetHeight;
}
