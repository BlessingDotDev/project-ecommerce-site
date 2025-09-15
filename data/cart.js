import { products } from "./products.js";

const cart = [];

export function addToCart(productId, selectValue) {
  let matching;

  cart.forEach(cartItem => {
    if (cartItem.productId === productId) {
      matching = cartItem
    }
  });

  if (matching) {
    matching.quantity += selectValue;
  } else {
    cart.push({
      productId,
      quantity: selectValue
    });
  }
}

export function updateCartQuanity() {
  let cartQuantity = 0;

  cart.forEach(cartItem => {
    cartQuantity += cartItem.quantity;
  })

  return cartQuantity;
}