function toggleMenu() {
    var navContainer = document.getElementById('nav-container');
    var menuButton = document.getElementById('menu-button');
    var navLinks = document.getElementsByClassName('nav-link');
    
    navContainer.classList.toggle('hide');
    menuButton.classList.toggle('hide');
    
    Array.prototype.forEach.call(navLinks, element => {
        element.classList.toggle('hide');
    });
}