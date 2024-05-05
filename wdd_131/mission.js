document.addEventListener("DOMContentLoaded", function() {
    const themeSelect = document.getElementById("theme-select");
    const body = document.body;
    const logo = document.querySelector('.logo');

    function changeTheme() {
        if (themeSelect.value === "dark") {
            body.classList.add("dark");
            logo.src = "byui-logo_white.png"; // Change logo to white for dark theme
        } else {
            body.classList.remove("dark");
            logo.src = "byui-logo_blue.png"; // Change logo to blue for light theme
        }
    }

    themeSelect.addEventListener('change', changeTheme);

    // Initial call to set the initial theme
    changeTheme();
});
