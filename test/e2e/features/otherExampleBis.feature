Feature: EPC Score rules

  Scenario Outline: wallonie legislation
    Given A estate is in wallonia when the zip code is between <LowerBond> and <UpperBond>
      | LowerBond | UpperBond |
      | 1300      | 1499      |
      | 4000      | 7999      |
    Then the estate is under <wallonie legislation> when the <zip code> is between the given bonds
    Examples:
      | zip code | wallonie legislation |
      | 1299     | no                   |
      | 1300     | yes                  |
      | 1301     | yes                  |
      | 1498     | yes                  |
      | 1499     | yes                  |
      | 1500     | no                   |
      | 3999     | no                   |
      | 4000     | yes                  |
      | 4001     | yes                  |
      | 7998     | yes                  |
      | 7999     | yes                  |
      | 8000     | no                   |

  Scenario: Energy section applicability I
    When the estate is under wallonie legislation
    And the transactions one of the following
      | BUY  |
      | RENT |
    And the estate category is one of the following
      | HOUSE          |
      | OFFICE         |
      | INDUSTRY       |
      | COMMERCIAL     |
      | APARTMENT      |
      | OTHER          |
      | HOMES_TO_BUILD |
    Then epc score is compulsory

  Scenario: Energy section applicability II
    When the estate is under wallonie legislation
    And the transactions one of the following
      | BUY  |
      | RENT |
    And the estate category is one of the following
      | LAND            |
      | GARAGE          |
      | HOUSE_GROUP     |
      | APARTMENT_GROUP |
    Then the epc score is NOT compulsory

  Scenario: Energy section applicability III
    When the epc score is compulsory
    And there is no value for epc score
    Then a 'Not disclosed' message is shown
    And a 'Non communique' message or similar is shown in the image

  Scenario: Fields to be shown
    When the estate is under wallonie legislation
    Then the energy fields follow the following rules
      | Field name                              | rules      |
      | EPCScore                                | compulsory |
      | energyConsumption                       | optional   |
      | yearlyTheoreticalTotalEnergyConsumption | optional   |


  Scenario: EPC rule 1
    When EPCScore is not defined explicitly
    And Energy consumption is not defined explicitly
    Then it is displayed as Not Specified


  Scenario: EPC rule 2
    When EPCScore is not defined explicitly
    And Energy consumption is defined explicitly
    Then it is calculated from Energy Consumption


  Scenario Outline: EPC score calculation in wallonia
    When The estate is from wallonia
    And ConsKwhm2 is bigger than <LowerBond> and less or equal than <UpperBond>
    Then epcScore will be the enum <resultEpcScore>
    Examples:
      | LowerBond         | UpperBond         | resultEpcScore |
      | NEGATIVE_INFINITY | 0                 | A++            |
      | 0                 | 45                | A+             |
      | 45                | 85                | A              |
      | 85                | 170               | B              |
      | 170               | 255               | C              |
      | 255               | 340               | D              |
      | 240               | 425               | E              |
      | 425               | 510               | F              |
      | 510               | POSITIVE_INFINITY | G              |
