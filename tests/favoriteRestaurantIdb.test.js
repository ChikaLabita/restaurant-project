import { itActsAsFavoriteRestoModel } from './contracts/favoriteRestoContract';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllRestaurants()).forEach(async (restaurants) => {
      await FavoriteRestoIdb.deleteRestaurants(restaurants.id);
    });
  });
 
  itActsAsFavoriteRestoModel(FavoriteRestoIdb);
});