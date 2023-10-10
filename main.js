const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamburgerMenu = document.querySelector('.menu');
const displayHamburgerMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const asideMenu = document.querySelector('.product-detail');


//will make appear the menu on desktop version if clicked
menuEmail.addEventListener('click', toggleDesktopMenu);
//on mobile version if hambuerger menu is clicked will appear the menu list
hamburgerMenu.addEventListener('click', toggleMobileMenu);
//Will make appear the shopping list
shoppingCart.addEventListener('click', toggleAsideMenu);

function toggleDesktopMenu(){
    const  isAsideMenuOpen = !asideMenu.classList.contains('inactive');
    if(isAsideMenuOpen){
        asideMenu.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const  isAsideMenuOpen = !asideMenu.classList.contains('inactive');
    if(isAsideMenuOpen){
        asideMenu.classList.add('inactive');
    }
    displayHamburgerMenu.classList.toggle('inactive');
}

function toggleAsideMenu(){
    const isMobileMenuOpen = !displayHamburgerMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    
    if(isMobileMenuOpen){
        displayHamburgerMenu.classList.add('inactive');
    }
    if(isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    }
    asideMenu.classList.toggle('inactive');
}

console.log("is this working?")