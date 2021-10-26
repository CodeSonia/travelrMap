/**Enables dark mode feature */

function darkMode() {
  //use jQuery to target switch
  $(".inner-switch").on("click", function () {
    //simple if statement

    /* Remove dark mode if dark mode toggle is off, else 
    dark mode will come back on */
    if ($("html").hasClass("dark")) {
      $("html").removeClass("dark");
      $(".inner-switch").text("OFF");
    } else {
      $("html").addClass("dark");
      $(".inner-switch").text("ON");

      //Create a new element and add the stylesheet
      const link = document.createElement("link");

      // add dark.css
      link.rel = "stylesheet";
      link.href = "dark.css";

      // Append link element to HTML head
      head.appendChild(link);
    }
  });
}

//Call on the function - this is so it can be used on other pages
darkMode();