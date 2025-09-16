import {cart, removeFromCart} from '../../data/cart.js';
import { products, deliveryOptions } from '../../data/products.js';
import dayjs from 'http://unpkg.com/dayjs@1.11.10/esm/index.js';

export function renderCartSummary() {
  let cartSummaryHTML = '';

  cart.forEach(cartItem => {
    const matchingItem = getMatchingItem(cartItem);
    

    cartSummaryHTML += `
      <div class="cart-summary-section js-cart-summary-section-${cartItem.productId}">
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
            <span class="delete-quantity-link js-delete-quantity-link" data-product-id="${cartItem.productId}">
              Delete
            </span>
          </div>
        </div>
        <div class="delivery-options">
          <div class="delivery-option-title">
            Choose a delivery option:
          </div>
          ${renderDeliveryOptions(cartItem.productId, cartItem.deliveryId)}
        </div>
      </div>
    </div>
    `;
  }) 

  function renderDeliveryOptions(productId, deliveryId) {
    let deliveryOptionHTML = '';

    deliveryOptions.forEach((deliveryOption) => {

      const dateString = getDate(deliveryOption);
      const deliveryPrice = deliveryOption.deliveryPriceCents === 0 ? 'FREE' : deliveryOption.deliveryPriceCents

      const deliveryChecked = deliveryId === deliveryOption.deliveryId ? 'checked' : ''; 

      deliveryOptionHTML += `
        <div class="delivery-option">
          <input type="radio" class="delivery-option-input" name="delivery-option-${productId}" ${deliveryChecked}>
          <div>
            <div class="delivery-option-date">
              ${dateString}
            </div>
            <div class="delivery-option-price">
              $${deliveryPrice} - Shipping
            </div>
          </div>
        </div>   
      `;
    })

    return deliveryOptionHTML;
  }

  document.querySelector('.js-cart-summary-container')
    .innerHTML = cartSummaryHTML;

  document.querySelectorAll('.js-delete-quantity-link')
    .forEach(link => {

      const {productId} = link.dataset;

      link.addEventListener('click', () => {
        document.querySelector(`.js-cart-summary-section-${productId}`)
          .remove();
        removeFromCart(productId);
      }) 
    })
}

function getMatchingItem(cartItem) {
  let matchingItem;

    products.forEach(product => {
      if (product.id === cartItem.productId) {
        matchingItem = product;
      }
    });

  return matchingItem
}

function getDate(deliveryOption) {

  const today = dayjs();
  const deliveryDay = today.add(deliveryOption.deliveryDay, 'day');
  const dateString = deliveryDay.format('dddd MMMM D');

  return dateString;
}