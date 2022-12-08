window.onload = function () {
	document.addEventListener("click", documentActions);

	function documentActions(e) {
		const targetElement = e.target;

		if (targetElement.classList.contains('search-btn')) {
			document.querySelector('.header').classList.toggle('search-active');
		} else if (!targetElement.closest('.search') && document.querySelector('.search.search-active')) {
			document.querySelector('.search__form').classList.remove('search-active');
		}
	}
}