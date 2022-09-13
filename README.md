# Recipe Box

<img src="misc/preview.gif">

Live site: https://bih-recipe-box.web.app

## Overview

Recipe Box is a project created for the purpose of learning Angular, Material, RxJS, and NgRx. The app utilizes the spoonacular Nutrition, Recipe, and Food API.

The project largely takes inspiration from the Cooking app from the New York Times. The home page of Recipe Box contains a navigation bar - with the app title, a search bar, and a 'Favorites' button - as well as a component containing an image linking to a pre-selected recipe.

The search bar utilizes the Material autocomplete component combined with the spoonacular Autocomplete Recipe Search endpoint which returns ten relevant options.

Upon selection, the Get Recipe Information endpoint is queried and the information returned is stored in a service, as one method of state management used (more on that later.) The main image component is replaced with the recipe information component. The recipe information component includes an 'Add Favorite' button, which allows the user to save their favorite recipes to view later. The favorites component utilizes NgRx store as another method of state management. Clicking the 'Favorites' button in the navigation bar brings up the favorites component. Favorite recipes are arranged as a grid, showing the recipe thumbnail, title, and a 'Remove' button.

## Tech Stack

TypeScript, Angular, Material, RxJS, NgRx, Firebase

## Improvements

- As the purpose of this project was to learn Angular, I wanted to try out certain features that would probably not make sense in a production build. For instance, I used two different state management methods: a service and NgRx store. This could lead to confusion. I would improve this by removing the service and using NgRx store to handle that logic.
- The addition of a back end would allow for the creation of individual user accounts and the long-term storage and recall of recipes after closing a session.
