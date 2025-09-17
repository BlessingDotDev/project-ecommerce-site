

export let cart = JSON.parse(localStorage.getItem('cartItem')) || [];

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
      quantity: selectValue,
      deliveryId: 'id1'
    });
  }

  SaveToStorage();
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach(cartItem => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem)
    }
  })

  cart = newCart;

  SaveToStorage();
}

export function updateCartQuanity() {
  let cartQuantity = 0;

  cart.forEach(cartItem => {
    cartQuantity += cartItem.quantity;
  })

  return cartQuantity;
}

export function updateDeliveryDate(deliveryId, productId) {
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      cartItem.deliveryId = deliveryId;
    }
  });

  SaveToStorage();
}

function SaveToStorage() {
  localStorage.setItem('cartItem', JSON.stringify(cart))
}