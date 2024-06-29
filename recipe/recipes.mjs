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

const recipes = [
    {
        name: "Apple Crisp",
        description: "This apple crisp recipe is a perfect fall dessert, combining tart apples with a sweet, crumbly topping.",
        rating: 4,
        tags: ["Fall Dessert", "Apple", "Crisp"],
        image: "images/apple-crisp.jpg"
    },

    {
        name: "Chocolate Chip Cookies",
        description: "Decadent chocolate, and soft melt in your mouth cookies.",
        rating: 5,
        tags: ["Year Round Dessert", "Chocolate Chips", "Cookies"],
        image: "images/chocolate-chip-cookies.jpg"
    },

    {
        name: "German Gooseberry Cake",
        description: "This is the perfect dessert accompanied by gooseberries and a delicious cake!",
        rating: 5,
        tags: ["Christmas", "Gooseberries", "Cake"],
        image: "images/german-gooseberry-cake.jpg"
    },

    {
        name: "Chicken Curry",
        description: "A delicious Indian cuisine that is bound to appease your appetite.",
        rating: 3,
        tags: ["Curry", "Chicken", "Indian Cuisine"],
        image: "images/chicken-curry.webp"
    },
];

export default recipes;
