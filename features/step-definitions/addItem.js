import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

Given(/^user is already log in/, async () => {
    await browser.url('https://www.saucedemo.com/')
    await browser.$("input#user-name").setValue("standard_user")
    await browser.$("input#password").setValue("secret_sauce")
    await browser.$('input#login-button').click()
})

When(/^user click add to cart button/, async () => {
    const addButton = browser.$('button#add-to-cart-sauce-labs-backpack')
    await addButton.click()
})

Then(/^the cart counter shoud increase by 1/, async () => {
    const cartItemCounter = await browser.$("[data-test='shopping-cart-badge']")
    await cartItemCounter.waitForDisplayed()
    await expect(cartItemCounter).toHaveText('1')
})

Then(/^the add to cart button should change into "(.*)" button/, async (buttonText) => {
    const removeButton = await browser.$('button#remove-sauce-labs-backpack')
    await expect(removeButton).toBeDisplayed()
    await expect(removeButton).toHaveText(buttonText)
})

Given(/^user is already in inventory page/, async () => {
    await expect(browser).toHaveUrl("https://www.saucedemo.com/inventory.html")
})

When(/^user click cart icon/, async () => {
    const cartButton = await browser.$("[data-test='shopping-cart-link']")
    await cartButton.click()
})

Then(/^user should redirect to Cart Page/,  async() => {
    await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
    const webTitle = await browser.$("[data-test='title']")
    await webTitle.waitForDisplayed()
    await expect(webTitle).toHaveText('Your Cart')
})

Then(/^the added item description should shown "(.*)"$/, async (description) => {
    const itemDescription = await browser.$("[data-test='item-4-title-link']")
    await itemDescription.waitForDisplayed()
    await expect(itemDescription).toHaveText(description)
})




  