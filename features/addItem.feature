Feature: Sauce Add Item to Cart Test

    Scenario: User Succesfully Add Item to Cart
        Given user is already log in
        When user click add to cart button
        Then the add to cart button should change into "Remove" button
        And the cart counter shoud increase by 1

     Scenario: Verify Item Succesfully Added to Cart
        Given user is already in inventory page
        When user click cart icon
        Then user should redirect to Cart Page
        And the added item description should shown "Sauce Labs Backpack"
        