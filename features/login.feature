Feature: Sauce Demo Login Test

    Scenario: User Succesfully Login
        Given user is on sauce login page
        When user input username with "standard_user"
        And user input password with "secret_sauce"
        And user click login button
        Then user should redirect to inventory page

    Scenario: Validate inventory page loaded succesfully
        Given user already in inventory page
        Then user should see page title "Products"
        And user should be able to click add to cart button