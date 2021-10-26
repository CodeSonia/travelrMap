/* Variable contains country and city's long and lat. This can be updated to add further countries and cities in the future */
const COUNTRIES = [
  {
    name: "United Kingdom",
    cities: [
      {
        name: 'London',
        location: { lat: 51.515419, lng: -0.141099 }
      }, 
      {
        name: 'Manchester',
        location: { lat: 53.478062, lng: -2.244666 }
      }, {
        name: 'Birmingham',
        location: { lat: 52.479740, lng: -1.908484 }
      }, {
        name: "Leeds",
        location: { lat: 53.801277, lng: -1.548567 }
      }, {
        name: "Glasgow",
        location: { lat: 55.860916, lng: -4.251433 }
      }
    ]
  }, {
    name: "Morocco",
    cities: [
      {
        name: "Marrakech",
        location: { lat: 31.628674, lng: -7.992047 },
      }, {
        name: "Fez",
        location: { lat: 34.0181, lng: -5.0078 },
      }, {
        name: "Ouarzazate",
        location: { lat: 30.9335, lng: -6.9370 },
      }, {
        name: "Meknes",
        location: { lat: 33.8730, lng: -5.5407 },
      }, {
        name: "Rabat",
        location: { lat: 33.9716, lng: -6.8498 },
      }
    ]
  }, {
    name: "Turkey",
    cities: [
      {
        name: "Istanbul",
        location: { lat: 41.0082, lng: 28.979530 },
      },
      {
        name: "Antalya",
        location: { lat: 36.549362, lng: 31.996994 },
      }, {
        name: "Bursa",
        location: { lat: 40.1885, lng: 29.074202 },
      }, {
        name: "Sanliurfa",
        location: { lat: 37.158333, lng: 38.791668 },
      }, {
        name: "Izmir",
        location: { lat: 38.423733, lng: 27.142826 },
      }
    ]
  }
];
