const state = {
	view: {
		squares: document.querySelectorAll(".square"),
		enemy: document.querySelector(".enemy"),
		timeLeft: document.querySelector("#time-left"),
		score: document.querySelector("#score"),
		container: document.querySelector(".container"),
	},
	values: {
		gameSpeed: 1000,
		hitPosition: 0,
		result: 0,
		currentTime: 20,
	},
	actions: {
		timerId: null,
		countDownTimerId: null,
	},
};

function countDown() {
	state.values.currentTime--;

	state.view.timeLeft.textContent = state.values.currentTime;

	if (state.values.currentTime <= 0) {
		clearInterval(state.actions.timerId);
		clearInterval(state.actions.countDownTimerId);

		playSound("game-over");
		state.view.container.innerHTML = `<h1 class="game-over">Game Over! Your final score is ${state.values.result}</h1>`;
		// alert("Game Over! Your final score is " + state.values.result);
	}
}

function playSound(audioName) {
	const audio = new Audio(`./src/sounds/${audioName}.m4a`);
	audio.volume = 0.2;
	audio.play();
}

function randomSquare() {
	state.view.squares.forEach((square) => {
		square.classList.remove("enemy");
	});

	const randomNumber = Math.floor(Math.random() * 9);
	const randomSquare = state.view.squares[randomNumber];
	randomSquare.classList.add("enemy");

	state.values.hitPosition = randomSquare.id;
}

function addListenerHitBox() {
	state.view.squares.forEach((square) => {
		square.addEventListener("mousedown", () => {
			if (square.id === state.values.hitPosition) {
				state.values.result++;
				state.view.score.textContent = state.values.result;
				playSound("hit");

				state.values.hitPosition = null;
			}
		});
	});
}

function initActions() {
	state.actions.timerId = setInterval(randomSquare, 600);
	state.actions.countDownTimerId = setInterval(countDown, 1000);
}

function initialize() {
	addListenerHitBox();
	initActions();
}
//
// initialize();
