// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

function initMap(zoom = 3) {
  const location = getActiveCityLocation();

  // get map
  const map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom,
    mapId: "8d193001f940fde3",
  });

  // Create the places service.
  const service = new google.maps.places.PlacesService(map);
  let getNextPage;
  const moreButton = document.getElementById("more");

  /** If button "load more results" is requsted, it'll load more */
  moreButton.onclick = function () {
    moreButton.disabled = true;
    if (getNextPage) {
      getNextPage();
    }
  };

  //function being stored into a variable
  const filters = getFilterTypes();
  const searchQuery = getSearchQuery();

  const request = {
    location,
    radius: '3000',
    query: searchQuery,
    type: filters
  }

  // Perform a nearby search.
  service.textSearch(request,
    (results, status, pagination) => {
      if (status !== "OK" || !results) return;

      addPlaces(results, map);
      moreButton.disabled = !pagination || !pagination.hasNextPage;
      if (pagination && pagination.hasNextPage) {
        getNextPage = () => {
          // Note: nextPage will call the same handler function as the initial call
          pagination.nextPage();
        };
      }
    }
  );
}

/*Gets the input type from user & it'll return closest match to query i.e. gh will produce places starting with gh or similar*/
function getSearchQuery() {
  return document.getElementById('attractionSearch').value; 
}

/**If user input is empty (null) then an alert will inform user to input something */
function isEmpty() {
  if (document.getElementById("attractionSearch").value=== "") {
    alert("Oops! You need to type something to get results. Please try again!");
    return false;
  }
  return true;
}


/**Enables you to click on a respective city under a country and show the relevant information */
function getActiveCityLocation() {
  const citiesDom = document.getElementsByClassName('city');
  //Loop through different cities available
  for (let i = 0; i < citiesDom.length; i++) {
    const cityDom = citiesDom[i];

    if (cityDom.classList.contains('active')) {
      const cities = [];
      COUNTRIES.forEach((country) => cities.push(...country.cities));
      const activeCity = cities.find((city) => city.name === cityDom.id);

      return activeCity.location;
    }
  }

  return { lat: 0.00, lng: 0.00 }
}

// obtaining filters
function getFilterTypes() {
  const activeFilters = [];
  const filters = document.getElementsByClassName('map-filter');

  //iterating each filter option available
  for (let i=0; i<filters.length; i++) {
    const filter = filters[i];

    if (filter.classList.contains('active')) {
      activeFilters.push(filter.id);
    }
  }

  return activeFilters.join("|");
}

/**allows you add places in respect to their location */
function addPlaces(places, map) {
  removeExistingPlaces();

  const placesList = document.getElementById("places");

  for (const place of places) {
    if (place.geometry && place.geometry.location) {
      const image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25),
      };

      new google.maps.Marker({
        map,
        icon: image,
        title: place.name,
        position: place.geometry.location,
      });

      const li = document.createElement("li");
      li.classList.add('place');

      li.textContent = place.name;
      placesList.appendChild(li);

      li.addEventListener("click", () => {
        map.setCenter(place.geometry.location);
      });
    }
  }
}

/**Once a user clicks on a filter for a country, it'll remove the results in respect to clicking on another city and filter */
function removeExistingPlaces() {
  const places = document.getElementsByClassName('place');
  const itemsToRemove = places.length;

  if (!places.length) return;

  for (let i = 0; i < itemsToRemove; i++) {
    places[0].remove();
  }
}




