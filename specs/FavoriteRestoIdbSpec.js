import { itActsAsfavoriteRestaurantModel } from './contract/favoriteRestoContract';
import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoIdb.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestoIdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsfavoriteRestaurantModel(FavoriteRestoIdb);
});
