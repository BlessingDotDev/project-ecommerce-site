export let category = JSON.parse(localStorage.getItem('category')) || [];

function saveToStorage() {
  localStorage.setItem('category', JSON.stringify(category))
}

function removeFromStorage() {
  localStorage.removeItem('category');
  category = [];
}

export function saveCategory(productCategory) {
  removeFromStorage();

  category.push(productCategory);

  saveToStorage();
}
