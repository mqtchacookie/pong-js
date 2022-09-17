const game = document.querySelector('.game');

const newGame = () => {
	const foreground = document.createElement('div');
	const text = document.createElement('div');
	const p1_text = document.createElement('div');
	const p1_score = document.createElement('div');
	const p2_text = document.createElement('div');
	const p2_score = document.createElement('div');
	const paddle1 = document.createElement('div');
	const paddle2 = document.createElement('div');
	const paddles = document.createElement('div')

	
	paddle1.classList.add('paddle');
	paddle2.classList.add('paddle');
	
	foreground.classList.add('foreground');
	text.classList.add('game-text');

	p1_text.textContent = 'player 1';
	p1_score.textContent = 0;

	p2_text.textContent = 'player 2';
	p2_score.textContent = 0;

	p1_score.classList.add('score');
	p1_text.classList.add('player-text');

	p2_score.classList.add('score');
	p2_text.classList.add('player-text');

	p1_text.append(p1_score);
	p2_text.append(p2_score);

	text.append(p1_text);
	text.append(p2_text);

	foreground.append(text);
	foreground.append(paddle1);
	foreground.append(paddle2);

	game.append(foreground);
};

const start = document.querySelector('.start');
start.addEventListener('click', () => newGame(), { once: true });
