$(document).ready(function() {
  // Use jQuery to target .hamburger
  $(".hamburger").click(function() {
    // use jQuery toggleClass to toggle between add and removing one class
    $(".hamburger").toggleClass("is-active");
  });
});