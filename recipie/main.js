// main.js

// Example function to initialize the page
function initializePage() {
    // You can add any initialization logic here

    // Example event listener for the search form
    const searchForm = document.querySelector('.search-form');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const searchTerm = this.querySelector('input[type="text"]').value;
        // You can implement search functionality here
        console.log('Searching for:', searchTerm);
    });
}

// Initialize the page when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializePage);

