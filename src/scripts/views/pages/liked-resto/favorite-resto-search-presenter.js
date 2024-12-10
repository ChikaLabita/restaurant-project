class FavoriteRestoSearchPresenter {
  constructor({ favoriteResto, view }) {
    this._favoriteResto = favoriteResto;
    this._view = view;
    this._listenToSearchRequestByUser();
  }

  _listenToSearchRequestByUser() {
    this._queryElement = document.getElementById('query');
    this._queryElement.addEventListener('change', (event) => {
      this._searchRestaurant(event.target.value);
    });
  }

  async _searchRestaurant(latestQuery) {
    this._latestQuery = latestQuery.trim();
    //const foundResto = await this._favoriteResto.searchRestaurant(this.latestQuery);
    let foundResto;

    if (this._latestQuery.length > 0) {
      foundResto = await this._favoriteResto.searchRestaurant(this.latestQuery);
    } else {
      foundResto = await this._favoriteResto.getAllRestaurants();
    }

    this._showFoundRestaurant(foundResto);
  }
 
  _showFoundRestaurant(restaurants) {
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

  get latestQuery() {
    return this._latestQuery;
  }
}
 
export default FavoriteRestoSearchPresenter;