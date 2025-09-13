import {products} from '../data/products.js';

renderProductList();

function renderProductList() {

  let productListHTML = '';
  
  products.forEach((product) => {
    productListHTML += `
      <div class="product-container">
        <div class="product-image">
          <img src="${product.image}" alt="">
        </div>
        <div class="product-info">
          <p class="product-name">
            ${product.name}
          </p>
          <p class="product-brand">
            Nike-Jordan
          </p>
          <div class="product-ratings">
            <img class="rating-image" src="images/ratings/rating-${product.ratings.starts * 10}.png" alt="">
            <span class="rating-count">
             ${product.ratings.counts}
            </span>
          </div>
          <p class="product-price">
            R${(product.priceCents / 100).toFixed(2)}
          </p>
          <select name="number" id="number">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <button class="add-to-cart-button">Add to cart</button>
        </div>
      </div>
    `;
  })
  
  document.querySelector('.js-grid-layout')
    .innerHTML = productListHTML;
}
