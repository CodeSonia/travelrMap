let animation =bodymovin.loadAnimation({
  container: document.getElementById('landingPageAnimation'),
  path: 'assets/json/data.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: "Landing Animation"
})