// main.js

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
