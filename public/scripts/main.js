function toggleMenu() {
    var navContainer = document.getElementById('nav-container');
    navContainer.classList.toggle('hide');

    var navLinks = document.getElementsByClassName('nav-link');
    Array.prototype.forEach.call(navLinks, element => {
        element.classList.toggle('hide');
    });
}