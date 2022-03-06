function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const form = document.querySelector('#controls');
const input = form.firstElementChild;
const createButton = form.querySelector('button[data-create]');
const destoryButton = form.querySelector('button[data-destroy]');
const contener = document.querySelector('#boxes');
const defoltWidth = 30;

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const element = document.createElement('div');
    element.style.width = `${defoltWidth + i * 10}px`;
    element.style.height = `${defoltWidth + i * 10}px`;
    element.style.backgroundColor = getRandomHexColor();
    contener.append(element);
  }
}

function creatingСollection(event) {
  let quantityElements = event.currentTarget.value;
  createButton.addEventListener('click', () => {
    createBoxes(quantityElements);
    quantityElements = 0;
  });
}
function removeCollection() {
  contener.innerHTML = '';
}

input.addEventListener('change', creatingСollection);
destoryButton.addEventListener('click', removeCollection);
