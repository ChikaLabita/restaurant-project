import LikeButtonInitiator from '../../utils/like-button-initiator' ;
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
    <div class="restaurant-card">
    <div id="img"></div>
    <div id="restaurant"></div>
    </div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = window.location.hash.slice(1).toLowerCase();
    const id = url.split('/')[2];
    const response = await fetch(`https://restaurant-api.dicoding.dev/detail/${id}`);
    const data = await response.json();

    const restaurant = data.restaurant;

    const imageUrl = `https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}`;
    const imgContainer = document.getElementById('img');
    imgContainer.innerHTML = `
    <img class="lazyload" data-src="${imageUrl}" alt="${restaurant.name}">
    <h2>${restaurant.name}</h2>
    `;
    const ratingStars = Math.round(restaurant.rating);
    const ratingContainer = document.createElement('div');
    ratingContainer.className = 'rating';
    ratingContainer.textContent = `${restaurant.rating}`;
    for (let i = 0; i < 5; i++) {
      const ratingStar = document.createElement('i');
      ratingStar.className = 'fa fa-star';
      ratingStar.style.color = (i < ratingStars) ? 'gold' : 'lightgray';
      ratingContainer.appendChild(ratingStar);
    }

    imgContainer.appendChild(ratingContainer);

    const addressElement = document.createElement('p');
    addressElement.className = 'restoCity';
    addressElement.textContent = `${restaurant.address} , ${restaurant.city}`;
    imgContainer.appendChild(addressElement);

    const categoriesElement = document.createElement('p');
    categoriesElement.className = 'categoriesStyle';
    categoriesElement.textContent = `${restaurant.categories.map((category) => category.name).join(', ')}`;
    imgContainer.appendChild(categoriesElement);

    const descriptionElement = document.createElement('p');
    descriptionElement.className = 'restoDescript';
    descriptionElement.textContent = `${restaurant.description}`;
    imgContainer.appendChild(descriptionElement);

    const restaurantContainer = document.getElementById('restaurant');

    const foodHeader = document.createElement('h3');
    foodHeader.textContent = 'Food Menu:';
    restaurantContainer.appendChild(foodHeader);

    const foodContainer = document.createElement('div');
    foodContainer.className = 'food-container';
    restaurantContainer.appendChild(foodContainer);

    restaurant.menus.foods.map((food) => {
      const foodItem = document.createElement('div');
      foodItem.className = 'menu-item';
      foodItem.textContent = food.name;
      foodContainer.appendChild(foodItem);
    });

    const drinkHeader = document.createElement('h3');
    drinkHeader.textContent = 'Drink Menu:';
    restaurantContainer.appendChild(drinkHeader);

    const drinkContainer = document.createElement('div');
    drinkContainer.className = 'drink-container';
    restaurantContainer.appendChild(drinkContainer);

    restaurant.menus.drinks.map((drink) => {
      const drinkItem = document.createElement('div');
      drinkItem.className = 'menu-item';
      drinkItem.textContent = drink.name;
      drinkContainer.appendChild(drinkItem);
    });

    const reviewsHeader = document.createElement('h3');
    reviewsHeader.textContent = 'Customer Reviews:';
    restaurantContainer.appendChild(reviewsHeader);

    restaurant.customerReviews.map((review) => {
      const reviewItem = document.createElement('div');
      reviewItem.className = 'review-item';
      reviewItem.innerHTML = `<strong>${review.name}</strong> (${review.date}): <p>${review.review}</p>`;
      restaurantContainer.appendChild(reviewItem);
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteRestoIdb,
      restaurants: {
        id: restaurant.id,
        img: restaurant.pictureId,
        name: restaurant.name,
        address: restaurant.address,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;