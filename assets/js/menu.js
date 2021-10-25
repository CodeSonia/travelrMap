(function MENU_NAMESPACE() {
  (function buildCountryAccordion() {
    const accordion = document.getElementById("country-accordion");

    COUNTRIES.forEach((country, index) => {
      const accordionItem = document.createElement('div');
      accordionItem.classList.add('accordion-item');

      const header = buildAccordionHeader(country, index);
      accordionItem.appendChild(header);

      const body = buildAccordionBody(country, index);
      accordionItem.appendChild(body);

      accordion.appendChild(accordionItem);
    });
  })();

  function buildAccordionHeader(country, index) {
    const header = document.createElement('h2');
    header.classList.add('accordion-header');
    header.setAttribute('id', `heading${index}`);

    const button = document.createElement('button');
    button.classList.add('accordion-button');

    button.setAttribute('type', 'button');
    button.setAttribute('data-bs-toggle', 'collapse');
    button.setAttribute('data-bs-target', `#collapse${index}`);
    button.setAttribute('aria-expanded', 'true');
    button.setAttribute('aria-controls', `collapse${index}`);
    button.innerText = country.name;

    header.appendChild(button);

    return header;
  }

  function buildAccordionBody(country, index) {
    const body = document.createElement('div');
    body.setAttribute('id', `collapse${index}`);
    body.classList.add('accordion-collapse');
    body.classList.add('collapse');
    body.setAttribute('aria-labelledby', 'heading');
    
    if (index === 0) {
      body.classList.add('show');
    }

    const innerBody = document.createElement('div');
    innerBody.classList.add('accordion-body');

    const cityMenu = buildCityMenu(country);
    innerBody.append(cityMenu);

    body.appendChild(innerBody);

    return body;
  }

  function buildCityMenu(country) {
    const menu = document.createElement('ul');
    menu.classList.add('list-group-flush');

    country.cities.forEach((city) => {
      const item = document.createElement('li');
      item.classList.add('list-group-item');
      item.classList.add('city');
      item.innerText = city.name;
      item.setAttribute('id', city.name)
      item.onclick = selectCity;
      
      menu.appendChild(item);
    });

    return menu;
  }

  function selectCity (event) {
    const allCitiesDom = document.getElementsByClassName('city');

    for (let i = 0; i < allCitiesDom.length; i++) {
      const city = allCitiesDom[i];

      if (city.classList.contains('active')) {
        city.classList.remove('active');
      }
    }

    const activeCity = event.srcElement.id;
    const activeCityDom = document.getElementById(activeCity);
    activeCityDom.classList.add('active');

    /* display filter and search query once a city is selected */
    displaySearchOptions();

    initMap(15);
  }

  function displaySearchOptions() {
    const filterDom = document.getElementById('filterContainer');

    if (filterDom.classList.contains("d-none") ) {
      filterDom.classList.remove("d-none")
    }

    removeHideClassWhereId('filterContainer');
    removeHideClassWhereId('attractionSearchContainer');
  }

  function removeHideClassWhereId(id) {
    const domElement = document.getElementById(id);

    if (!domElement) {
      throw new Error('Tried to remove hide class from dom element that could not be found');
    }

    if (domElement.classList.contains("d-none")) {
      domElement.classList.remove("d-none")
    }
  }
})();

