const wheelBtn = document.querySelector('.wheel__btn');

const spin = () => {
	const img = document.querySelector('.wheel__item-img');
	const dishes = [
		{
			name: 'duo',
			fromTo: [0, 0.33],
			rotate: '3364',
			img: 'src/slide1.png',
		},
		{
			name: 'trio',
			fromTo: [0.34, 0.66],
			rotate: '3550',
			img: 'src/slide2.png',
		},
		{
			name: 'family',
			fromTo: [0.67, 1],
			rotate: '3475',
			img: 'src/slide3.png',
		},
	];
	const randomValue = Math.random().toFixed(2);
	const currentDish = dishes.find(dish => randomValue >= dish.fromTo[0] && randomValue <= dish.fromTo[1]);

	img.style.transform = `rotate(${currentDish.rotate}deg)`;

	return currentDish;
};

wheelBtn.addEventListener('click', (e) => {
	const dish = spin();
	e.target.disabled = true;
	e.target.classList.add('disabled');

	setTimeout(() => {
		closeMain();
		openGame();
		modalWin(dish.img);
	}, 5500);
});