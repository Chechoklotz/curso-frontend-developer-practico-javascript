const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const hamburgerMenu = document.querySelector('.menu');
const displayHamburgerMenu = document.querySelector('.mobile-menu');

const shoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCardList = document.querySelector('#shoppingCardList');

const cardsContainer = document.querySelector('.cards-container');


//will make appear the menu on desktop version if clicked
menuEmail.addEventListener('click', toggleDesktopMenu);
//on mobile version if hambuerger menu is clicked will appear the menu list
hamburgerMenu.addEventListener('click', toggleMobileMenu);
//Will make appear the shopping list
shoppingCart.addEventListener('click', toggleShoppingCardList);

function toggleDesktopMenu(){
    const  isShoppingCardListOpen = !shoppingCardList.classList.contains('inactive');
    if(isShoppingCardListOpen){
        shoppingCardList.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const  isShoppingCardListOpen = !shoppingCardList.classList.contains('inactive');
    if(isShoppingCardListOpen){
        shoppingCardList.classList.add('inactive');
    }
    displayHamburgerMenu.classList.toggle('inactive');
}

function toggleShoppingCardList(){
    const isMobileMenuOpen = !displayHamburgerMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    
    if(isMobileMenuOpen){
        displayHamburgerMenu.classList.add('inactive');
    }
    if(isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    }
    shoppingCardList.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 2000,
    image: 'https://megustalomejor.com/wp-content/uploads/LG-50-Inches-4K-Ultra-HD-Intel-1.jpg'
});
productList.push({
    name: 'Croquetas',
    price: 120,
    image: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/e6519369-0ce8-49c1-a57b-1ad40c2ee3fd.ef6ade9faac3b9947217d15cbd75a715.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF'
});



{/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div> */}

function renderProducts(arr){
    for(product of productList){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
     
        const productImg = document.createElement('img');
         productImg.setAttribute('src', product.image);
     
         const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
     
        const productInfoDiv = document.createElement('div');
     
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
     
        const productName = document.createElement('p');
        productName.innerText = product.name;
     
         productInfoDiv.appendChild(productPrice);
         productInfoDiv.appendChild(productName);
     
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
     
         productInfoFigure.appendChild(productImgCart);
     
         productInfo.appendChild(productInfoDiv);
         productInfo.appendChild(productInfoFigure);
     
         productCard.appendChild(productImg);
         productCard.appendChild(productInfo);
     
         cardsContainer.appendChild(productCard);
     }
}


renderProducts(productList);