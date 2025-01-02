const audio = new Audio();
const pianoKeys = document.querySelectorAll(".piano-keys .key");

const volumeSlider = document.querySelector(".volume-slider input");

const keysCheck = document.querySelector(".keys-check input");

(async () => {
	for (const pianoKey of pianoKeys) {
		pianoKey.addEventListener("click", () => playTune(pianoKey.dataset.key));
	}

	document.addEventListener("keydown", async (event) => {
		const key = event.key;
		await playTune(key);
	});

	volumeSlider.addEventListener("input", handleVolume);

	keysCheck.addEventListener("click", showHideKeys);
})();

async function playTune(key) {
	const clickedKey = await getDataKey(key);

	if (clickedKey) {
		audio.src = `./src/tunes/${key}.wav`;
		await audio.play();

		clickedKey.classList.add("active");

		setTimeout(() => {
			clickedKey.classList.remove("active");
		}, 150);
	}
}

async function getDataKey(key) {
	return document.querySelector(`[data-key="${key}"]`);
}

async function handleVolume(e) {
	audio.volume = e.target.value;
}

async function showHideKeys() {
	for (const element of pianoKeys) {
		element.classList.toggle("hide");
	}
}
