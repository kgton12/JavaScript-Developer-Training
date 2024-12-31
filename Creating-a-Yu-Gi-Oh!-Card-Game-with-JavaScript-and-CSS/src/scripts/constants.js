export const state = {
	score: {
		playerScore: 0,
		computerScore: 0,
		scoreBox: document.getElementById("score_points"),
	},
	cardSprites: {
		avatar: document.getElementById("card_image"),
		name: document.getElementById("card_name"),
		type: document.getElementById("card_type"),
	},
	fieldCards: {
		player: document.getElementById("player_field_card"),
		computer: document.getElementById("computer_field_card"),
	},
	actions: {
		button: document.getElementById("next_duel"),
	},
	playersSides: {
		player: "player_cards",
		computer: "computer_cards",
		playerBox: document.querySelector("#player_cards"),
		computerBox: document.querySelector("#computer_cards"),
	},
};

export const results = {
	win: "Win",
	lose: "Lose",
	draw: "Draw",
};

export const pathImages = "./src/assets/icons/";

export const cardsData = [
	{
		id: 0,
		name: "Blue Eyes White Dragon",
		type: "Paper",
		img: `${pathImages}dragon.png`,
		windOf: [1],
		loseOf: [2],
	},
	{
		id: 1,
		name: "Dark Magician",
		type: "Rock",
		img: `${pathImages}magician.png`,
		windOf: [2],
		loseOf: [0],
	},
	{
		id: 2,
		name: "Exodia",
		type: "Scissors",
		img: `${pathImages}exodia.png`,
		windOf: [0],
		loseOf: [1],
	},
];
