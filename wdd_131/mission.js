document.addEventListener("DOMContentLoaded", function() {
    const themeSelect = document.getElementById("theme-select");
    const body = document.body;

    function changeTheme() {
        if (themeSelect.value === "dark") {
            body.classList.add("dark");
        } else {
            body.classList.remove("dark");
        }
    }

    themeSelect.addEventListener('change', changeTheme);

    // Initial call to set the initial theme
    changeTheme();
});
