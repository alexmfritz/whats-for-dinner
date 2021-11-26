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
var mainView = document.getElementById('mainView');
var centerBox = document.getElementById('flexChildCenter');
var favRecipeText = document.getElementById('favRecipeText');
var homeButton = document.getElementById('homeButton');

// event handlers
const viewAddRecipe = () => {
  if (newRecipeView.classList.contains('hidden')) {
    addClass([newRecipeView]);
  } else {
    removeClass([newRecipeView]);
  };
};

const viewFavRecipes = () => {
  removeClass([mainView]);
  if (centerBox.classList.contains('hidden')) {
    addClass([centerBox]);
  } else {
    removeClass([centerBox]);
    addClass([mainView]);
  };
  displayFavRecipes();
};

const displayFavRecipes = () => {
  favRecipeText.innerHTML = ``;
  favorites.forEach(item => {
    favRecipeText.innerHTML += `
    <section class="flex column center">
      <p class="max-width sml-text text-center" id="${item}">${item}</p>
    </section>`
  });
};

const  deleteFavRecipe = (event) => {
  for(var i = 0; i < favorites.length; i++) {
    if (event.target.id === `${favorites[i]}`) {
      favorites.splice(i, 1);
    };
  };
  displayFavRecipes();
};


const returnHome = () => {
  removeClass([centerBox]);
  addClass([mainView]);
};

const saveFavRecipe = () => {
  if (!favorites.includes(displayFood.innerText)) {
    favorites.push(displayFood.innerText);
  };
};

const letsCook = () => {
  if (radioSide.checked || radioMain.checked || radioDessert.checked || radioMeal.checked) {
    displayRandomMeal();
    removeClass([cookPot]);
    addClass([clearButton, displayText, displayFood, favRecipeButton]);
  } else {
    letsCookButton.disabled = true;
  };
  letsCookButton.disabled = false;
};

const clearMeal = () => {
  addClass([cookPot]);
  removeClass([clearButton, displayText, displayFood, favRecipeButton]);
};

const displayRandomMeal = () => {
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

const addRecipe = () => {
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

// event listeners
centerBox.addEventListener('click', (event) => {deleteFavRecipe(event)});
showFooterButton.addEventListener('click', viewAddRecipe);
letsCookButton.addEventListener('click', letsCook);
newRecipeButton.addEventListener('click', addRecipe);
favRecipeButton.addEventListener('click', saveFavRecipe);
viewFavRecipeButton.addEventListener('click', viewFavRecipes);
homeButton.addEventListener('click', returnHome);
clearButton.addEventListener('click', function() {
  clearRadio(radioAll);
  clearMeal();
});