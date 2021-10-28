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
}

function clearMeal() {
  cookPot.classList.remove('hidden');
  clearButton.classList.add('hidden');
}
