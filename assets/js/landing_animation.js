//call on animation to load from lottie files
const animation =bodymovin.loadAnimation({
  container: document.getElementById('landingPageAnimation'),
  path: 'https://assets9.lottiefiles.com/private_files/lf30_5i5tlydx.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: "Landing Animation"
})