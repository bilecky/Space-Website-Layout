const navigation = document.querySelector('.navigation')
const hamburgerBtn = document.querySelector('.container')
const navItems = document.querySelectorAll('.navigation__item')

const navHandler = () => {
	navigation.classList.toggle('navigation--toggle-nav')
	navItems.forEach(item => {
		item.addEventListener('click', () => {
			navigation.classList.remove('navigation--toggle-nav')
		})
	})
}

hamburgerBtn.addEventListener('click', navHandler)
