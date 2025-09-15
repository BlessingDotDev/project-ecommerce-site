import { products } from "./products.js";

const cart = [];

export function addToCart(productId) {
  let matching;

  cart.forEach(cartItem => {
    if (cartItem.productId === productId) {
      matching = cartItem
    }
  });

  if (matching) {
    matching.quantity ++;
  } else {
    cart.push({
      productId,
      quantity: 1
    });
  }
  
}