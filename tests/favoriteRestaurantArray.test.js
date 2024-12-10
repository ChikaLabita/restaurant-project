import { itActsAsFavoriteRestoModel } from './contracts/favoriteRestoContract';
import { afterEach, describe} from '@jest/globals';

let favoriteResto = [];
 
const FavoriteRestaurantArray = {
  getRestaurants(id) {
    if (!id) {
      return;
    }
 
    return favoriteResto.find((restaurant) => restaurant.id == id);
  },
 
  getAllRestaurants() {
    return favoriteResto;
  },
 
  putRestaurants(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
 
    if (this.getRestaurants(restaurant.id)) {
      return;
    }
 
    favoriteResto.push(restaurant);
  },
 
  deleteRestaurants(id) {
    favoriteResto = favoriteResto.filter((restaurant) => restaurant.id != id);
  },

  searchRestaurant(query) {
    return this.getAllRestaurants().filter((restaurants) => {
      const loweredCaseRestoNames = (restaurants.name || '-').toLowerCase();
      const jammedRestoNames = loweredCaseRestoNames.replace(/\s/g, '');

      const loweredCaseQuery = query.toLowerCase();
      const jammedQuery = loweredCaseQuery.replace(/\s/g, '');

      return jammedRestoNames.indexOf(jammedQuery)!== -1;

    });
  },
};
 
describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteResto = []);
 
  itActsAsFavoriteRestoModel(FavoriteRestaurantArray);
});