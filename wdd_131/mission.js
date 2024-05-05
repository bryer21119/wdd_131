document.addEventListener("DOMContentLoaded", function() {
    const themeSelect = document.getElementById("theme-select");
    const logoContainer = document.querySelector('.logo');

    function changeTheme() {
        const body = document.body;

        if (themeSelect.value === "dark") {
            body.classList.add("dark");
            body.classList.remove("light");
        } else {
            body.classList.add("light");
            body.classList.remove("dark");
        }
        updateLogo();
    }

    function updateLogo() {
        const body = document.body;

        if (body.classList.contains("dark")) {
            logoContainer.classList.remove("light");
            logoContainer.classList.add("dark");
        } else {
            logoContainer.classList.remove("dark");
            logoContainer.classList.add("light");
        }
    }

    themeSelect.addEventListener("change", changeTheme);

    // Initial call to set the initial theme and logo
    changeTheme();
});
