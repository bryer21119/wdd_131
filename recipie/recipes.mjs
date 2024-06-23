// recipes.js


function generateRatingStars(rating) {
    const maxStars = 5;
    const filledStars = '⭐';
    const emptyStars = '☆';

    const filledCount = Math.round(rating);
    const emptyCount = maxStars - filledCount;

    const filledStarsHtml = filledStars.repeat(filledCount);
    const emptyStarsHtml = emptyStars.repeat(emptyCount);

    return `${filledStarsHtml}${emptyStarsHtml}`;

}


function generateRecipe(recipeData) {
    const recipeSection = document.querySelector('.recipe');

    
    const { title, description, rating } = recipeData;

    const ratingHtml = generateRatingStars(rating);

    const recipeHtml = `
        <article>
            <h2>${title}</h2>
            <div class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">
                ${ratingHtml}
            </div>
            <p>${description}</p>
        </article>
    `;

    recipeSection.innerHTML = recipeHtml;
}

const exampleRecipeData = {
    title: "Example Recipe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    rating: 4
};

generateRecipe(exampleRecipeData);
