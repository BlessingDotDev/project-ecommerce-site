export const itemId = JSON.parse(localStorage.getItem('itemid')) || [];

export function saveToStorage() {
  localStorage.setItem('itemid', JSON.stringify(itemId))
}

export function removeFromStorage() {
  localStorage.removeItem('itemid');
}