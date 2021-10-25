// initialise emailjs
emailjs.init('user_jmfdV5khb1wzaP9YA1uIe');

function clearInput() {
  /*
  $("#fullname").value = "",
  $("#emailaddress").value = "",
  $("#message").value = "";*/

  document.getElementById("name").value = "",
        document.getElementById("emailaddress").value = "",
        document.getElementById("message").value = "";
}



//adapted code from emailJS to use jQuery selectors
$(document).ready(function () {
  $('#contact-form').on('submit', function (event) {

    //prevent any reloads
    event.preventDefault();

    //template paramaters
    const templateParams = {
      "from_name": $("#name").val(),
      "from_email": $("#emailaddress").val(),
      "message": $("#message").val()

    };
    // these IDs from the previous steps
    emailjs.send('service_ce0ljok', 'template_yy68wjb', templateParams)
      .then(function (response) {
        console.log('Enquiry Sent to TravelrMap!');
        clearInput();
        $(".modal").modal('show');
 
        // Close modal on button click
        $(".btn").click(function(){
            $(".modal").modal('hide');
        });
        /*
        $("#success-email").html(`Thank you for your enquiry! We'll aim to get back to you within 24 hours`);*/
      }, function (error) {
        console.log('FAILED...', error);
      });
  });
})