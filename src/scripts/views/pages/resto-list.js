import CONFIG from '../../globals/config';

const ListResto = {
  async render() {
    return `
    <section class="hero">
        <hero-content></hero-content>
      </section>
        <h1 class="explore-resto">Explore Restaurant</h1>
        <div class="restaurants" id="resto-item"></div>
      `;
  },

  async afterRender() {
    const restaurantsContainer = document.getElementById('resto-item');

    const response = await fetch('https://restaurant-api.dicoding.dev/list');
    const resto = await response.json();

    resto.restaurants.forEach((restaurant) => {
      const imgUrl = `${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}`;
      const restoDiv = document.createElement('div');
      restoDiv.className = 'restaurant';

      const restoImage = document.createElement('img');
      restoImage.className = 'lazyload';
      restoImage.setAttribute('data-src', imgUrl);
      restoImage.alt = restaurant.name;
      restoImage.width = '100%';
      restoImage.height = 'auto';
      restoDiv.appendChild(restoImage);

      const restoName = document.createElement('h1');
      restoName.className = 'restoNames';
      restoName.textContent = restaurant.name;
      restoDiv.appendChild(restoName);

      const ratingStars = Math.round(restaurant.rating);
      for (let i = 0; i < 5; i++) {
        const ratingStar = document.createElement('i');
        ratingStar.className = 'fa fa-star';
        ratingStar.style.color = (i < ratingStars) ? 'gold' : 'lightgray';
        restoDiv.appendChild(ratingStar);
      }

      const restoRating = document.createElement('span');
      restoRating.className = 'restoRating';
      restoRating.textContent = restaurant.rating;
      restoDiv.appendChild(restoRating);

      const restoCity = document.createElement('p');
      restoCity.className = 'restoCity';
      restoCity.textContent = restaurant.city;
      restoDiv.appendChild(restoCity);

      const moreDetail = document.createElement('a');
      moreDetail.href = `#/detail/${restaurant.id}`;
      moreDetail.className = 'more-detail';
      moreDetail.textContent = 'More Detail';
      restoDiv.appendChild(moreDetail);

      restaurantsContainer.appendChild(restoDiv);
    });
  },
};

export default ListResto;