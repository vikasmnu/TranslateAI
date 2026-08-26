console.log("index.js loaded");

const textInput = document.getElementById("text-input");
const translateBtn = document.getElementById("translate-btn");
const startOverBtn = document.getElementById("start-over-btn");
const inputView = document.getElementById("input-view");
const outputView = document.getElementById("output-view");
const originalDisplay = document.getElementById("original-display");
const translationDisplay = document.getElementById("translation-display");

translateBtn.addEventListener("click", async function () {
  const textToTranslate = textInput.value || textInput.placeholder;
  const selectedLanguage = document.querySelector(
    'input[name="language"]:checked',
  ).value;

  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(textToTranslate)}&langpair=en|${selectedLanguage}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const translatedText = data.responseData.translatedText;

    originalDisplay.textContent = textToTranslate;
    translationDisplay.textContent = translatedText;

    inputView.classList.add("hidden");
    outputView.classList.remove("hidden");
  } catch (error) {
    console.error("Transaltion failed:", error);
  }
});

startOverBtn.addEventListener("click", function () {
  textInput.value = "";
  outputView.classList.add("hidden");
  inputView.classList.remove("hidden");
});
