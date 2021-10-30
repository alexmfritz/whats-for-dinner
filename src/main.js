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

// event listeners
showFooterButton.addEventListener('click', viewAddRecipe);
letsCookButton.addEventListener('click', letsCook);
newRecipeButton.addEventListener('click', addRecipe);
clearButton.addEventListener('click', function(event) {
  clearRadio(radioAll);
  clearMeal();
});

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

function letsCook() {
  if (radioSide.checked || radioMain.checked || radioDessert.checked || radioMeal.checked) {
    displayRandomMeal();
    hide(cookPot);
    show(clearButton);
    show(displayText);
    show(displayFoodSingle);
    show(displayFoodEntire);
  } else {
    letsCookButton.disabled = true;
  }
}

function clearMeal() {
  show(cookPot);
  hide(clearButton);
  hide(displayText);
  hide(displayFoodSingle);
  hide(displayFoodEntire);
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
