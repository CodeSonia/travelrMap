//added jQuery tooltip on map filter
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

//selecting filters and changing backgrounds
function selectFilter(id) {
  const filter = document.getElementById(id);
  
  if (filter.classList.contains('active')) {
    filter.classList.remove('active');
  } else {
    filter.classList.add('active');
  }
  
  initMap(15);
}
