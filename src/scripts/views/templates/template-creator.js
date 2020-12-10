import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail" tabindex="0">
<h2 class="restaurant__title" tabindex="0">${restaurant.name}</h2>
<img class="restaurant__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />

<div class="restaurant__info">
  <h3 tabindex="0">Rating</h3>
  <p tabindex="0">${restaurant.rating} ☆</p>
</div>

<div class="restaurant__info">
  <h3 tabindex="0">Address</h3>
  <p tabindex="0">${`${restaurant.address}, ${restaurant.city}`}</p>
</div>

<div class="restaurant__category">
  <h3 tabindex="0">Category</h3>
  ${restaurant.categories
    .map(
      (category) => `
        <p tabindex="0" class="category">${category.name}</p>
      `,
    )
    .join('')}
</div>

<div class="restaurant__overview">
  <h3 tabindex="0">Description</h3>
  <p tabindex="0">${restaurant.description}</p>
</div>
<div class="row">
  <div div class="column">
    <h3 class="foods" tabindex="0">Foods (${restaurant.menus.foods.length} Items)</h3>
    ${restaurant.menus.foods
    .map(
      (food) => `
      <p tabindex="0">${food.name}</p>
    `,
    )
    .join('')}
  </div>

  <div class="column">
    <h3 tabindex="0" class="drinks" tabindex="0">Drinks (${restaurant.menus.drinks.length} Items)</h3>
    ${restaurant.menus.drinks
    .map(
      (drink) => `
      <p tabindex="0">${drink.name}</p>
    `,
    )
    .join('')}
  </div>
</div>

<div class="restaurant__review">
  <h3 tabindex="0">Customer Reviews (${restaurant.customerReviews.length} Reviewers)</h3>
  ${restaurant.customerReviews
    .map(
      (review) => `
      <p tabindex="0">${review.name} : 
      ${review.review}
      (${review.date})</p>
    `,
    ).join('')}
</div>
</div>
`;

function createRestaurantsTemplate(restaurants) {
  return `
    <article class="post-item" tabindex="0">
    <div class="post-header">
        <p class="post-item__city">${restaurants.city}</p>
    </div>
        <img class="post-item__thumbnail lazyload" crossorigin="anonymous" data-src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}">
        <div class="post-item__content">
            <h1 class="post-item__title"><a href="${`/#/detail/${restaurants.id}`}">${restaurants.name}</a></h1>
            <h2 class="post-item__rating"> Rating : ${restaurants.rating} ☆</h2>
            <p class="post-item__description">${restaurants.description}</p>
        </div>
    </article>
  `;
}

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
  createRestaurantsTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
