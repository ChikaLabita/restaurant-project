import CONFIG from '../../globals/config';
const createRestaurantsItem = (restaurant) => `
<div class="restaurant">
<img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.img}" alt="${restaurant.name}" width="100%" height="auto">
<a href="#/detail/${restaurant.id}">
<h1 class="restoNames">${restaurant.name}</h1>
</a>
<p class="restoRating"><i class="fa fa-star star"></i> ${restaurant.rating}</p>
<p class="restoCity"> ${restaurant.address}, ${restaurant.city}</p>
<a href="#/detail/${restaurant.id}" class="more-detail">More Detail</a>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;


export {
  createRestaurantsItem,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};