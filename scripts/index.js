import { products, productsCatagories } from "../data/products.js";

renderProductsCategories();

function renderProductsCategories() {
  let productsCategoryHTML = '';

  productsCatagories.forEach((category) => {
   const matchingProduct = getMatchingProduct(category);
   console.log(matchingProduct)

    productsCategoryHTML += `
      <a href="shop.html">
        <div class="content-container">
          <img src="${matchingProduct.image}" alt="men content image">
          <div class="content-link">
            <span>${category.category}</span>
            <p>&gt</p>
          </div>
        </div>
      </a>
    `;
  })

  document.querySelector('.js-home-grid-layout')
    .innerHTML = productsCategoryHTML;

  function getMatchingProduct(category) {
    let matchingProduct;

    products.forEach(product => {
      if (category.category === product.category) {
        matchingProduct = product;
      };
    });

    return matchingProduct;
  }

}