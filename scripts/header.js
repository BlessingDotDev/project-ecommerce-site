export function setupHeaderEvents() {

  document.querySelector('.js-search-icon')
    .addEventListener('click', () => {
     const searchbar = document.querySelector('.js-search-bar');

     const contains = searchbar.classList.contains('clicked-search-bar');

     if(!contains) {
      searchbar.classList.add('clicked-search-bar')
     } else {
       searchbar.classList.remove('clicked-search-bar')
     }

  }) 

}
