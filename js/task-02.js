const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const creatingTag = function (element) {
  const tag = document.createElement('li');
  tag.textContent = element;
  tag.classList.add('item');
  return tag;
};

const ingredientsArr = ingredients.map(creatingTag);

document.querySelector('#ingredients').append(...ingredientsArr);
