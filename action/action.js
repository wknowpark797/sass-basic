const items = document.querySelectorAll('.item');

setTimeout(() => {
	items.forEach((element) => {
		element.classList.add('on');
	});
}, 0);
