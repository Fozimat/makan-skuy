const assert = require('assert');

Feature('unLiking Restaurants');

Before((I) => {
  I.amOnPage('/#/like');
});

Scenario('unliking one restaurant', async (I) => {
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
  
  I.click(likedRestaurantTitle);
  
  I.seeElement('#likeButton');
  I.click('#likeButton');
  
  I.amOnPage('/#/like');
  I.seeElement('#posts');
  const unLikedRestaurant = await I.grabTextFrom('#posts');
  
  const emptyLabel = 'You have not chosen your favorite restaurant';
  assert.strictEqual(unLikedRestaurant, emptyLabel);
});
