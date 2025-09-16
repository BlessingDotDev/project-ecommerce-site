import {cart} from '../../data/cart.js';
import { products } from '../../data/products.js';

export function renderCartSummary() {
  let cartSummaryHTML = '';

  cart.forEach(cartItem => {
    let matchingItem;

    products.forEach(product => {
      if (product.id === cartItem.productId) {
        matchingItem = product;
      }
    });

    cartSummaryHTML += `
      <div class="cart-summary-section">
        <p class="delivery-date">
          Delivery date: <span>Tueday, June 21</span>
        </p>
      <div class="cart-item-grid">
        <img class="product-image" src="${matchingItem.image}" alt="cart product image"> 
        <div class="cart-item-details">
          <div class="product-name">
            ${matchingItem.name}
          </div>
          <div class="product-price">
            R${matchingItem.priceCents / 100}
          </div>
          <div class="prodcut-quantity">
            <span>
              Quantity:<span class="quantity-label">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link">
              Update
            </span>
            <span class="delete-quantity-link">
              Delete
            </span>
          </div>
        </div>
        <div class="delivery-options">
          <div class="delivery-option-title">
            Choose a delivery option:
          </div>
          <div class="delivery-option">
            <input class="radio" type="radio" class="delivery-option-input" name="delivery-option-${cartItem.productId}">
            <div>
              <div class="delivery-option-date">
                Tuesday, June 21
              </div>
              <div class="delivery-option-price">
                FREE Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio" class="delivery-option-input" name="delivery-option-${cartItem.productId}">
            <div>
              <div class="delivery-option-date">
                Wednesday, June 21
              </div>
              <div class="delivery-option-price">
                $4.99 - Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio" class="delivery-option-input" name="delivery-option-${cartItem.productId}">
            <div>
              <div class="delivery-option-date">
                Monday, June 21
              </div>
              <div class="delivery-option-price">
                $9.99 - Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
  }) 

  document.querySelector('.js-cart-summary-container')
    .innerHTML = cartSummaryHTML;
}