Feature('Navbar and Sidebar Restaurant Test');

Scenario('Checking a Button SkiptoContent', async ({I}) => {
  I.amOnPage('/');
  I.pressKey('Tab');
  I.seeElement('.skiptomain');
  I.seeElement('a');
  I.click('Skip to content');
});

Scenario('Checking a Navbar', async ({I}) => {
  I.amOnPage('/');
  I.waitForElement('nav', 2);
  I.seeElement('a');
  I.click('PLORESTOYUMMIES!');
  I.wait(2);
  I.amOnPage('/');
});

Scenario('Button Sidebar', async ({ I }) => {
  I.resizeWindow(400, 800);
  I.amOnPage('/');
  I.waitForElement('.menu-button', 2);
  I.seeElement('.menu-button');
  I.click('.menu-button');
  I.seeElement('.sidebar');
  I.click('#close-button');
});

Scenario('Checking a sidebar', async ({I}) => {
  I.resizeWindow(400, 800);
  I.amOnPage('/');
  I.waitForElement('.menu-button', 2);
  I.seeElement('.menu-button');
  I.click('.menu-button');
  I.seeElement('.sidebar');
  I.seeElement('a');
  I.click('Home');
  I.wait(2);
  I.amOnPage('/');
});

