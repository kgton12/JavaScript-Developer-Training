const emojis = ["😒", "😒", "😎", "😎", "🤑", "🤑", "😡", "😡", "🤡", "🤡", "👽", "👽", "🐶", "🐶", "🐱", "🐱"];
let openCards = [];
const shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 1 : -1));
let startTime, endTime;

document.addEventListener("DOMContentLoaded", () => {
	startTime = new Date().getTime();

	for (let i = 0; i < emojis.length; i++) {
		const box = document.createElement("div");

		box.className = "item";
		box.innerHTML = shuffleEmojis[i];
		box.onclick = handleClick;

		document.querySelector(".game").appendChild(box);
	}
});

function handleClick() {
	if (openCards.length < 2) {
		this.classList.add("boxOpen");
		openCards.push(this);
	}

	if (openCards.length === 2) {
		setTimeout(checkMatch, 500);
	}
}

function checkMatch() {
	if (openCards[0].innerHTML === openCards[1].innerHTML) {
		openCards.map((card) => {
			card.classList.add("boxMatched");
		});
	} else {
		openCards.map((card) => {
			card.classList.remove("boxOpen");
		});
	}

	openCards = [];

	if (document.querySelectorAll(".boxMatched").length === emojis.length) {
		endTime = new Date().getTime();
		const timeTaken = Math.floor((endTime - startTime) / 1000);
		alert(`You won! Time taken: ${timeTaken} seconds`);
	}
}
