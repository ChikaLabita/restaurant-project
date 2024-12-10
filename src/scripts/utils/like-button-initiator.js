import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {

  async _isRestaurantExist(id) {
    const restaurants = await this._favoriteResto.getRestaurants(id);
    return !!restaurants;
  },

  async init({ likeButtonContainer, favoriteResto, restaurants }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurants = restaurants;

    this._favoriteResto = favoriteResto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurants;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const restaurants = await this._favoriteResto.getRestaurants(id);
    return !!restaurants;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.putRestaurants(this._restaurants);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.deleteRestaurants(this._restaurants.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;