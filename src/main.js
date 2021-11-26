// buttons
var showFooterButton = document.getElementById('addRecipeButton');
var letsCookButton = document.getElementById('letsCookButton');
var clearButton = document.getElementById('clearButton');
var newRecipeButton = document.getElementById('addNewButton');
var favRecipeButton = document.getElementById('favRecipeButton');
var viewFavRecipeButton = document.getElementById('viewFavRecipeButton');
// radio input
var leftBox = document.getElementById('flexChildLeft');
var radioSide = document.getElementById('side');
var radioMain = document.getElementById('main');
var radioDessert = document.getElementById('dessert');
var radioMeal = document.getElementById('entireMeal');
var radioAll = document.getElementsByName('type');
// right box
var rightBox = document.getElementById('flexChildRight');
var cookPot = document.getElementById('cookPot');
var displayText = document.getElementById('displayText');
var displayFood = document.getElementById('displayFood');
// footer
var newRecipeView = document.getElementById('addRecipeView');
var newRecipeType = document.getElementById('recipeType');
var newRecipeName = document.getElementById('recipeName');
// favorite recipe
var main = document.querySelector('main');
var centerBox = document.getElementById('flexChildCenter');
var favRecipeText = document.getElementById('favRecipeText');
var homeButton = document.getElementById('homeButton');

// event listeners
showFooterButton.addEventListener('click', viewAddRecipe);
letsCookButton.addEventListener('click', letsCook);
newRecipeButton.addEventListener('click', addRecipe);
clearButton.addEventListener('click', function() {
  clearRadio(radioAll);
  clearMeal();
});
favRecipeButton.addEventListener('click', saveFavRecipe);
viewFavRecipeButton.addEventListener('click', viewFavRecipes);
centerBox.addEventListener('click', function(event) {
  deleteFavRecipe(event); 
});
homeButton.addEventListener('click', returnHome);

// event handlers
function viewAddRecipe() {
  if (newRecipeView.classList.contains('hidden')) {
    addClass([newRecipeView]);
  } else {
    removeClass([newRecipeView]);
  };
};

function viewFavRecipes() {
  removeClass([main]);
  if (centerBox.classList.contains('hidden')) {
    addClass([centerBox]);
  } else {
    removeClass([centerBox]);
    addClass([main]);
  };
  displayFavRecipes();
};

function displayFavRecipes() {
  favRecipeText.innerHTML = ``;
  favorites.forEach((item) => {
    favRecipeText.innerHTML += `
    <section>
      <p class="fav-recipe-text">${item}<button class="delete-saved-button" id="${item}">DELETE</button></p>
    </section>`
  });
};

function deleteFavRecipe(event) {
  for(var i = 0; i < favorites.length; i++) {
    if (event.target.id === `${favorites[i]}`) {
      favorites.splice(i, 1);
    };
  };
  displayFavRecipes();
};

function returnHome() {
  removeClass([centerBox]);
  addClass([main]);
};

function saveFavRecipe() {
  if (!favorites.includes(displayFood.innerText)) {
    favorites.push(displayFood.innerText);
  };
};

function letsCook() {
  if (radioSide.checked || radioMain.checked || radioDessert.checked || radioMeal.checked) {
    displayRandomMeal();
    removeClass([cookPot]);
    addClass([clearButton, displayText, displayFood, favRecipeButton]);
  } else {
    letsCookButton.disabled = true;
  };
  letsCookButton.disabled = false;
};

function clearMeal() {
  addClass([cookPot]);
  removeClass([clearButton, displayText, displayFood, favRecipeButton]);
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

const clearRadio = (radioAll) => {
  radioAll.forEach((item) => {
    item.checked = false;
  });
};

const displaySingleMeal = (singleMeal) => {
  displayFood.innerText = `${singleMeal}!`;
};

const displayEntireMeal = (mains, sides, desserts) => {
  displayFood.innerText = `${mains} for the main course, ${sides} for a side, and ${desserts} for the dessert!`;
};

const removeClass = (elements) => {
  elements.forEach((item) => {
    item.classList.add('hidden');
  });
};

const addClass = (elements) => {
  elements.forEach((item) => {
    item.classList.remove('hidden');
  });
};

const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
};
