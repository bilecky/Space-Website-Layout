const navigation = document.querySelector('.navigation')
const hamburgerBtn = document.querySelector('.container')
const navItems = document.querySelectorAll('.navigation__item')
const accordion = document.querySelectorAll('.accordion__box')
const sectionsGSAP = document.querySelectorAll('.section-gsap')
const svg = document.querySelector('svg')
const allSections = document.querySelectorAll('.section')
const header = document.querySelector('header')

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
AOS.init()

//hamburger color changer when section is white

const hamburgerColorHandler = () => {
	const currentSection = window.scrollY
	console.log(currentSection)
	allSections.forEach(section => {
		switch (true) {
			case section.classList.contains('section-white') &&
				section.offsetTop <= currentSection + 130:
				svg.style.stroke = '#7800b4'

				break
			case !section.classList.contains('section-white') &&
				section.offsetTop <= currentSection:
				svg.style.stroke = 'white'
				console.log('gowno')

				break
			case hamburgerBtn.classList.contains('active'):
				svg.style.stroke = 'white'
				break
		}
	})
}

window.addEventListener('scroll', hamburgerColorHandler)
hamburgerBtn.addEventListener('click', hamburgerColorHandler)


//accordion

accordion.forEach(item => {
	item.addEventListener('click', () => {
		item.classList.toggle('active')
		console.log(item)
	})
})
// contact map leaflet
const map = L.map('map').setView([21.24903, -157.95486], 7)

L.tileLayer(
	'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=CMcrJPUIbvHEfLRgwdus',
	{
		tileSize: 512,
		zoomOffset: -1,
		minZoom: 1,
		attribution:
			'\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
		crossOrigin: true,
	}
).addTo(map)

//GSAP OBSERVER

gsap.registerPlugin(ScrollTrigger)

sectionsGSAP.forEach(section => {
	gsap.fromTo(
		section.children,
		{ y: '+=100', opacity: 0 },
		{
			y: 0,
			opacity: 1,
			stagger: 0.2,
			duration: 1,
			ease: 'easeInOut',
			scrollTrigger: {
				trigger: section,
				start: 'top 50%',
			},
		}
	)
})
