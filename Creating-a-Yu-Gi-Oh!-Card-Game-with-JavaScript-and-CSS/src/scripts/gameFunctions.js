import { cardsData, results, state } from "./constants.js";
import { init } from "./init.js";

export async function drawCards(cardNumbers, fieldSide) {
	for (let i = 0; i < cardNumbers; i++) {
		const randomIdCard = await getRandomCardId();
		const cardImage = await createCardImage(randomIdCard, fieldSide);

		document.getElementById(fieldSide).appendChild(cardImage);
	}
}

async function getRandomCardId() {
	const randomIndex = Math.floor(Math.random() * cardsData.length);
	return cardsData[randomIndex].id;
}

async function createCardImage(idCard, fieldSide) {
	const cardImage = document.createElement("img");

	cardImage.setAttribute("height", "100px");
	cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
	cardImage.setAttribute("data-id", idCard);
	cardImage.classList.add("card");

	if (fieldSide === state.playersSides.player) {
		cardImage.addEventListener("click", () => {
			setCardsField(cardImage.getAttribute("data-id"));
		});

		cardImage.addEventListener("mouseover", () => {
			drawSelectCard(idCard);
		});
	}

	return cardImage;
}

async function drawSelectCard(index) {
	state.cardSprites.avatar.src = cardsData[index].img;
	state.cardSprites.name.innerText = cardsData[index].name;
	state.cardSprites.type.innerText = `Attribute : ${cardsData[index].type}`;
}

async function setCardsField(cardId) {
	await removeAllCardsImages();

	await hiddenCardDetails();

	const computerCardId = await getRandomCardId();

	await showHiddenCardFieldImages(true);

	await drawCardsInField(cardId, computerCardId);

	const duelResults = await checkDuelResults(cardId, computerCardId);

	await updateScore();
	await drawButton(duelResults);
}

async function checkDuelResults(playerCardId, computerCardId) {
	let duelResults = results.draw;

	const playerCard = cardsData[playerCardId];

	if (playerCard.windOf.includes(computerCardId)) {
		duelResults = results.win;
		state.score.playerScore++;
		await playAudio(results.win);
	} else if (playerCard.loseOf.includes(computerCardId)) {
		duelResults = results.lose;
		state.score.computerScore++;
		await playAudio(results.lose);
	} else {
		await playAudio(results.draw);
	}

	return duelResults;
}

async function updateScore() {
	state.score.scoreBox.innerText = `Win: ${state.score.playerScore} Lose: ${state.score.computerScore}`;
}

async function removeAllCardsImages() {
	const sideBox = [state.playersSides.computerBox, state.playersSides.playerBox];

	for (const side of sideBox) {
		const imgElements = side.querySelectorAll("img");

		for (const element of imgElements) {
			element.remove();
		}
	}
}

async function drawButton(text) {
	state.actions.button.innerText = text;
	state.actions.button.style.display = "block";
}

async function resetDuel() {
	state.cardSprites.avatar.src = "";
	state.actions.button.style.display = "none";

	state.fieldCards.player.style.display = "none";
	state.fieldCards.computer.style.display = "none";

	init();
}

async function playAudio(audioName) {
	console.log(audioName);
	const audio = new Audio(`./src/assets/audios/${audioName}.wav`);
	await audio.play();
}

async function hiddenCardDetails() {
	state.cardSprites.name.innerText = "";
	state.cardSprites.type.innerText = "";
	state.cardSprites.avatar.src = "";
}

export async function showHiddenCardFieldImages(isVisible) {
	state.fieldCards.player.style.display = isVisible ? "block" : "none";
	state.fieldCards.computer.style.display = isVisible ? "block" : "none";
}

async function drawCardsInField(cardId, computerCardId) {
	state.fieldCards.player.src = cardsData[cardId].img;
	state.fieldCards.computer.src = cardsData[computerCardId].img;
}

window.resetDuel = resetDuel;
