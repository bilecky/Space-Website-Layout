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


