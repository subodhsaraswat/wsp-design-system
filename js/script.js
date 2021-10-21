function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
$(document).ready(function () {
  $(".wsp-navbar-vertical li > a").on("click", function() {
    $(".wsp-navbar-vertical").find(".active").removeClass("active");
    $(this).addClass("active");
    $(".wsp-navbar-vertical").find(".wsp-submenu").slideUp(500); /* close submenu */
    $(this).next(".wsp-submenu").slideDown(500); /*display submenu */
  });
});