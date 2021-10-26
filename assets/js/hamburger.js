$(document).ready(function() {
  // Use jQuery to target .hamburger
  $(".hamburger").click(function() {
    // use jQuery toggleClass to toggle between add and removing one class
    $(".hamburger").toggleClass("is-active");
  });

  /* target navbar items and when a user clicks on it, it'll then close the hamburger icon*/
  $(".navbar-nav li a").on("click", function(){
    $(".hamburger").click();
  });
});

