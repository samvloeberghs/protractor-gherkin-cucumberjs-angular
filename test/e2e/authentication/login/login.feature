Feature: This feature describe the scenarios of the login part of our authentication component

  Scenario Outline: The user is using the login form

    Given user clicks the login link
    And '<email>' is the user email in the login form
    And '<password>' is the user password in the login form
    When submitting the login form
    Then the login form is validated '<valid>'

    Examples:
      | email         | password             | valid |
      |               |                      | false |
      |               | thisisavalidpassword | false |
      | samkwerri.be  | thisisavalidpassword | false |
      | sam@kwerri.be |                      | false |
      | sam@kwerri.be | thisisavalidpassword | true  |
