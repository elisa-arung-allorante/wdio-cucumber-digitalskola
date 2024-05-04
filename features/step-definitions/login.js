import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

Given(/^user is on sauce login page/, async () => {
  await browser.url('https://www.saucedemo.com/')
});

When(/^user input username with "(.*)"$/, async (username) => {
  await browser.$("input#user-name").setValue(username)
})

When(/^user input password with "(.*)"$/, async (password) => {
  await browser.$("input#password").setValue(password)
})

When(/^user click login button/, async () => {
  const loginButton = browser.$("input#login-button")
  await loginButton.click()
})

Then(/^user should redirect to inventory page/, async () => {
  await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
})

Given(/^user already in inventory page/, async () => {
  await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
})

Then(/^user should see page title "(.*)"$/, async (title) => {
  const pageTitle = await browser.$("[data-test='title']")
  await expect(pageTitle).toHaveText(title)
})

Then(/^user should be able to click add to cart button/, async () => {
  const addToCartButton = await browser.$('button#add-to-cart-sauce-labs-backpack')
  await expect(addToCartButton).toBeClickable()
})




