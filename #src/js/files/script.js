
window.onload = function () {
	document.addEventListener("click", documentActions)

	// Actions (делегирование события click)
	function documentActions(e) {
		const targetElement = e.target
		if (window.innerWidth > 768 && isMobile.any()) {
			if (targetElement.classList.contains('menu__arrow')) {
				//_removeClasses(document.querySelectorAll('.menu__item._hover'), "_hover")
				targetElement.closest('.menu__item').classList.toggle('_hover')
			}
			if (!targetElement.closest('.menu__item') && document.querySelectorAll('.menu__item._hover').length > 0) {
				_removeClasses(document.querySelectorAll('.menu__item._hover'), "_hover")
			}
		}
		if (targetElement.classList.contains('search-form__icon')) {
			document.querySelector('.search-form').classList.toggle('_active')
		} else if (!targetElement.closest('.search-form') && document.querySelector('.search-form._active')) {
			document.querySelector('.search-form').classList.remove('_active')
		}
	}

	//Header
	const headerElement = document.querySelector('.header');

	const callback = function (entries, observer) {
		if (entries[0].isIntersecting) {
			headerElement.classList.remove('_scroll');
		} else {
			headerElement.classList.add('_scroll');
		}
	}

	const headerObserver = new IntersectionObserver(callback);
	headerObserver.observe(headerElement);
}



		// let menuItem = document.querySelectorAll(".menu__arrow");

		// for (let i = 0; i < menuItem.length; i++) {

		// 	if (menuItem[i] === targetElement) {
		// 		targetElement.closest('.menu__item').classList.toggle('_hover')

		// 		console.log(targetElement.closest('.menu__item').nextSibling);
		// 	} else {
				// menuItem[i].previousElementSibling.classList.remove('_hover')
				//menuItem[i].className = menuItem[i].className.remove("_hover");

