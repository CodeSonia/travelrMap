// initialise emailjs
emailjs.init('user_jmfdV5khb1wzaP9YA1uIe');

/** Clear input fields once email has been sent */
function clearInput() {
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

    // first paramater: service ID
    // second parameter: template ID 
    // IDs from template set-up on emailJS
    emailjs.send('service_ce0ljok', 'template_yy68wjb', templateParams)
      .then(function (response) {
        console.log('Enquiry Sent to TravelrMap!');

        //call clearInput function
        clearInput();
        
        //show modal
        $(".modal").modal('show');
 
        // Close modal on button click
        $(".btn").click(function(){
            $(".modal").modal('hide');
        });

        //Error
      }, function (error) {
        console.log('FAILED...', error);
        alert("Uh oh! That didn't work! Please try again")
      });
  });
})