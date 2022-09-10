const game = document.querySelector('.game');

const newGame = () => {
	const foreground = document.createElement('div');
	const p1_text = document.createElement('div');
	const p1_score = document.createElement('div');
	const p2_text = document.createElement('div');
	const p2_score = document.createElement('div');
	foreground.classList.add('foreground');

	p1_text.textContent = 'player 1';
	p1_score.textContent = 0;

    p1_score.classList.add('.')

	p2_text.textContent = 'player 2';
	p2_score.textContent = 0;

	foreground.append(p1_text);
	foreground.append(p1_score);
	foreground.append(p2_text);
	foreground.append(p2_score);
	game.append(foreground);
};
const start = document.querySelector('.start');
start.addEventListener('click', () => newGame());
