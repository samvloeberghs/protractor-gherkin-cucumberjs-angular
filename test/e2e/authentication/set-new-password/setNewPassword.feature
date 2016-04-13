Feature: This feature describe the scenarios of the set new password part of our authentication component

  Scenario Outline: The user is setting a new password ( invalid link )

    Given '<nonce>' is the provided nonce in the email link
    And '<id>' is the id representing the user in the email link
    When using the link to the set new password page
    Then the set new password request is validated '<valid>'

    Examples:
      | id  | nonce         | valid |
      |     |               | false |
      |     | abcdefgh12345 | false |
      | 123 |               | false |
      | 123 | abcdefgh12345 | true  |

  Scenario Outline: The user is setting a new password ( valid link )

    Given user clicks the valid set new password link
    And '<password>' is the provided new password in the set new password form
    And '<repeatPassword>' is the repeated new password in the set new password form
    When submitting the set new password form
    Then the set new password form is validated '<valid>'
    # And the user is redirected to the login page '<valid>'

    Examples:
      | password | repeatPassword | valid |
      |          |                | false |
      | 123      |                | false |
      |          | 123            | false |
      | 123      | 321            | false |
      | 123      | 123            | false |
      | 12345678 | 87654321       | false |
      | 12345678 | 12345678       | true  |
