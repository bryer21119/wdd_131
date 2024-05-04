document.addEventListener("DOMContentLoaded", function() {
    const themeSelect = document.getElementById("theme-select");

    function changeTheme() {
        const body = document.body;
        const logo = document.querySelector('.logo');
        
        if (themeSelect.value === "dark") {
            body.classList.add("dark");
            logo.src = "byui-logo_white.png";
        } else {
            body.classList.remove("dark");
            logo.src = "byui-logo_blue.png";
        }
    }

    themeSelect.addEventListener("change", changeTheme);
});
