import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestaurantsItem } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <h1 class="explore-resto">Favorite Restaurant</h1>
    <div class="restaurants" id="restaurants"></div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestaurants();
    const restaurantsContainer = document.getElementById('restaurants');

    restaurantsContainer.innerHTML = '';

    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = '<p class="empty-favorite">Sorry, your favorite restaurant is empty.</p>';
      return;
    } else {
      restaurants.forEach((restaurant) => {
        const restoItem = createRestaurantsItem(restaurant);
        restaurantsContainer.innerHTML += restoItem;
      });
    }

  }
};

export default Favorite;