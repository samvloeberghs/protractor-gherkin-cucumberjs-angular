Feature: This feature describe the scenarios of the forgot password part of our authentication component

  Scenario Outline: The user is using the forgot password form

    Given user clicks the forgot password link
    Given '<email>' is the user email used in the forgot password form
    When submitting the forgot password form
    Then the forgot password form is validated '<valid>'

    Examples:
      | email         | valid |
      |               | false |
      | samkwerri.be  | false |
      | sam@kwerri.be | true  |
