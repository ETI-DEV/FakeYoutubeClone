document.addEventListener('DOMContentLoaded', function() {


    // === START OF THE MENU TOGGLE FUNCTION ===
    let fullAside = document.querySelector('#full-aside');
    let collapsedAside = document.querySelector('#collapsed-aside');
    let sideMenuButton = document.querySelector('#side-menu-button');
    let themeNav = document.querySelector('#theme-nav');
    let mainContent = document.querySelector('#main-content');

    let AsideCollapsed = false;

    sideMenuButton.addEventListener('click', toggleAside);

    function toggleAside() {
        if (AsideCollapsed) {
            fullAside.classList.remove("invisible");
            collapsedAside.classList.add("invisible");
            themeNav.classList.remove("collapsed");
            mainContent.classList.remove("collapsed");
            AsideCollapsed = false;
        } else {
            fullAside.classList.add("invisible");
            collapsedAside.classList.remove("invisible");
            themeNav.classList.add("collapsed");
            mainContent.classList.add("collapsed");
            AsideCollapsed = true;
        }
    }
    // === END OF THE MENU TOGGLE FUNCTION ===

    


});

