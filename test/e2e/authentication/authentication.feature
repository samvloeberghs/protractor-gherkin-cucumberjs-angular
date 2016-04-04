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


  Scenario Outline: The user is using the registration form

    Given user clicks the registration link
    And <email> is the user email
    And <name> is the user's fullname
    And <password> is the provided password
    And <repeatpassword> is the repeated password
    When submitting the form
    Then the form is validated <valid>
    And the user is redirect to the thank you page <valid>

    Examples:
      | email         | name           | valid |
      |               |                | false |
      |               | Sam Vloeberghs | false |
      | samkwerri.be  | Sam Vloeberghs | false |
      | sam@kwerri.be |                | false |
      | sam@kwerri.be | Sam Vloeberghs | true  |

  Scenario Outline: The user is using the forgot password form

    Given <email> is the user email
    When submitting the form
    Then the form is validated <valid>

    Examples:
      | email         | valid |
      |               | false |
      | samkwerri.be  | false |
      | sam@kwerri.be | true  |

  Scenario Outline: The user is setting a new password ( invalid link )

    Given <nonce> is the provided nonce in the email link
    And <id> is the id representing the user
    When coming on the page
    Then the request is validated <valid>

    Examples:
      | id  | nonce         | valid |
      |     |               | false |
      |     | abcdefgh12345 | false |
      | 123 |               | false |
      | 123 | abcdefgh12345 | true  |

  Scenario Outline: The user is setting a new password ( valid link )

    Given valid link with nonce & user id
    And <password> is the provided new password
    And <repeatpassword> is the repeated new password
    When submitting the form
    Then the form is validated <valid>
    And the user is redirected to the login page <valid>

    Examples:
      | password | repeatpassword | valid |
      |          |                | false |
      | 123      |                | false |
      |          | 123            | false |
      | 123      | 321            | false |
      | 123      | 123            | false |
      | 12345678 | 87654321       | false |
      | 12345678 | 12345678       | true  |

