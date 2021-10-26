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

  //Click Event
  new ClickEventHandler(map, origin);

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

// Credit to Google POI events
function isIconMouseEvent(e) {
  return "placeId" in e;
}

class ClickEventHandler {
  origin;
  map;
  directionsService;
  directionsRenderer;
  placesService;
  infowindow;
  infowindowContent;
  constructor(map, origin) {
    this.origin = origin;
    this.map = map;
    this.directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer();
    this.directionsRenderer.setMap(map);
    this.placesService = new google.maps.places.PlacesService(map);
    this.infowindow = new google.maps.InfoWindow();
    this.infowindowContent = document.getElementById("infowindow-content");
    this.infowindow.setContent(this.infowindowContent);
    // Listen for clicks on the map.
    this.map.addListener("click", this.handleClick.bind(this));
  }
  handleClick(event) {
    console.log("You clicked on: " + event.latLng);
    // If the event has a placeId, use it.
    if (isIconMouseEvent(event)) {
      console.log("You clicked on place:" + event.placeId);
      // Calling e.stop() on the event prevents the default info window from
      // showing.
      // If you call stop here when there is no placeId you will prevent some
      // other map click event handlers from receiving the event.
      event.stop();
      if (event.placeId) {
        this.calculateAndDisplayRoute(event.placeId);
        this.getPlaceInformation(event.placeId);
      }
    }
  }
  calculateAndDisplayRoute(placeId) {
    const me = this;

    this.directionsService
      .route({
        origin: this.origin,
        destination: { placeId: placeId },
        travelMode: google.maps.TravelMode.WALKING,
      })
      .then((response) => {
        me.directionsRenderer.setDirections(response);
      })
      .catch((e) => window.alert("Directions request failed due to " + status));
  }
  getPlaceInformation(placeId) {
    const me = this;

    this.placesService.getDetails({ placeId: placeId }, (place, status) => {
      if (
        status === "OK" &&
        place &&
        place.geometry &&
        place.geometry.location
      ) {
        me.infowindow.close();
        me.infowindow.setPosition(place.geometry.location);
        me.infowindowContent.children["place-icon"].src = place.icon;
        me.infowindowContent.children["place-name"].textContent = place.name;
        me.infowindowContent.children["place-id"].textContent = place.place_id;
        me.infowindowContent.children["place-address"].textContent =
          place.formatted_address;
        me.infowindow.open(me.map);
      }
    });
  }
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