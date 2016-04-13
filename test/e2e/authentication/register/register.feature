Feature: This feature describe the scenarios of the register part of our authentication component

  Scenario Outline: The user is using the registration form

    Given user clicks the register link
    And '<name>' is the user name used in the register form
    And '<email>' is the user email used in the register form
    And '<password>' is the provided password used in the register form
    And '<repeatPassword>' is the repeated password used in the register form
    When submitting the register form
    Then the register form is validated '<valid>'
    #And the user is redirect to the thank you page '<valid>'

    Examples:
      | email         | name           | password | repeatPassword | valid |
      |               |                |          |                | false |
      |               | Sam Vloeberghs |          |                | false |
      | samkwerri.be  | Sam Vloeberghs |          |                | false |
      | sam@kwerri.be |                |          |                | false |
      | sam@kwerri.be | Sam Vloeberghs |          |                | false |
      | sam@kwerri.be | Sam Vloeberghs | 1234567  |                | false |
      | sam@kwerri.be | Sam Vloeberghs |          | 1234567        | false |
      | sam@kwerri.be | Sam Vloeberghs | 1234567  | 7654321        | false |
      | sam@kwerri.be | Sam Vloeberghs | 1234567  | 1234567        | true  |
