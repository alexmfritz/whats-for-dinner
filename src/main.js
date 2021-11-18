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
var displayFood = document.querySelector('.display-food');
// footer
var newRecipeView = document.querySelector('.add-recipe');
var newRecipeType = document.querySelector('#recipe-type');
var newRecipeName = document.querySelector('#recipe-name');
// favorite recipe
var main = document.querySelector('main');
var centerBox = document.querySelector('.flex-child-center');
var favRecipeText = document.querySelector('.fav-recipe-text');
var homeButton = document.querySelector('.home-button');

// event listeners
showFooterButton.addEventListener('click', viewAddRecipe);
letsCookButton.addEventListener('click', letsCook);
newRecipeButton.addEventListener('click', addRecipe);
clearButton.addEventListener('click', function(event) {
  clearRadio(radioAll);
  clearMeal();
});
favRecipeButton.addEventListener('click', saveFavRecipe);
viewFavRecipeButton.addEventListener('click', viewFavRecipes);
centerBox.addEventListener('click', deleteFavRecipe);
homeButton.addEventListener('click', returnHome);

// event handlers
function viewAddRecipe() {
  if (newRecipeView.classList.contains('hidden')) {
    removeClass([newRecipeView]);
  } else {
    addClass([newRecipeView]);
  };
};

function viewFavRecipes() {
  addClass([main]);
  if (centerBox.classList.contains('hidden')) {
    removeClass([centerBox]);
  } else {
    addClass([centerBox]);
    removeClass([main]);
  };
  displayFavRecipes();
};

function displayFavRecipes() {
  favRecipeText.innerHTML = ``;
  for(var i = 0; i < favorites.length; i++) {
    favRecipeText.innerHTML += `
    <section>
      <p class="fav-recipe-text">${favorites[i]}<button class="delete-saved-button" id="${favorites[i]}">DELETE</button></p>
    </section>`
  };
};

function deleteFavRecipe() {
  for(var i = 0; i < favorites.length; i++) {
    if (event.target.id === `${favorites[i]}`) {
      favorites.splice(i, 1);
    };
  };
  displayFavRecipes();
};

function returnHome() {
  addClass([centerBox]);
  removeClass([main]);
};

function saveFavRecipe() {
  if (!favorites.includes(displayFood.innerText)) {
    favorites.push(displayFood.innerText);
  };
};

function letsCook() {
  if (radioSide.checked || radioMain.checked || radioDessert.checked || radioMeal.checked) {
    displayRandomMeal();
    hide(cookPot);
    show(clearButton);
    show(displayText);
    show(displayFood);
    show(favRecipeButton);
  } else {
    letsCookButton.disabled = true;
  };
  letsCookButton.disabled = false;
};

function clearMeal() {
  removeClass([cookPot]);
  addClass([clearButton], displayText, displayFood, favRecipeButton]);
};

function displayRandomMeal() {
  if (radioSide.checked) {
    displaySingleMeal(sides[getRandomIndex(sides)])
  } else if (radioMain.checked) {
    displaySingleMeal(mains[getRandomIndex(mains)]);
  } else if (radioDessert.checked) {
    displaySingleMeal(desserts[getRandomIndex(desserts)]);
  } else if (radioMeal.checked) {
    displayEntireMeal(mains[getRandomIndex(mains)], sides[getRandomIndex(sides)], desserts[getRandomIndex(desserts)])
  };
};

function addRecipe() {
  if ((newRecipeType.value === 'Side') && (!sides.includes(newRecipeName.value))) {
    sides.push(newRecipeName.value);
  } else if ((newRecipeType.value === 'Main Dish') && (!mains.includes(newRecipeName.value))) {
    mains.push(newRecipeName.value);
  } else if ((newRecipeType.value === 'Dessert') && (!desserts.includes(newRecipeName.value))) {
    desserts.push(newRecipeName.value);
  } else if ((sides.includes(newRecipeName.value)) || (mains.includes(newRecipeName.value)) || (desserts.includes(newRecipeName.value))) {
    alert('You cannot enter the same recipe twice!');
  } else {
    alert('Please use the correct case and include both values!');
  };
};

// helper functions

function clearRadio(radioAll) {
  for(var i = 0; i < radioAll.length; i++) {
    radioAll[i].checked = false;
  };
};

function displaySingleMeal(singleMeal) {
  displayFood.innerText = `${singleMeal}!`;
};

function displayEntireMeal(mains, sides, desserts) {
  displayFood.innerText = `${mains} for the main course, ${sides} for a side, and ${desserts} for the dessert!`;
};

function removeClass(elements) {
  for (var i = 0; i < elements.length; i ++) {
      elements[i].classList.remove('hidden');
  };
};

function addClass(elements) {
  for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add('hidden');
  };
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
