import { state } from "./constants.js";
import { drawCards, showHiddenCardFieldImages } from "./gameFunctions.js";

export function init() {
	showHiddenCardFieldImages(false);

	drawCards(5, state.playersSides.player);
	drawCards(5, state.playersSides.computer);

	const bgm = document.getElementById("bgm");
	bgm.volume = 0.7;
	bgm.play();
}

init();
