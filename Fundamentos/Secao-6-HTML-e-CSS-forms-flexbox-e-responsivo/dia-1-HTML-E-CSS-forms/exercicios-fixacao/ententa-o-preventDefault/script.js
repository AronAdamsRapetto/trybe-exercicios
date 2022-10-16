// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function teste(event) {
    event.preventDefault();
}

function teste2(event) {
    if (event.key !== 'a') {
        event.preventDefault();
    }
}

HREF_LINK.addEventListener('click', teste);

INPUT_CHECKBOX.addEventListener('click', teste);

INPUT_TEXT.addEventListener('keypress', teste2);