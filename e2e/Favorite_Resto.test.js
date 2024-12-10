Feature('Favorite Restaurant Test');

let restaurantId;

Scenario('Checking a restaurant favorite is empty', async ({I}) => {
  I.amOnPage('/#/favorite');
  I.waitForElement('.empty-favorite', 2);
  I.seeElement('.empty-favorite');
  I.see('Sorry, your favorite restaurant is empty.', '.empty-favorite');
});

Scenario('Liking a restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('#resto-item', 2);
  I.seeElement('#resto-item');
  I.click('.more-detail');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  const currentUrl = await I.grabCurrentUrl();
  const match = currentUrl.match(/detail\/(\w+)/);
  if (match) {
    restaurantId = match[1]; 
  } else {
    throw new Error('Restaurant ID could not be extracted from the URL');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurants');
});

Scenario('Unliking a restaurant', async ({ I }) => {
  I.amOnPage(`/#/detail/${restaurantId}`);
  I.waitForElement('#likeButton', 2);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.click('[aria-label="unlike this restaurant"]');
});


