const themeSelector = document.getElementById("theme-select");

function changeTheme() {
    const body = document.body;
    const logo = document.querySelector('.logo');
    
    if (themeSelector.value === "dark") {
        body.classList.add("dark");
        logo.style.backgroundImage = "url('byui-logo_white.png')";
    } else {
        body.classList.remove("dark");
        logo.style.backgroundImage = "url('byui-logo_blue.png')";
    }
}

themeSelector.addEventListener('change', changeTheme);
