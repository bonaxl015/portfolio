$(document).ready(function() {

  // close hamburger menu when window is resized more than 550px
  $(window).resize(function() {
    if ($(window).width() > 800) {
      $("#hamburger-menu").hide();
    }
  });

  // toggle menu when clicked
  $("#hamburger-toggle").on("click", function() {
    $("#hamburger-menu").toggle();
  });

  $(".nav-vertical-list").on("click", function() {
    $("#hamburger-menu").toggle();
  });
});