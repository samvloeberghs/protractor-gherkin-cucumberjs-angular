Feature: Test Calculator Component

  Scenario Outline: Should calculate the result and set it

    Given <first> is the first and <second> is the second value
    When calculating result
    Then the result is <result>

  Examples:
  | first | second | result |
  |  1    |  2     |  3     |
  |  4    |  5     |  9     |
