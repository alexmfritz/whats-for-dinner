// buttons
var showFooterButton = document.querySelector('#add-recipe-button');
var letsCookButton = document.querySelector('.lets-cook-button');
var clearButton = document.querySelector('.clear-button');
var newRecipeButton = document.querySelector('.add-new-button');
var favRecipeButton = document.querySelector('.fav-recipe-button');
var viewFavRecipeButton = document.querySelector('#view-fav-recipe-button');
// radio input
var leftBox = document.querySelector('#flex-child-left');
var radioSide = document.querySelector('#side');
var radioMain = document.querySelector('#main');
var radioDessert = document.querySelector('#dessert');
var radioMeal = document.querySelector('#entire-meal');
var radioAll = document.getElementsByName('type');
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
// favorite recipe
var centerBox = document.querySelector('.flex-child-center');

// event listeners
showFooterButton.addEventListener('click', viewAddRecipe);
letsCookButton.addEventListener('click', letsCook);
newRecipeButton.addEventListener('click', addRecipe);
clearButton.addEventListener('click', function(event) {
  clearRadio(radioAll);
  clearMeal();
});
viewFavRecipeButton.addEventListener('click', viewFavRecipe);

// event handlers
function viewAddRecipe() {
  if (newRecipeView.classList.contains('hidden')) {
    show(newRecipeView);
  } else {
    hide(newRecipeView);
  }
}

function show(element) {
  element.classList.remove('hidden');
}

function hide(element) {
  element.classList.add('hidden');
}

function clearRadio(radioAll) {
  for(var i = 0; i < radioAll.length; i++) {
    radioAll[i].checked = false;
  }
}

function viewFavRecipe() {
  if (centerBox.classList.contains('hidden')) {
    show(centerBox);
  } else {
    hide(centerBox);
  }
}

function letsCook() {
  if (radioSide.checked || radioMain.checked || radioDessert.checked || radioMeal.checked) {
    displayRandomMeal();
    hide(cookPot);
    show(clearButton);
    show(displayText);
    show(displayFoodSingle);
    show(displayFoodEntire);
    show(favRecipeButton);
  } else {
    letsCookButton.disabled = true;
  }
  letsCookButton.disabled = false;
}

function clearMeal() {
  show(cookPot);
  hide(clearButton);
  hide(displayText);
  hide(displayFoodSingle);
  hide(displayFoodEntire);
  hide(favRecipeButton);
}

function displayRandomMeal() {
  if (radioSide.checked) {
    displaySingleMeal(sides[getRandomIndex(sides)])
  } else if (radioMain.checked) {
    displaySingleMeal(mains[getRandomIndex(mains)]);
  } else if (radioDessert.checked) {
    displaySingleMeal(desserts[getRandomIndex(desserts)]);
  } else if (radioMeal.checked) {
    displayEntireMeal(mains[getRandomIndex(mains)], sides[getRandomIndex(sides)], desserts[getRandomIndex(desserts)])
  }
}

function displaySingleMeal(singleMeal) {
    displayFoodSingle.innerText = `${singleMeal}!`;
    displayFoodEntire.innerText = ``;
}

function displayEntireMeal(mains, sides, desserts) {
  displayFoodSingle.innerText = ``;
  displayFoodEntire.innerText = `${mains} for the main course, ${sides} for a side, and ${desserts} for the dessert!`;
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
