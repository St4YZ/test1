Feature: End to end Ecommerce validation

    application Regression
    @Regression

    Scenario: Ecommerce products delivery
    Given I open Ecommerce Page
    When I add items to Cart
    And Validate the total prices
    Then select the country submit and verify Thank you

    @Smoke
    Scenario: Filling the form to shop
    Given I open Ecommerce Page
    When I fill the form details
    |name | gender |
    |Makss| Male |
    Then Validate the forms behavior
    And Select the shop page