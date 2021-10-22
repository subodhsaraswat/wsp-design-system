// Tab
$(document).ready(function () {
  $(".wsp-navbar-vertical li > a").on("click", function () {
    $(".wsp-navbar-vertical").find(".active").removeClass("active");
    $(this).addClass("active");
    $(".wsp-navbar-vertical").find(".wsp-submenu").slideUp(500); /* close submenu */
    $(this).next(".wsp-submenu").slideDown(500); /*display submenu */
  });
  $('.wsp-close').on("click", function () {
    $(this).parents('.wsp-alert').fadeOut(300);
  });
});

