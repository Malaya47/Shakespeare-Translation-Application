// API url

const url = "https://api.funtranslations.com/translate/shakespeare.json";

// selecting the elements

const textArea = document.querySelector(".text-js");
const buttonTranslate = document.querySelector(".btn-js");
const translatedText = document.querySelector(".translated-text");

// function to handle the url with the text

function translated(innerText) {
  let completeUrl = url + "?" + "text=" + innerText;
  return completeUrl;
  // console.log(completeUrl);
}

// adding interactivity to the button for translating

buttonTranslate.addEventListener("click", function () {
  let innerText = textArea.value;

  fetch(translated(innerText))
    .then((response) => response.json())
    .then((json) => (translatedText.innerText = json.contents.translated));
});
