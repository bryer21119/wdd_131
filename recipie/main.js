// main.js

// main.js

// Import recipes from recipes.mjs
import recipes from './recipes.mjs';

// Function to generate a random number between 0 and num-1
function random(num) {
  return Math.floor(Math.random() * num);
}

// Function to get a random entry from a list
function getRandomListEntry(list) {
  const randomIndex = random(list.length);
  return list[randomIndex];
}

// Function to generate HTML markup for tags
function tagsTemplate(tags) {
  return tags.map(tag => `<li>${tag}</li>`).join('');
}

// Function to generate HTML markup for ratings
function ratingTemplate(rating) {
  const maxStars = 5;
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0);

  let starsHTML = '';
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<span class="icon-star">⭐</span>';
  }
  if (halfStar) {
    starsHTML += '<span class="icon-star-half-alt">⭐</span>';
  }
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<span class="icon-star-empty">☆</span>';
  }

  return `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">${starsHTML}</span>`;
}

// Function to generate HTML markup for a recipe
function recipeTemplate(recipe) {
  return `
    <figure class="recipe">
      <img src="${recipe.image}" alt="image of ${recipe.name} on a plate" />
      <figcaption>
        <ul class="recipe__tags">
          ${tagsTemplate(recipe.tags)}
        </ul>
        <h2><a href="#">${recipe.name}</a></h2>
        <p class="recipe__ratings">
          ${ratingTemplate(recipe.rating)}
        </p>
        <p class="recipe__description">
          ${recipe.description}
        </p>
      </figcaption>
    </figure>
  `;
}

// Function to render recipes into the DOM
function renderRecipes(recipeList) {
  const recipesContainer = document.getElementById('recipes-container');
  recipesContainer.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
}

// Function to initialize the page with a random recipe
function init() {
  const randomRecipe = getRandomListEntry(recipes);
  renderRecipes([randomRecipe]);
}

// Function to filter recipes based on a search query
function filterRecipes(query) {
  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query.toLowerCase()) ||
    recipe.description.toLowerCase().includes(query.toLowerCase()) ||
    recipe.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );
  return filteredRecipes;
}

// Function to handle search form submission
function searchHandler(e) {
  e.preventDefault();
  const searchInput = document.getElementById('search-input');
  const query = searchInput.value.trim();

  const filteredRecipes = filterRecipes(query);
  renderRecipes(filteredRecipes);
}

// Event listener for the search button
const searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', searchHandler);

// Initialize the page with a random recipe when it loads
init();

function initializePage() {
    const searchForm = document.querySelector('.search-form');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const searchTerm = this.querySelector('input[type="text"]').value;
        
        console.log('Searching for:', searchTerm);
        searchRecipes(searchTerm);
    });
}

document.addEventListener('DOMContentLoaded', initializePage);
