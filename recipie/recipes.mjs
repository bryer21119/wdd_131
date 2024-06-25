// recipes.js

function generateRatingStars(rating) {
    const maxStars = 5;
    const filledStars = '⭐';
    const emptyStars = '☆';

    const filledCount = Math.round(rating);
    const emptyCount = maxStars - filledCount;

    let ratingHtml = '<span class="rating" role="img" aria-label="Rating: ' + rating + ' out of 5 stars">';
    
    for (let i = 0; i < filledCount; i++) {
        ratingHtml += '<span aria-hidden="true" class="icon-star">' + filledStars + '</span>';
    }
    
    for (let i = 0; i < emptyCount; i++) {
        ratingHtml += '<span aria-hidden="true" class="icon-star-empty">' + emptyStars + '</span>';
    }
    
    ratingHtml += '</span>';
    
    return ratingHtml;
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
