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
var displayFoodSingle = document.querySelector('.display-food-single');
var displayFoodEntire = document.querySelector('.display-food-entire');
// footer
var newRecipeView = document.querySelector('.add-recipe');
var newRecipeType = document.querySelector('#recipe-type');
var newRecipeName = document.querySelector('#recipe-name');

// event listeners
showFooterButton.addEventListener('click', viewAddRecipe);
letsCookButton.addEventListener('click', letsCook);
clearButton.addEventListener('click', clearMeal);
newRecipeButton.addEventListener('click', addRecipe);

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
  displayFoodSingle.classList.remove('hidden');
  displayFoodEntire.classList.remove('hidden');
  displayRandomMeal();
}

function clearMeal() {
  cookPot.classList.remove('hidden');
  clearButton.classList.add('hidden');
  displayText.classList.add('hidden');
  displayFoodSingle.classList.add('hidden');
  displayFoodEntire.classList.add('hidden');
}

function displayRandomMeal() {
  if (radioSide.checked === true) {
    displayFoodSingle.innerText = `${sides[getRandomIndex(sides)]}!`;
    displayFoodEntire.innerText = ``;
  } else if (radioMain.checked === true) {
    displayFoodSingle.innerText = `${mains[getRandomIndex(mains)]}!`;
    displayFoodEntire.innerText = ``;
  } else if (radioDessert.checked === true) {
    displayFoodSingle.innerText = `${desserts[getRandomIndex(desserts)]}!`;
    displayFoodEntire.innerText = ``;
  } else if (radioMeal.checked === true) {
    displayFoodSingle.innerText = ``;
    displayFoodEntire.innerText = `${mains[getRandomIndex(mains)]} for the main course, ${sides[getRandomIndex(sides)]} for a side, and ${desserts[getRandomIndex(desserts)]} for the dessert!`;
  } else {
    alert('Please select an option!');
  }
}

function addRecipe() {
  if ((newRecipeType.value == 'side') && (!sides.includes(newRecipeName.value))) {
    sides.push(newRecipeName.value);
  } else if ((newRecipeType.value == 'main dish') && (!mains.includes(newRecipeName.value))) {
    mains.push(newRecipeName.value);
  } else if ((newRecipeType.value == 'dessert') && (!desserts.includes(newRecipeName.value))) {
    desserts.push(newRecipeName.value);
  } else if ((sides.includes(newRecipeName.value)) || (mains.includes(newRecipeName.value)) || (desserts.includes(newRecipeName.value))) {
    alert('You cannot enter the same recipe twice!');
  } else {
    alert('Please enter all the necessary information!');
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
