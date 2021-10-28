// buttons
var showFooterButton = document.querySelector('#add-recipe-button');
var letsCookButton = document.querySelector('.lets-cook-button');
var clearButton = document.querySelector('.clear-button');
var newRecipeButton = document.querySelector('.add-new-button');
// radio input
var radioSide = document.querySelector('#side');
var radioMain = document.querySelector('#main');
var radioDessert = document.querySelector('#dessert');
var radioMeal = document.querySelector('#entire-meal');
// right box
var rightBox = document.querySelector('#flex-child-right');
var cookPot = document.querySelector('.cook-pot');
var displayText = document.querySelector('.display-text');
var displayFood = document.querySelector('.display-food');
// footer
var newRecipeView = document.querySelector('.add-recipe');
var newRecipeType = document.querySelector('#recipe-type');
var newRecipeName = document.querySelector('#recipe-name');

// event listeners
showFooterButton.addEventListener('click', viewAddRecipe);
letsCookButton.addEventListener('click', letsCook);
clearButton.addEventListener('click', clearMeal);

// event handlers
function viewAddRecipe() {
  if (newRecipeView.classList.contains('hidden')) {
    newRecipeView.classList.remove('hidden');
  } else {
    newRecipeView.classList.add('hidden');
  }
}

function letsCook() {
  cookPot.classList.add('hidden');
  clearButton.classList.remove('hidden');
  displayText.classList.remove('hidden');
  displayFood.classList.remove('hidden');
  displayRandomMeal();
}

function clearMeal() {
  cookPot.classList.remove('hidden');
  clearButton.classList.add('hidden');
  displayText.classList.add('hidden');
  displayFood.classList.add('hidden');
}

function displayRandomMeal() {
  if (radioSide.checked === true) {
    displayFood.innerText = `${sides[getRandomIndex(sides)]}!`;
  } else if (radioMain.checked === true) {
    displayFood.innerText = `${mains[getRandomIndex(mains)]}!`;
  } else if (radioDessert.checked === true) {
    displayFood.innerText = `${desserts[getRandomIndex(desserts)]}!`;
  } else if (radioMeal.checked === true) {
    displayFood.innerText = `${mains[getRandomIndex(mains)]} for the main course, ${sides[getRandomIndex(sides)]} for a side, and ${desserts[getRandomIndex(desserts)]} for the dessert!`;
  } else {
    alert('Please select an option!');
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
