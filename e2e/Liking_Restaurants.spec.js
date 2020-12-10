const assert = require('assert');

Feature('Liking Restaurants');

Before((I) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', (I) => {
  I.seeElement('#posts');
  I.see('You have not chosen your favorite restaurant', '#posts');
});

Scenario('liking one restaurant', async (I) => {
  I.see('You have not chosen your favorite restaurant', '#posts');

  I.amOnPage('/');

  I.seeElement('.post-item__title a');

  const firstRestaurant = locate('.post-item__title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.post-item');
  const likedRestaurantTitle = await I.grabTextFrom('.post-item__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
