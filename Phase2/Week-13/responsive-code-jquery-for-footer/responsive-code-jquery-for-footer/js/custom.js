$(".footer-links-wrapper h3").on("click", function () {
  if ($(window).width() <= 768) {
    $(this).toggleClass("expanded");
    $(this).next("ul").slideToggle();
  }
});
