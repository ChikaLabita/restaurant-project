//import { spyOn } from 'jest-mock';
import FavoriteRestoSearchPresenter from '../src/scripts/views/pages/liked-resto/favorite-resto-search-presenter';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

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
}

describe('Searching restaurant', () => {

  let presenter;
  let favoriteResto;
  let view;

  const searchRestaurant = (query) => {
    const queryElement = document.getElementById('query');
    queryElement.value = query;

    queryElement.dispatchEvent(new Event('change'));
  };

  const setRestoSearchContainer = () => {
    const view = new FavoriteRestoSearchView();
    document.body.innerHTML = view.getTemplate();

  };

  const constructPresenter = () => {

    favoriteResto = {
      getAllRestaurants: jest.fn(),
      searchRestaurant: jest.fn(),
    };

    presenter = new FavoriteRestoSearchPresenter({
      favoriteResto,
      view,
    });
  };

  beforeEach(() => {
    setRestoSearchContainer();
    constructPresenter();
  });

  describe('When query is not empty', () => {

    it('should ask the model to search for liked restaurants', () => {
      favoriteResto.searchRestaurant.mockImplementation(() => []);
      searchRestaurant('kafe');
      expect(favoriteResto.searchRestaurant).toHaveBeenCalledWith('kafe');
    });

    it('should show the found restaurants', () => {
      presenter._showFoundRestaurant([{ id: 1 }]);

      expect(document.querySelectorAll('.restaurant').length).toEqual(1);

      presenter._showFoundRestaurant([
        {
          id: 1,
          name: 'kafe',
        },
        {
          id: 2,
          name: 'kafe a',
        },
      ]);
      expect(document.querySelectorAll('.restaurant').length).toEqual(2);
    });

    it('should show the name of the found restaurant', () => {
      presenter._showFoundRestaurant([
        {
          id: 1,
          name: 'kafe',
        },
        {
          id: 2,
          name: 'kafe a',
        },
      ]);

      const restoNames = document.querySelectorAll('.restaurant_name');

      expect(restoNames.item(0).textContent).toEqual('kafe');
      expect(restoNames.item(1).textContent).toEqual('kafe a');
    });

    it('should show - for found restaurant without name', () => {
      presenter._showFoundRestaurant([{ id: 1 }]);
      expect(document.querySelectorAll('.restaurant_name').item(0).textContent).toEqual('-');
    });

    it('should show the restaurant found by Favorite Restaurants', (done) => {
      document.getElementById('resto-search-container').addEventListener('restaurants:searched:updated', () => {
        expect(document.querySelectorAll('.restaurant').length).toEqual(3);
        done();
      });

      favoriteResto.searchRestaurant.mockImplementation((query) => {
        if (query === 'kafe') {
          return [
            { id: 111, name: 'kafe abc' },
            { id: 222, name: 'ada juga kafe abcde' },
            { id: 333, name: 'ini juga boleh kafe a' },
          ];
        }
        return [];
      });

      searchRestaurant('kafe');

    });

    it('should show the name of restaurant found by Favorite Restaurants', (done) => {
      document.getElementById('resto-search-container').addEventListener('restaurants:searched:updated', () => {
        const restoNames = document.querySelectorAll('.restaurant_name');
        expect(restoNames.item(0).textContent).toEqual('kafe abc');
        expect(restoNames.item(1).textContent).toEqual('ada juga kafe abcde');
        expect(restoNames.item(2).textContent).toEqual('ini juga boleh kafe a');
        done();
      });

      favoriteResto.searchRestaurant.mockImplementation((query) => {
        if (query === 'kafe') {
          return [
            { id: 111, name: 'kafe abc' },
            { id: 222, name: 'ada juga kafe abcde' },
            { id: 333, name: 'ini juga boleh kafe a' },
          ];
        }
        return [];
      });

      searchRestaurant('kafe');

    });

  });

  describe('When query is empty', () => {
    it('should capture the query as empty', () => {

      favoriteResto.getAllRestaurants.mockImplementation(() => []);

      searchRestaurant(' ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurant('    ');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurant('');
      expect(presenter.latestQuery.length).toEqual(0);

      searchRestaurant('\t');
      expect(presenter.latestQuery.length).toEqual(0);

    });

    it('should show all favorite restaurant', () => {
      favoriteResto.getAllRestaurants.mockImplementation(() => []);

      searchRestaurant('    ');

      expect(favoriteResto.getAllRestaurants).toHaveBeenCalled();
    });

  });

  describe('When no favorite restaurant could be found', () => {
    it('should show the empty message', (done) => {
      document
        .getElementById('resto-search-container')
        .addEventListener('restaurants:searched:updated', () => {
          expect(document.querySelectorAll('.restaurant_not_found').length).toEqual(1);
          done();
        });
      favoriteResto.searchRestaurant.mockImplementation((query) => []);
      searchRestaurant('kafe');
    });

    it('should not show any restaurant', (done) => {
      document
        .getElementById('resto-search-container')
        .addEventListener('restaurants:searched:updated', () => {
          expect(document.querySelectorAll('.restaurant').length).toEqual(0);
          done();
        });
      favoriteResto.searchRestaurant.mockImplementation((query) => []);
      searchRestaurant('kafe');
    });

  });

});