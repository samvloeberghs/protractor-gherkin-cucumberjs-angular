Feature: This features describes our authentication component

  Scenario Outline: The user is using the login form

    Given user clicks the login link
    And <email> is the user email
    And <password> is the user password
    When submitting the form
    Then the form is validated <valid>

    Examples:
      | email         | password             | valid |
      |               |                      | false |
      |               | thisisavalidpassword | false |
      | samkwerri.be  | thisisavalidpassword | false |
      | sam@kwerri.be |                      | false |
      | sam@kwerri.be | thisisavalidpassword | true  |
