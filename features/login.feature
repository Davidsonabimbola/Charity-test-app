
Feature: Login functionality
    Background: visit login pre-condition
    @login @visit
    Scenario: sign in by user
        Given I am an anonymous user AND I visit the specific Mercy page
        When I click the sign in button on the Top right section
        Then I am redirected to the Sign In page


    Scenario: wrong email and password
        Given I am an anonymous user AND I am in the Sign In page
        When I indicate wrong email and password
        And I submit the form
        Then I get an error message
    @visit
    Scenario: correct email and password
        # Given I am an anonymous user AND I am in the Sign In page
        When I indicate correct email 'doranth_002@yahoo.com'
        When I indicate correct password 'nomoreYahoo.123'
        And I submit the form
        Then I am redirected to the exact User Profile page
