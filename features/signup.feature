Feature: Sign up functionality

    Background: Pre-condition
    @specific @smoke
    Scenario: Navigation to the sign up page
        Given  I am an anonymous user AND I visit the Mercy page
        When I click the Sign Up button on the Top Right section
        Then I am redirected to the Sign Up page
    @smoke
    Scenario Outline: Filling up all the details
        # Given I am an anonymous user AND I am in the Sign Up page
        When I fill in the first name <firstName> correctly
        And I fill in the last name <lastName> correctly
        And I fill in the email <emailAddress> correctly
        And I fill in the password <password> correctly
        And I fill in the confirm password <confirmPassword> correctly
        And I submit the Form
        Then I am redirected to the User Profile page

        Examples:
            | firstName | lastName | emailAddress              | password      | confirmPassword |
            | Johnson   | Nwaodoh  | johnson_nwaodoh@yahoo.com | 101.Mokate001 | 101.Mokate001   |
            | Garba     | Lawal    | ghhema_law@yahoo.com      | 101.Ontogo    | 101.Ontogo      |

    @specific
    Scenario: Filling up the details with an empty required field
        # Given I am an anonymous user AND I am in the Sign Up page
        When I fill in the specific first name "Johnbull" correctly
        And I fill in the specific last name "Bamiteko" correctly
        And I fill in the specific password 'nomoreYahoo.123' correctly
        And I fill in the specific confirm password  'nomoreYahoo.123' correctly
        And I submit the Form
        Then I get an error message indicating that the field is required