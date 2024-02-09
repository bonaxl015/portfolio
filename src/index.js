$(document).ready(function() {
  const deviceWidth = $(window).width();
  const deviceHeight = $(window).height();

  if (deviceWidth < 550) {
    $("#nav-expanded").hide();
  } else {
    $("#nav-expanded").show();
  }

  if (deviceWidth < 900) {
    $("#semicircle-bg").hide();
  } else {
    $("#semicircle-bg").show();
  }
});