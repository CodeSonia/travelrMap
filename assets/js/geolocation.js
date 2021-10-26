/* Credit to https://stackoverflow.com/questions/6797569/get-city-name-using-geolocation */

//Declare location variable & retrieve from html
const x = document.getElementById("user-x");

/**Allows to determine user location using Geolocation API */
function getLocation(){
    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
    else{
        x.innerHTML="Unforunately, your browser does not enable this service!";
    }
}

/**Get user lat & long position */
function showPosition(position){
    lat=position.coords.latitude;
    lon=position.coords.longitude;
    displayLocation(lat,lon);
}

/**Switch statement to show different errors below */
function showError(error){
    switch(error.code){
      // Permission not enabled by user
        case error.PERMISSION_DENIED:
            alert("That's fine! You do not need to share your location with us :)")
        break;
        // Unable to locate position
        case error.POSITION_UNAVAILABLE:
            alert("Unfortunately, we're unable to locate your location :(")
        break;
        // Timer of callback function. Ran out of time
        case error.TIMEOUT:
            alert("Oh no! It looks like the request timed out :(. Please try again!")
        break;
        //Unable to identify error
        case error.UNKNOWN_ERROR:
            alert("Oh no! Please try again.")
        break;
    }
}

/** Enables user to get some interactivity enabling the application to find out where their location is */
function displayLocation(latitude,longitude){

  //Declare geocoder variable
  let geocoder;
  geocoder = new google.maps.Geocoder();

  //Obtain the lat & long coordinates from google maps
  const latlng = new google.maps.LatLng(latitude, longitude);

  // Using geocoder API from Google Places
  geocoder.geocode(
      {'latLng': latlng}, 
      
      function(results, status) {

      //First determine if user is allowing us to get their location
          if (status == google.maps.GeocoderStatus.OK) {
              if (results[0]) {

                // Getting the below address details
                  const add = results[0].formatted_address ;
                  const value = add.split(",");

                  count=value.length;
                  country=value[count-1];
                  state=value[count-2];
                  city=value[count-3];

                  // Using country as count/state/city could be too evasive in terms of privacy
                  //x.innerHTML = `<p>You're in ${country}!</p>`
                  alert(`You're in${country}!`);
                  
              }

              //If we're unable to locate the user's location
              else  {
                   alert(`Sorry! We can't get your address :(. Please try again!`);
              }
          }
          else {
              alert(`Unfortunately, there is a problem with with the service. ${status}`);
          }
      }
  );
}