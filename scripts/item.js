import { itemId } from "../data/itemdata.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

renderItem();

function renderItem() {
  
  let matchingProduct;

  products.forEach(product => {
  //since the localstorage.remove is failing ill resote to option 2 where we get whatever id is in last place in the array
    if (itemId[itemId.length - 1] === product.id) {
      matchingProduct = product;
    }
  })
  
  const productItemHTML = `
    <!--will display on small screen-->
      <div class="product-names display-product-names">
        <p class="product-brand">
          ${matchingProduct.brand}
        </p>
        <p class="product-name">
          ${matchingProduct.name}
        </p>
        <p class="product-price">
          R${formatCurrency(matchingProduct.priceCents)}
        </p>
      </div>
      <!--Will display on small screen-->
       <button class="add-to-cart-button display-add-top-button js-add-to-cart-button">
          Add to Cart
        </button>

    <div class="image-container">
      <img class="product-image" src="${matchingProduct.image}" alt="product-image">
    </div>

    <div class="product-info">
      <div class="product-names">
        <p class="product-brand">
          ${matchingProduct.brand}
        </p>
        <p class="product-name">
          ${matchingProduct.name}
        </p>
        <p class="product-price">
          R${formatCurrency(matchingProduct.priceCents)}
        </p>
      </div>

      <div class="size-section">
        <div class="size-title">
          <span class="select-size primary-size">
            Select Size
          </span>

          <div class="guide-container">
            <img class="guide-icon" src="images/icons/arrow-down-circle.svg" alt="">
            <span class="size-guide primary-size">
              Size Guide
            </span>
          </div>
        </div>

        <ul class="size-options">
          <li class="js-size-button">XS</li>
          <li class="js-size-button">S</li>
          <li class="js-size-button">M</li>
          <li class="js-size-button">L</li>
          <li class="js-size-button">XL</li>
          <li class="js-size-button">XXL</li>
        </ul>

        <button class="add-to-cart-button">
          Add to Cart
        </button>
        <button class="favourite-button js-favourite-button">
          Favourite <span class="heart js-heart">&#9825;</span> 
        </button>

        <div class="ratings">
          <p class="title-ratings">Ratings</p>
          <div class="stars-row">
            Stars: <img class="rating-image" src="images/ratings/rating-${matchingProduct.ratings.starts * 10}.png" alt="">
          </div>
          <div class="counts-row">
            Counts: <span class="count">${matchingProduct.ratings.counts}</span>
          </div>
        </div>
      </div>
    </div>
  `;

  document.querySelector('.js-main-container')
    .innerHTML = productItemHTML;
    
  // For the fixed add-to-cart-buttton
  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      removeFixedButton();
    } else {
      addFixedButton();
    }
  })
  
  // Works with the item size buttons
  checkSize(matchingProduct.size);

  // Add functionality to the favourite button
  document.querySelector('.js-favourite-button').addEventListener('click', () => {
    makeFvourite()
  })

}

function removeFixedButton() {
  const button = document.querySelector('.js-add-to-cart-button');
  
  button.classList.remove('display-add-top-button');
}

function addFixedButton() {
  const button = document.querySelector('.js-add-to-cart-button');
  
  button.classList.add('display-add-top-button');
}

function checkSize(sizes) {
  sizes.forEach((size) => {

    document.querySelectorAll('.js-size-button')
      .forEach(button => {
        if (button.innerText === size){
          button.classList.add('size-button');
        }
      })
  })
}

let isFavourite;

function makeFvourite() {
  const heartElement =  document.querySelector('.js-heart');

    if (!isFavourite) {
      heartElement.innerHTML = '&#9829;';
      isFavourite = true;
    } else {
      heartElement.innerHTML = '&#9825;';
      isFavourite = false
    }
}