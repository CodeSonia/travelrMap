// initialise emailjs
emailjs.init('user_jmfdV5khb1wzaP9YA1uIe');


//adapted code from emailJS to use jQuery selectors
$(document).ready(function() {
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
      .then(function () {
        console.log('Enquiry Sent to TravelrMap!');
      }, function (error) {
        console.log('FAILED...', error);
      });
  });
})
