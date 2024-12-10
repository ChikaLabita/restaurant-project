class FavoriteRestoSearchView {
    getTemplate() {
      return `
      <div id="resto-search-container">
        <input id="query" type="text">
        
        <div class="resto-result-container">
          <ul class="restaurants">
          </ul>
        </div>
      </div>
      `;
    }

    runWhenUserIsSearching(callback) {
      document.getElementById('query').addEventListener('change', (event) => {
        callback(event.target.value);
      });
    }

    showRestaurant(restaurants) {
      let html;
  
      if(restaurants.length > 0) {
        html = restaurants.reduce(
          (carry, restaurant) => carry.concat(`
            <li class="restaurant">
              <span class="restaurant_name">${restaurant.name || '-' }</span>
            </li>
          `),
          '',
        );
      } else {
        html = '<div class="restaurant_not_found">Restaurant tidak ditemukan</div>';
      }
       
      document.querySelector('.restaurants').innerHTML = html;
  
      document.getElementById('resto-search-container').dispatchEvent(new Event('restaurants:searched:updated'));
    }
  }

export default FavoriteRestoSearchView;