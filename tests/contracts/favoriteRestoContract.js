const itActsAsFavoriteRestoModel = (favoriteResto) => {

    it('should return the restaurant that has been added', async () => {
        favoriteResto.putRestaurants({ id: 1 });
        favoriteResto.putRestaurants({ id: 2 });

        expect(await favoriteResto.getRestaurants(1)).toEqual({ id: 1 });
        expect(await favoriteResto.getRestaurants(2)).toEqual({ id: 2 });
        expect(await favoriteResto.getRestaurants(3)).toEqual(undefined);
    });

    it('should refuse a restaurant from being added if it does not have the correct property', async () => {
        favoriteResto.putRestaurants({ aProperty: 'property' });

        expect(await favoriteResto.getAllRestaurants()).toEqual([]);
    });

    it('can return all of the restaurants that have been added', async () => {
        favoriteResto.putRestaurants({ id: 1 });
        favoriteResto.putRestaurants({ id: 2 });

        expect(await favoriteResto.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }]);
    });

    it('should remove favorite restaurant', async () => {
        favoriteResto.putRestaurants({ id: 1 });
        favoriteResto.putRestaurants({ id: 2 });
        favoriteResto.putRestaurants({ id: 3 });

        await favoriteResto.deleteRestaurants(1);

        expect(await favoriteResto.getAllRestaurants()).toEqual([{ id: 2 }, { id: 3 }]);
    });

    it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
        favoriteResto.putRestaurants({ id: 1 });
        favoriteResto.putRestaurants({ id: 2 });
        favoriteResto.putRestaurants({ id: 3 });

        await favoriteResto.deleteRestaurants(4);

        expect(await favoriteResto.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
    });

    it('should be able to search for restaurants', async () => {
        favoriteResto.putRestaurants({ id: 1, name: 'kafe' });
        favoriteResto.putRestaurants({ id: 2, name: 'kafe abc' });
        favoriteResto.putRestaurants({ id: 3, name: 'kafe abcde' });
        favoriteResto.putRestaurants({ id: 4, name: 'kafe abcdef' });

        expect(await favoriteResto.searchRestaurant('kafe')).toEqual([
             { id: 1, name: 'kafe' }, { id: 2, name: 'kafe abc' }, { id: 3, name: 'kafe abcde' }, { id: 4, name: 'kafe abcdef' },
        ]);
    });
};

export { itActsAsFavoriteRestoModel };