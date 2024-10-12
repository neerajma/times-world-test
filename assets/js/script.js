// Header section starts
$(window).on("scroll", function () {
  if ($(window).scrollTop() > 151) {
    $(".tw-header").addClass("sticky");
    $("body").addClass("sticky-soomth");
  } else {
    $(".tw-header").removeClass("sticky");
    $("body").removeClass("sticky-soomth");
  }
});
$(".tw-header__fade").click(function () {
  $(".tw-header__navbar .navbar-collapse").removeClass("show");
  $("body").removeClass("overflow");
});
$(".navbar-toggler").click(function () {
  $("body").addClass("overflow");
});
$(".tw-header__close").click(function () {
  $("body").removeClass("overflow");
});
// Header section ends

// Masthead Banner Slider
$(document).ready(function () {
  $(".tw-main-bg__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    infinite: true,
  });
});

// Promo Slider
$(document).ready(function () {
  $(".tw-promotions__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },

      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
});

// Events Slider
$(document).ready(function () {
  $(".tw-events__slider").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    dots: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },

      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
});
