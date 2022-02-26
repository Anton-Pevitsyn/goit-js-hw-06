function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('.change-color');
const outputText = document.querySelector('.color')
const body = document.querySelector('body')

button.addEventListener('click', () => {
  body.style.backgroundColor = getRandomHexColor()
outputText.textContent = getRandomHexColor()
} )