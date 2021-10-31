# What's for Dinner?: Solo Project

## Overview

The "What's for Dinner?" project was my second solo project during Turing's Front-End program Mod 1.

I created a website that allows the user to generate random recipe ideas for dinner depending on which kind of dish they are looking for. The entire website was created from scratch, meaning I wrote all of the HTML, CSS, and JavaScript in order to make the site match Turing's composition and create functionality for the user.

The site allows the user to:
- Select dish types (side, main dish, dessert, or entire meal) via radio input and button click
- Clear the randomly generated dish type via button click
- Add their own recommendations to the side, main, and dessert options via input fields and button click
  - *NOTE:* By adding recommendations to those three meal types, they will become available for entire meal generation as well
- Save the generated recipe ideas into a separate area on the site via a favorite button
- View their saved recipe ideas via button click
- Delete their saved recipe ideas via button click

## Learning Goals

Because this project involved writing the entire site from scratch, my goals were as follows:

##### HTML:
- Write clean HTML while using only necessary attributes to provide more details to the elements
- Organize my content within the body element to allow for easier CSS manipulation

##### CSS:
- Match the Turing provided composition without obsessing over perfecting it
- Write clean CSS rules targeting only necessary properties of each element

##### JS:
- Improve on my JavaScript from the previous [RomCom](https://github.com/Daniel-OC/romcom) project to allow for more DRY functions

## Features

![](https://media.giphy.com/media/azWEAKCQoHyuMCmIIJ/giphy.gif)

Upon page load the user will be able to select from 4 options of dish type radio inputs within the left box, click the "Let's Cook" button, and see their randomly generated output in the right box. If the user attempts to click the button without any radio input selected, the button will be disabled until they do. Once their selection is visible on the right box, they will have the option of generating something again from the left box, favoriting the current output, or clearing it to reveal the original contents of the right box.

![](https://media.giphy.com/media/kTX8VvbThq2ZqDwtPD/giphy.gif)

If the user is feeling creative, they may select the "Add A Recipe" button in the top right corner of the page to reveal a hidden footer with input fields. The left input field will take three dish types: Side, Main Dish, or Dessert (*this is uppercase sensitive*). The right input field will take anything the user types and add it to the options of that respective dish type (*not uppercase sensitive*). If they choose to begin cycling through recipe ideas, they will eventually see their recommendations. When the user is done adding their own recommendations, they may hide the "Add A Recipe" section by pressing the same button that revealed it.

![](https://media.giphy.com/media/PqFnh9c6f5dJmhmvfo/giphy.gif)

Throughout the process of displaying recipe ideas, anytime the user favorites the displayed option it will be saved to a hidden section of the site. When they are ready to reveal their favorited recipe ideas, they may click the "View Favs" button in the top right corner in order to hide the current page and reveal the new one. Upon reveal, the user will have the option of deleting their favorites via the delete button associated with each recipe *OR* they can return to the home page via either the "Home" button or re-clicking the "View Favs" button.

## Future Features

- More error handling that disables all buttons from being used unless all necessary or proper information is entered by the user
- No alerts used for error handling
- Allowing the user to enter and form of spelling for the dish type when adding their own recipe (*ex:* "main dish", "main Dish", "Main Dish", "MAIN DISH", etc should *ALL* register the users input)
- Local storage to all the user to leave the site after adding their own recipes or favoriting recipe ideas, and return to see them still included
- A login page

## Contributers & Links:

Alex Fritz - https://github.com/alexmfritz
Deployable link - https://alexmfritz.github.io/whats-for-dinner/

## Setup

- Fork this project to your own Github account
- Clone the repository to your local machine
- `cd` into the project
- Read this README thoroughly, then begin working!
