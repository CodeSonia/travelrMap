// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
function initMap(zoom = 3) {
  const location = getActiveCityLocation();

  const map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom,
    mapId: "8d193001f940fde3",
  });

  // Create the places service.
  const service = new google.maps.places.PlacesService(map);
  let getNextPage;
  const moreButton = document.getElementById("more");

  moreButton.onclick = function () {
    moreButton.disabled = true;
    if (getNextPage) {
      getNextPage();
    }
  };

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

function getSearchQuery() {
  return document.getElementById('attractionSearch').value;
}

function getActiveCityLocation() {
  const citiesDom = document.getElementsByClassName('city');

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

function getFilterTypes() {
  const activeFilters = [];
  const filters = document.getElementsByClassName('map-filter');

  for (let i=0; i<filters.length; i++) {
    const filter = filters[i];

    if (filter.classList.contains('active')) {
      activeFilters.push(filter.id);
    }
  }

  return activeFilters.join("|");
}

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

function removeExistingPlaces() {
  const places = document.getElementsByClassName('place');
  const itemsToRemove = places.length;

  if (!places.length) return;

  for (let i = 0; i < itemsToRemove; i++) {
    places[0].remove();
  }
}

