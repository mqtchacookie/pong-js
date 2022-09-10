const game = document.querySelector('.game');

const startGame = () => {
	const foreground = document.createElement('div');
	const p1_text = document.createElement('div');
	const p2_text = document.createElement('div');
	foreground.classList.add('foreground');

	game.append(foreground);
};
const start = document.querySelector('.start');
start.addEventListener('click', () => startGame());
