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
  return tags.map(tag => `<h3 class="tag">${tag}</h3>`).join('');
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

  return `<div class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">${starsHTML}</div>`;
}

// Function to generate HTML markup for a recipe
function recipeTemplate(recipe) {
  return `
    <article class="recipe-article">
      <div class="recipe-image-container">
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
        <div class="tags">
          ${tagsTemplate(recipe.tags)}
        </div>
      </div>
      <div class="recipe-content">
        <h2 class="recipe-title">${recipe.name}</h2>
        ${ratingTemplate(recipe.rating)}
        <p class="recipe-description">${recipe.description}</p>
      </div>
    </article>
  `;
}

// Function to render recipes into the DOM
function renderRecipe(recipe) {
  const recipeContainer = document.querySelector('.recipe');
  recipeContainer.innerHTML = recipeTemplate(recipe);
}

// Function to initialize the page with a random recipe
function init() {
  const randomRecipe = getRandomListEntry(recipes);
  renderRecipe(randomRecipe);
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
  if (filteredRecipes.length > 0) {
    renderRecipe(filteredRecipes[0]);
  } else {
    const recipeContainer = document.querySelector('.recipe');
    recipeContainer.innerHTML = `<p>No recipes found for "${query}".</p>`;
  }
}

// Event listener for the search form submission
const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', searchHandler);

// Initialize the page with a random recipe when it loads
document.addEventListener('DOMContentLoaded', init);
