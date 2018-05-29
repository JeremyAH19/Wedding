document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', event => {
        let menuButton = document.getElementById('menu-button');
        let isMobile = window.getComputedStyle(menuButton).getPropertyValue('display') !== 'none';

        if (isMobile && event.target === '') {
            hideMenu();
        }
    });
});

function toggleMenu() {
    let navContainer = document.getElementById('nav-container');
    let menuButton = document.getElementById('menu-button');
    let navLinks = document.getElementsByClassName('nav-link');
    
    navContainer.classList.toggle('hide');
    menuButton.classList.toggle('hide');
    
    Array.prototype.forEach.call(navLinks, element => {
        element.classList.toggle('hide');
    });
}

function hideMenu() {
    let navContainer = document.getElementById('nav-container');
    let menuButton = document.getElementById('menu-button');
    let navLinks = document.getElementsByClassName('nav-link');
    
    navContainer.classList.add('hide');
    menuButton.classList.add('hide');
    
    Array.prototype.forEach.call(navLinks, element => {
        element.classList.add('hide');
    });
}