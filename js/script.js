const navigation = document.querySelector('.navigation')
const hamburgerBtn = document.querySelector('.container')
const navItems = document.querySelectorAll('.navigation__item')
//nav handler
const navHandler = () => {
	navigation.classList.toggle('navigation--toggle-nav')
	navItems.forEach(item => {
		item.addEventListener('click', () => {
			navigation.classList.remove('navigation--toggle-nav')
			hamburgerBtn.classList.remove('active')
		})
	})
}

hamburgerBtn.addEventListener('click', navHandler)
AOS.init();

//accordion
const accordion = document.querySelectorAll('.accordion__box')

accordion.forEach(item => {
	item.addEventListener('click', () => {
		item.classList.toggle('active')
		console.log(item);
	})
})
// contact map leaflet
var map = L.map('map').setView([21.24903, -157.95486], 7);

L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=CMcrJPUIbvHEfLRgwdus',{
	tileSize: 512,
	zoomOffset: -1,
	minZoom: 1,
	attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
	crossOrigin: true
  }).addTo(map);

  //GSAP OBSERVER

gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll('.section-gsap');

// sections.forEach(section => {
//   gsap.fromTo(section.children, {y: '+=100', opacity: 0}, {y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'easeInOut', scrollTrigger: {
//   trigger: section,
//   start: 'top 50%',
// }});  
// });