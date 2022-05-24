const navigation = document.querySelector('.navigation')
const hamburgerBtn = document.querySelector('.container')
const navItems = document.querySelectorAll('.navigation__item')
const accordion = document.querySelectorAll('.accordion__box')
const sectionsGSAP = document.querySelectorAll('.section-gsap')
const svg = document.querySelector('svg')
const allSections = document.querySelectorAll('.section')
const header = document.querySelector('header')
const btn_up = document.querySelector('.btn__up')
const footer = document.querySelector('footer')
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

const hamburgerHandler = () => {
	const websiteHeight = document.body.scrollHeight

	const actualScrollValue = window.innerHeight + window.scrollY

	if (
		actualScrollValue == websiteHeight ||
		websiteHeight - 500 < actualScrollValue
	) {
		btn_up.classList.remove('active')
	}

	const currentSection = window.scrollY
	allSections.forEach(section => {
		switch (true) {
			case hamburgerBtn.classList.contains('active'):
				svg.style.stroke = 'white'
				break
			case section.classList.contains('section-white') &&
				section.offsetTop <= currentSection + 130:
				svg.style.stroke = '#7800b4'
				break
			case !section.classList.contains('section-white') &&
				section.offsetTop <= currentSection:
				svg.style.stroke = 'white'
				break

			case currentSection > 360:
				btn_up.classList.add('active')
				break
			case currentSection < 360:
				btn_up.classList.remove('active')
		}
	})
}

window.addEventListener('scroll', hamburgerHandler)
hamburgerBtn.addEventListener('click', hamburgerHandler)
btn_up.addEventListener('click', () => {
	window.scroll({ top: 0, behavior: 'smooth' })
})
//accordion

accordion.forEach(item => {
	item.addEventListener('click', () => {
		item.classList.toggle('active')
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
				start: 'top 60%',
			},
		}
	)
})

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	spaceBetween: 70,
	slidesPerView: 1,
	speed: 1200,

	autoplay: {
		delay: 3500,
		disableOnInteraction: false,
		pauseOnMouseEnter: true,
	},

	// If we need pagination

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	breakpoints: {
		800: {
			slidesPerView: 2,
			spaceBetween: 70,
		},
	},
})
