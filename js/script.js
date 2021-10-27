// Tab
$(document).ready(function () {
  $(".wsp-navbar-vertical li > a").on("click", function () {
    $(".wsp-navbar-vertical").find(".active").removeClass("active");
    $(this).addClass("active");
    $(".wsp-navbar-vertical").find(".wsp-submenu").slideUp(500); /* close submenu */
    $(this).next(".wsp-submenu").slideDown(500); /*display submenu */
  });
   // close Alert
  $('.wsp-close').on("click", function () {
    $(this).parents('.wsp-alert').fadeOut(300);
  });
  // open Left Drawer
  $("#openLeftDrawer").click(function(){
    $("#leftDwawer").toggle(300);
    $(this).text($(this).text() == 'Open Left Drawer' ? 'Close Left Drawer' : 'Open Left Drawer');
  });
  $("#closeLeftDrawer").click(function(){
    $("#leftDwawer").hide(200);
    $("#openLeftDrawer").text($("#openLeftDrawer").text() == 'Open Left Drawer' ? 'Close Left Drawer' : 'Open Left Drawer');
  });
  // open Right Drawer
  $("#openRightDrawer").click(function(){
    $("#rightDwawer").toggle(300);
    $(this).text($(this).text() == 'Open Right Drawer' ? 'Close Right Drawer' : 'Open Right Drawer');
  });
  $("#closeRightDrawer").click(function(){
    $("#rightDwawer").hide(200);
    $("#openRightDrawer").text($("#openRightDrawer").text() == 'Open Right Drawer' ? 'Close Right Drawer' : 'Open Right Drawer');
  });
});

