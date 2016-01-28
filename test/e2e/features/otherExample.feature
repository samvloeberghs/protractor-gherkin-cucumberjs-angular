Feature: Display estate details for residential segment (House, Apartment, Garage, Other, Land) and business segment (Offices, Business, Industries)

  Background:
    Given we are at the Estate Details of a residential estate Ad


  Scenario: Sections order
    And ad is not an auction
    Then the following sections can be present and displayed in the following order:
      | Header                   |
      | RefID                    |
      | Description              |
      | Map                      |
      | General                  |
      | Interior                 |
      | Fittings and connections |
      | Land                     |
      | Energy                   |
      | Building regulation      |
      | Financial                |
    And the following sections must be present and displayed in the following order:
      | Map                 |
      | General             |
      | Building regulation |
      | Financial           |
      | Agency              |
    And the following sections must not be present:
    # block to find at the end of the document
      | Auction |


  Scenario Outline: Allowed Sections depending on the property type
    And ad is not an auction
    And the property type is <type>
    Then Interior section presence on the page <interior> valid
    And Fittings and connections section presence on the page <fittings> valid
    And Land title section presence on the page <land_title> valid
    And Energy section presence on the page <energy> valid

    Examples:
      | type      | interior | fittings | land_title | energy |
      | HOUSE     | is       | is not   | is         | is     |
      | APARTMENT | is       | is not   | is         | is     |
      | GARAGE    | is not   | is not   | is not     | is     |
      | OTHER     | is       | is not   | is         | is     |
      | LAND      | is not   | is       | is         | is not |



  @NewiOS
  Scenario Outline: Display price label
    Given language is <language>
    When transaction type is <transaction type>
    And price type is <price type>
    Then price label is <price label>
    And secondary price label is <sec price label>

    Examples:
      | language | transaction type | price type     | price label              | sec price label    |
      | EN       | BUY              | Sale price     | Requested sale price     | none               |
      | NL       | BUY              | Sale price     | Vraagprijs               | none               |
      | FR       | BUY              | Sale price     | Prix de vente demandé    | none               |
      | EN       | BUY              | Sale price NEW | Requested sale price     | none               |
      | NL       | BUY              | Sale price NEW | Vraagprijs               | none               |
      | FR       | BUY              | Sale price NEW | Prix de vente demandé    | none               |
      | EN       | BUY              | Sale annuity   | Deposit                  | Monthly annuity    |
      | NL       | BUY              | Sale annuity   | Bouquet                  | Maandelijkse rente |
      | FR       | BUY              | Sale annuity   | Bouquet                  | Rente mensuelle    |
      | EN       | BUY              | Auction        | Reserve price            | none               |
      | NL       | BUY              | Auction        | Instelprijs              | none               |
      | FR       | BUY              | Auction        | Mise à prix              | none               |
      | EN       | BUY              | Auction € 0    | No reserve price         | none               |
      | NL       | BUY              | Auction € 0    | Geen prijsstelling       | none               |
      | FR       | BUY              | Auction € 0    | Pas de mise à prix       | none               |
      | EN       | BUY              | Auction NEW    | New price                | none               |
      | NL       | BUY              | Auction NEW    | Prijs gebracht op        | none               |
      | FR       | BUY              | Auction NEW    | Prix porté à             | none               |
      | EN       | BUY              | Project BG     | none                     | none               |
      | NL       | BUY              | Project BG     | none                     | none               |
      | FR       | BUY              | Project BG     | none                     | none               |
      | EN       | RENT             | Rent price     | Requested monthly rental | none               |
      | NL       | RENT             | Rent price     | Gevraagde Huurprijs      | none               |
      | FR       | RENT             | Rent price     | Loyer mensuel demandé    | none               |
      | EN       | RENT             | Rent price NEW | Requested monthly rental | none               |
      | NL       | RENT             | Rent price NEW | Gevraagde Huurprijs      | none               |
      | FR       | RENT             | Rent price NEW | Loyer mensuel demandé    | none               |


  Scenario Outline: Display BCI estate price in header section
    Given language is <language>
    And property type is OFFICES, BUSINESSES or INDUSTRIES
    And the transaction type is <transaction type>
    And the price search parameter is <BCI price>
    Then the price unit is <price unit>
    And the secondary price unit is <second price unit>

    Examples:
      | transaction type | BCI price    | language | price unit | second price unit |
      | BUY              | Total price  | EN       | €          | €/m²              |
      | BUY              | Total price  | NL       | €          | €/m²              |
      | BUY              | Total price  | FR       | €          | €/m²              |
      | BUY              | Price per m² | EN       | €/m²       | €                 |
      | BUY              | Price per m² | NL       | €/m²       | €                 |
      | BUY              | Price per m² | FR       | €/m²       | €                 |
      | RENT             | Montly       | EN       | €/month    | €/year            |
      | RENT             | Montly       | NL       | €/maand    | €/jaar            |
      | RENT             | Montly       | FR       | €/mois     | €/an              |
      | RENT             | Annual       | EN       | €/year     | €/m²/year         |
      | RENT             | Annual       | NL       | €/jaar     | €/m2/jaar         |
      | RENT             | Annual       | FR       | €/an       | €/m²/an           |
      | RENT             | m²/year      | EN       | €/m²/year  | €/year            |
      | RENT             | m²/year      | NL       | €/m²/jaar  | €/jaar            |
      | RENT             | m²/year      | FR       | €/m²/an    | €/an              |

  @custom
  Scenario Outline: Show sales information
    Given language is <language>
    And ad has <info>
    And <type> is true
    Then we should see a <sticker> sticker on the topleft of the images
    And if there's a <price> it should be displayed as the price label
    And if it has a <date>
    Then above the price label there should be another label saying <labelInformation>

    Examples:
      | language | info       | type   | sticker  | price  | date     | labelInformation               |
      | en       | soldInfo   | sold   | Sold     |        | 20/10/14 | Last requested price in 2014   |
      | nl       | soldInfo   | sold   | Verkocht |        | 21/12/14 | Laatst gevraagde prijs in 2014 |
      | fr       | soldInfo   | sold   | Vendu    |        | 27/01/14 | Dernier prix demandé en 2014   |
      | en       | rentedInfo | rented | Let      | 680    | 13/02/15 | Rented in 02/2015 at           |
      | nl       | rentedInfo | rented | Verhuurd | 680    | 13/02/15 | Verhuurd in 02/2015 aan        |
      | fr       | rentedInfo | rented | Loué     | 680    | 13/02/15 | Loué en 02/2015 à              |
      | en       | rentedInfo | rented | Let      |        | 12/03/15 | Last requested price in 2015   |
      | nl       | rentedInfo | rented | Verhuurd |        | 12/03/15 | Laatst gevraagde prijs in 2015 |
      | fr       | rentedInfo | rented | Loué     |        | 12/03/15 | Dernier prix demandé en 2015   |
      | en       | soldInfo   | sold   | Sold     | 160000 | 01/01/15 | Sold in 01/2015 at             |
      | nl       | soldInfo   | sold   | Verkocht | 160000 | 01/01/15 | Verkocht in 01/2015 aan        |
      | fr       | soldInfo   | sold   | Vendu    | 160000 | 01/01/15 | Vendu en 01/2015 à             |


  Scenario Outline: Display Auction Info in Header Section
    Given language is <language>
    And ad is an auction
    And the auction state is <auction state>
    Then there must be price label <price label> above the price
    And there must be a different label if the <auction state> is firstSession and the price is 0

    Examples:
      | auction state | language | price label                 |
      | firstSession  | en       | Reserve price               |
      | firstSession  | fr       | Mise à prix                 |
      | firstSession  | nl       | Instelprijs                 |
      | overbid       | en       | Adjudication price (S.H.B.) |
      | overbid       | fr       | Adjugé (S.R.S.) à           |
      | overbid       | nl       | Toegewezen (O.V.H.B.) aan   |
      | finalSale     | en       | New price                   |
      | finalSale     | fr       | Prix porté à                |
      | finalSale     | nl       | Prijs gebracht op           |

    Examples:
      | auction state | language | price label        |
      | firstSession  | en       | No reserve price   |
      | firstSession  | fr       | Pas de mise à prix |
      | firstSession  | nl       | Geen prijsstelling |

  Scenario Outline: Display Life Annuity Info
    Given language is <language>
    And ad is an life annuity
    Then sales/rent price should not be displayed
    And the LumpSum (deposit) price should be displayed with label <LumpSumLabel>
    And the Monthly Rental Price should be displayed with label <MonthlyRentalLabel>

    Examples:
      | language | LumpSumLabel     | MonthlyRentalLabel |
      | en       | Deposit          | Monthly Annuity    |
      | fr       | Bouquet          | Rente mensuelle    |
      | nl       | Eenmalige kosten | Maandelijkse rente |

  Scenario Outline: Display Specific info for land
    Given the main type of this add is Land
    Then besides the main sale price we should display the price per m²
    And we should display the surface area of plot in are or hectare below the property type if info is available
    And we should display the total groundfloor buildable in m² below the surface area of plot if info is available


  Scenario: Display Map section
  # ToDo: Add section info

  Scenario Outline: General section
    Given the transaction is <transaction>
    And main type is <type>
    Then netFloorArea <netFloorArea> valid
    And frontageNumber <frontageNumber> valid
    And floorsNumber <floorsNumber> valid
    And dwellingsNumber <dwellingsNumber> valid
    And outbuildingsNumber <outbuildingsNumber> valid
    And insideParkingNumber <insideParkingNumber> valid
    And outsideParkingNumber <outsideParkingNumber> valid
    And buildingCondition <buildingCondition> valid
    And facadeStreetWidth <facadeStreetWidth> valid
    And floorOfProperty <floorOfProperty> valid
    And yearOfConstruction <yearOfConstruction> valid
    And caretaker <caretaker> valid
    And disabledAccess <disabledAccess> valid
    And lift <lift> valid
    And firstOccupation <firstOccupation> valid
    And furnished <furnished> valid
    And surroundingEnvironment <surroundingEnvironment> valid
    And districtOrPlaceName <districtOrPlaceName> valid
    And buildingName <buildingName> valid
    And availability <availability> valid
    And availabilityDate <availabilityDate> valid
    And AvailableFloorArea <AvailableFloorArea> valid #Comment from JFB : it is <Surfacedisponible>


    Examples:
      | transaction | type       | netFloorArea | frontageNumber | floorsNumber | dwellingsNumber | outbuildingsNumber | insideParkingNumber | outsideParkingNumber | buildingCondition | facadeStreetWidth | floorOfProperty | yearOfConstruction | caretaker | disabledAccess | lift   | firstOccupation | furnished | surroundingEnvironment | districtOrPlaceName | buildingName | availability | availabilityDate | AvailableFloorArea |
      | BUY         | HOUSE      | is           | is             | is           | is              | is                 | is                  | is                   | is                | is                | is not          | is                 | is not    | is             | is     | is              | is        | ??                     | ??                  | ??           | ??           | ??               | is not             |
      | BUY         | APARTMENT  | is           | is             | is           | is              | is                 | is                  | is                   | is                | is                | is              | is                 | is        | is             | is     | is              | is        | ??                     | ??                  | ??           | ??           | ??               | is not             |
      | BUY         | GARAGE     | is           | is not         | is not       | is not          | is not             | is                  | is                   | is not            | is not            | is not          | is                 | is not    | is not         | is not | is not          | is not    | ??                     | ??                  | ??           | ??           | ??               | is not             |
      | BUY         | OTHER      | is           | is             | is           | is              | is                 | is                  | is                   | is                | is                | is not          | is                 | is not    | is             | is     | is              | is        | ??                     | ??                  | ??           | ??           | ??               | is not             |
      | BUY         | LAND       | is not       | is not         | is not       | is not          | is not             | is not              | is not               | is not            | is not            | is not          | is not             | is not    | is not         | is not | is not          | is not    | ??                     | ??                  | ??           | ??           | ??               | is not             |
      | BUY         | OFFICES    | is           | is             | is           | is              | is                 | is                  | is                   | is                | is not            | is not          | is                 | is not    | is             | is     | is              | is        | is                     | is                  | is           | is           | is               | is                 |
      | BUY         | BUSINESS   | is           | is             | is           | is              | is                 | is                  | is                   | is                | is not            | is not          | is                 | is not    | is             | is     | is              | is        | is                     | is                  | is           | is           | is               | is                 |
      | BUY         | INDUSTRIES | is           | is             | is not       | is              | is not             | is                  | is                   | is                | is not            | is not          | is                 | is not    | is             | is     | is              | is not    | is                     | is                  | is not       | is           | is               | is                 |
      | RENT        | HOUSE      | is           | is             | is           | is              | is                 | is                  | is                   | is                | is                | is not          | is                 | is not    | is             | is     | is              | is        | ??                     | ??                  | ??           | ??           | ??               | is not             |
      | RENT        | APARTMENT  | is           | is             | is           | is              | is                 | is                  | is                   | is                | is                | is              | is                 | is        | is             | is     | is              | is        | ??                     | ??                  | ??           | ??           | ??               | is not             |
      | RENT        | GARAGE     | is           | is not         | is not       | is not          | is not             | is                  | is                   | is not            | is not            | is not          | is                 | is not    | is not         | is not | is not          | is not    | ??                     | ??                  | ??           | ??           | ??               | is not             |
      | RENT        | OTHER      | is           | is             | is           | is              | is                 | is                  | is                   | is                | is                | is not          | is                 | is not    | is             | is     | is              | is        | ??                     | ??                  | ??           | ??           | ??               | is not             |
      | RENT        | OFFICES    | is           | is             | is           | is              | is                 | is                  | is                   | is                | is not            | is not          | is                 | is not    | is             | is     | is              | is        | is                     | is                  | is           | is           | is               | is                 |
      | RENT        | BUSINESS   | is           | is             | is           | is              | is                 | is                  | is                   | is                | is not            | is not          | is                 | is not    | is             | is     | is              | is        | is                     | is                  | is           | is           | is               | is                 |
      | RENT        | INDUSTRIES | is           | is             | is not       | is              | is not             | is                  | is                   | is                | is not            | is not          | is                 | is not    | is             | is     | is              | is not    | is                     | is                  | is not       | is           | is               | is                 |

  Scenario Outline: Interior section
    Given the transaction is <transaction>
    And main type is <type>
    Then bedrooms <bedrooms> valid
    And bedroom1m2 <bedroom1m2> valid
    And bedroom2m2 <bedroom2m2> valid
    And bedroom3m2 <bedroom3m2> valid
    And bedroom4m2 <bedroom4m2> valid
    And bedroom5m2 <bedroom5m2> valid
    And dressingRoom <dressingRoom> valid
    And bathroomNumber <bathroomNumber> valid
    And showerRoomNumber <showerRoomNumber> valid
    And toiletsNumber <toiletsNumber> valid
    And amountAccessDoor <amountAccessDoor> valid
    And amountSectionalDoor <amountSectionalDoor> valid
    And amountSlidingDoor <amountSlidingDoor> valid
    And amountLoadingBay <amountLoadingBay> valid
    And amountCoveredBays <amountCoveredBays> valid
    And amountDockLeveler <amountDockLeveler> valid
    And kitchenm2 <kitchenm2> valid
    And kitchenSetup <kitchenSetup> valid
    And livingRoomProperty <livingRoomProperty> valid
    And livingRoomm2 <livingRoomm2> valid
    And diningRoomProperty <diningRoomProperty> valid
    And diningRoomm2 <diningRoomm2> valid
    And atticm2 <atticm2> valid
    And atticProperty <atticProperty> valid
    And isolatedAtticProperty <isolatedAtticProperty> valid
    And atticAccessibleWithFixedStairs <atticAccessibleWithFixedStairs> valid
    And cellarProperty <cellarProperty> valid
    And cellarm2 <cellarm2> valid
    And studyProperty <studyProperty> valid
    And studym2 <studym2> valid
    And workSpaceProperty <workSpaceProperty> valid
    And workSpacem2 <workSpacem2> valid
    And utilityRoom <utilityRoom> valid
    And intercom <intercom> valid
    And receptionDesk <receptionDesk> valid
    And secureAccessAlarm <secureAccessAlarm> valid
    And reinforcedDoor <reinforcedDoor> valid
    And sauna <sauna> valid
    And jacuzzi <jacuzzi> valid
    And fireplaceNumber <fireplaceNumber> valid
    And floorAreaOfShowroom <floorAreaOfShowroom> valid
    And widthOfDisplayWindow <widthOfDisplayWindow> valid
    And availableFloorArea <availableFloorArea> valid
    And headroom <headroom> valid
    And maxAvailableHeight <maxAvailableHeight> valid
    And minAvailableHeight <minAvailableHeight> valid
    And internalFixturesAndFittings <internalFixturesAndFittings> valid
    And miscellaneousFixturesAndFittings <miscellaneousFixturesAndFittings> valid
    And smallPets <smallPets> valid
    And bigPets <bigPets> valid

    Examples:
      | transaction | type       | bedrooms | bedroom1m2 | bedroom2m2 | bedroom3m2 | bedroom4m2 | bedroom5m2 | dressingRoom | bathroomNumber | showerRoomNumber | toiletsNumber | amountAccessDoor | amountSectionalDoor | amountSlidingDoor | amountLoadingBay | amountCoveredBays | amountDockLeveler | kitchenm2 | kitchenSetup | livingRoomProperty | livingRoomm2 | diningRoomProperty | diningRoomm2 | atticm2 | atticProperty | isolatedAtticProperty | atticAccessibleWithFixedStairs | cellarProperty | cellarm2 | studyProperty | studym2 | workSpaceProperty | workSpacem2 | utilityRoom | intercom | receptionDesk | secureAccessAlarm | reinforcedDoor | sauna  | jacuzzi | fireplaceNumber | floorAreaOfShowroom | widthOfDisplayWindow | headroom | maxAvailableHeight | minAvailableHeight | internalFixturesAndFittings | miscellaneousFixturesAndFittings | smallPets | bigPets |
      | BUY         | HOUSE      | is       | is         | is         | is         | is         | is         | is           | is             | is               | is            | is not           | is not              | is not            | is not           | is not            | is not            | is        | is           | is                 | is           | is                 | is           | is      | is            | is                    | is                             | is             | is       | is            | is      | is                | is          | is          | is       | is not        | is                | is             | is     | is      | is              | is not              | is not               | is not   | is not             | is not             | is not                      | is not                           | is not    | is not  |
      | BUY         | APARTMENT  | is       | is         | is         | is         | is         | is         | is           | is             | is               | is            | is not           | is not              | is not            | is not           | is not            | is not            | is        | is           | is                 | is           | is                 | is           | is      | is            | is                    | is                             | is             | is       | is            | is      | is                | is          | is          | is       | is not        | is                | is             | is     | is      | is              | is not              | is not               | is not   | is not             | is not             | is not                      | is not                           | is not    | is not  |
      | BUY         | GARAGE     | is not   | is not     | is not     | is not     | is not     | is not     | is not       | is not         | is not           | is not        | is not           | is not              | is not            | is not           | is not            | is not            | is not    | is not       | is not             | is not       | is not             | is not       | is not  | is not        | is not                | is not                         | is not         | is not   | is not        | is not  | is not            | is not      | is not      | is not   | is not        | is not            | is not         | is not | is not  | is not          | is not              | is not               | is not   | is not             | is not             | is not                      | is not                           | is not    | is not  |
      | BUY         | OTHER      | is       | is         | is         | is         | is         | is         | is           | is             | is               | is            | is not           | is not              | is not            | is not           | is not            | is not            | is        | is           | is                 | is           | is                 | is           | is      | is            | is                    | is                             | is             | is       | is            | is      | is                | is          | is          | is       | is not        | is                | is             | is     | is      | is              | is not              | is not               | is not   | is not             | is not             | is not                      | is not                           | is not    | is not  |
      | BUY         | LAND       | is not   | is not     | is not     | is not     | is not     | is not     | is not       | is not         | is not           | is not        | is not           | is not              | is not            | is not           | is not            | is not            | is not    | is not       | is not             | is not       | is not             | is not       | is not  | is not        | is not                | is not                         | is not         | is not   | is not        | is not  | is not            | is not      | is not      | is not   | is not        | is not            | is not         | is not | is not  | is not          | is not              | is not               | is not   | is not             | is not             | is not                      | is not                           | is not    | is not  |
      | BUY         | OFFICES    | is not   | is not     | is not     | is not     | is not     | is not     | is not       | is not         | is not           | is            | is not           | is not              | is not            | is not           | is not            | is not            | is not    | is not       | is not             | is not       | is not             | is not       | is not  | is not        | is not                | is not                         | is not         | is not   | is not        | is not  | is                | is          | is not      | is       | is            | is                | is             | is not | is not  | is not          | is                  | is                   | is       | is not             | is not             | is                          | is                               | is not    | is not  |
      | BUY         | BUSINESS   | is       | is not     | is not     | is not     | is not     | is not     | is not       | is not         | is not           | is            | is not           | is not              | is not            | is not           | is not            | is not            | is        | is           | is not             | is not       | is not             | is not       | is      | is            | is not                | is not                         | is             | is       | is            | is      | is                | is          | is not      | is       | is not        | is                | is             | is not | is not  | is not          | is                  | is                   | is       | is not             | is not             | is                          | is                               | is not    | is not  |
      | BUY         | INDUSTRIES | is not   | is not     | is not     | is not     | is not     | is not     | is not       | is not         | is not           | is            | is               | is                  | is                | is               | is                | is                | is not    | is not       | is not             | is not       | is not             | is not       | is not  | is not        | is not                | is not                         | is not         | is not   | is            | is      | is not            | is not      | is not      | is       | is not        | is                | is             | is not | is not  | is not          | is                  | is not               | is not   | is                 | is                 | is                          | is                               | is not    | is not  |
      | RENT        | HOUSE      | is       | is         | is         | is         | is         | is         | is           | is             | is               | is            | is not           | is not              | is not            | is not           | is not            | is not            | is        | is           | is                 | is           | is                 | is           | is      | is            | is                    | is                             | is             | is       | is            | is      | is                | is          | is          | is       | is not        | is                | is             | is     | is      | is              | is not              | is not               | is not   | is not             | is not             | is not                      | is not                           | is        | is      |
      | RENT        | APARTMENT  | is       | is         | is         | is         | is         | is         | is           | is             | is               | is            | is not           | is not              | is not            | is not           | is not            | is not            | is        | is           | is                 | is           | is                 | is           | is      | is            | is                    | is                             | is             | is       | is            | is      | is                | is          | is          | is       | is not        | is                | is             | is     | is      | is              | is not              | is not               | is not   | is not             | is not             | is not                      | is not                           | is        | is      |
      | RENT        | GARAGE     | is not   | is not     | is not     | is not     | is not     | is not     | is not       | is not         | is not           | is not        | is not           | is not              | is not            | is not           | is not            | is not            | is not    | is not       | is not             | is not       | is not             | is not       | is not  | is not        | is not                | is not                         | is not         | is not   | is not        | is not  | is not            | is not      | is not      | is not   | is not        | is not            | is not         | is not | is not  | is not          | is not              | is not               | is not   | is not             | is not             | is not                      | is not                           | is not    | is not  |
      | RENT        | OTHER      | is       | is         | is         | is         | is         | is         | is           | is             | is               | is            | is not           | is not              | is not            | is not           | is not            | is not            | is        | is           | is                 | is           | is                 | is           | is      | is            | is                    | is                             | is             | is       | is            | is      | is                | is          | is          | is       | is not        | is                | is             | is     | is      | is              | is not              | is not               | is not   | is not             | is not             | is not                      | is not                           | is        | is      |
      | RENT        | OFFICES    | is not   | is not     | is not     | is not     | is not     | is not     | is not       | is not         | is not           | is            | is not           | is not              | is not            | is not           | is not            | is not            | is not    | is not       | is not             | is not       | is not             | is not       | is not  | is not        | is not                | is not                         | is not         | is not   | is not        | is not  | is                | is          | is not      | is       | is            | is                | is             | is not | is not  | is not          | is                  | is                   | is       | is not             | is not             | is                          | is                               | is not    | is not  |
      | RENT        | BUSINESS   | is       | is not     | is not     | is not     | is not     | is not     | is not       | is not         | is not           | is            | is not           | is not              | is not            | is not           | is not            | is not            | is        | is           | is not             | is not       | is not             | is not       | is      | is            | is not                | is not                         | is             | is       | is            | is      | is                | is          | is not      | is       | is not        | is                | is             | is not | is not  | is not          | is                  | is                   | is       | is not             | is not             | is                          | is                               | is not    | is not  |
      | RENT        | INDUSTRIES | is not   | is not     | is not     | is not     | is not     | is not     | is not       | is not         | is not           | is            | is               | is                  | is                | is               | is                | is                | is not    | is not       | is not             | is not       | is not             | is not       | is not  | is not        | is not                | is not                         | is not         | is not   | is            | is      | is not            | is not      | is not      | is       | is not        | is                | is             | is not | is not  | is not          | is                  | is not               | is not   | is                 | is                 | is                          | is                               | is not    | is not  |


  @newWS
  Scenario Outline: Fixtures, fittings and connections section
    Given the transaction is <transaction>
    And main type is <type>
    Then  gasWaterElectricity <gasWaterElectricity> valid
    And connectionToSewerNetwork <connectionToSewerNetwork> valid
    And connectionPossible <connectionPossible> valid
    And cableTV <cableTV> valid

    Examples:
      | transaction | type       | gasWaterElectricity | connectionToSewerNetwork | connectionPossible | cableTV |
      | BUY         | HOUSE      | is                  | is                       | is not             | is      |
      | BUY         | APARTMENT  | is                  | is not                   | is not             | is      |
      | BUY         | GARAGE     | is                  | is not                   | is not             | is not  |
      | BUY         | OTHER      | is                  | is                       | is not             | is      |
      | BUY         | LAND       | is                  | is                       | is                 | is      |
      | BUY         | OFFICES    | is                  | is                       | is not             | is      |
      | BUY         | BUSINESS   | is                  | is                       | is not             | is      |
      | BUY         | INDUSTRIES | is                  | is                       | is not             | is      |
      | RENT        | HOUSE      | is                  | is                       | is not             | is      |
      | RENT        | APARTMENT  | is                  | is not                   | is not             | is      |
      | RENT        | GARAGE     | is                  | is not                   | is not             | is not  |
      | RENT        | OTHER      | is                  | is                       | is not             | is      |
      | RENT        | OFFICES    | is                  | is                       | is not             | is      |
      | RENT        | BUSINESS   | is                  | is                       | is not             | is      |
      | RENT        | INDUSTRIES | is                  | is                       | is not             | is      |

  Scenario Outline: Land section
    Given the transaction is <transaction>
    And main type is <type>
    Then surfaceAreaOfPlot <surfaceAreaOfPlot> valid
    And depthOfPlot <depthOfPlot> valid
    And widthOfPlotToStreet <widthOfPlotToStreet> valid
    And landFacingStreet <landFacingStreet> valid
    And flatLand <flatLand> valid
    And plotToRear <plotToRear> valid
    And holidayProperty <holidayProperty> valid
    And areaOfGarden <areaOfGarden> valid
    And orientationGarden <orientationGarden> valid
    And terrace <terrace> valid
    And terracem2 <terracem2> valid
    And orientationTerrace <orientationTerrace> valid
    And swimmingPool <swimmingPool> valid

    Examples:
      | transaction | type       | surfaceAreaOfPlot | depthOfPlot | widthOfPlotToStreet | landFacingStreet | flatLand | plotToRear | holidayProperty | areaOfGarden | orientationGarden | terrace | terracem2 | orientationTerrace | swimmingPool |
      | BUY         | HOUSE      | is                | is          | is                  | is               | is       | is         | is              | is           | is                | is      | is        | is                 | is           |
      | BUY         | APARTMENT  | is                | is          | is                  | is               | is       | is         | is              | is           | is                | is      | is        | is                 | is           |
      | BUY         | GARAGE     | is not            | is not      | is not              | is not           | is not   | is not     | is not          | is not       | is not            | is not  | is not    | is not             | is not       |
      | BUY         | OTHER      | is                | is          | is                  | is               | is       | is         | is              | is           | is                | is      | is        | is                 | is           |
      | BUY         | LAND       | is                | is          | is                  | is               | is       | is         | is              | is not       | is not            | is not  | is not    | is not             | is not       |
      | BUY         | OFFICES    | is                | is not      | is not              | is not           | is not   | is not     | is not          | is           | is                | is      | is        | is                 | is not       |
      | BUY         | BUSINESS   | is                | is not      | is not              | is not           | is not   | is not     | is not          | is           | is                | is      | is        | is                 | is not       |
      | BUY         | INDUSTRIES | is                | is not      | is not              | is not           | is not   | is not     | is not          | is not       | is not            | is not  | is not    | is not             | is not       |
      | RENT        | HOUSE      | is                | is          | is                  | is               | is       | is         | is              | is           | is                | is      | is        | is                 | is           |
      | RENT        | APARTMENT  | is                | is          | is                  | is               | is       | is         | is              | is           | is                | is      | is        | is                 | is           |
      | RENT        | GARAGE     | is not            | is not      | is not              | is not           | is not   | is not     | is not          | is not       | is not            | is not  | is not    | is not             | is not       |
      | RENT        | OTHER      | is                | is          | is                  | is               | is       | is         | is              | is           | is                | is      | is        | is                 | is           |
      | RENT        | OFFICES    | is                | is not      | is not              | is not           | is not   | is not     | is not          | is           | is                | is      | is        | is                 | is not       |
      | RENT        | BUSINESS   | is                | is not      | is not              | is not           | is not   | is not     | is not          | is           | is                | is      | is        | is                 | is not       |
      | RENT        | INDUSTRIES | is                | is not      | is not              | is not           | is not   | is not     | is not          | is not       | is not            | is not  | is not    | is not             | is not       |

  Scenario Outline: Energy section
    Given the transaction is <transaction>
    And main type is <type>
    Then energyConsumption <energyConsumption> valid
    And cO2emission <cO2emission> valid
    And ePCreferenceNumber <ePCreferenceNumber> valid
    And e_level <e_level> valid
    And k_level <k_level> valid
    And heating <heating> valid
    And commonHeatingWater <commonHeatingWater> valid
    And doubleGlazing <doubleGlazing> valid
    And airConditioning <airConditioning> valid
    And heatPump <heatPump> valid
    And photovoltaicSolarPanels <photovoltaicSolarPanels> valid
    And thermicSolarPanels <thermicSolarPanels> valid
    And inspectionReportOfTheElectricalInstallation <inspectionReportOfTheElectricalInstallation> valid
    And conformityCertificationForFuelTanks <conformityCertificationForFuelTanks> valid
    And freeEPCdescription <freeEPCdescription> valid

    Examples:
      | transaction | type       | energyConsumption | cO2emission | ePCreferenceNumber | e_level | k_level | heating | commonHeatingWater | doubleGlazing | airConditioning | heatPump | photovoltaicSolarPanels | thermicSolarPanels | inspectionReportOfTheElectricalInstallation | conformityCertificationForFuelTanks | freeEPCdescription |
      | BUY         | HOUSE      | is                | is          | is                 | is      | is      | is      | is not             | is            | is              | is       | is                      | is                 | is                                          | is                                  | is                 |
      | BUY         | APARTMENT  | is                | is          | is                 | is      | is      | is      | is                 | is            | is              | is       | is                      | is                 | is                                          | is not                              | is not             |
      | BUY         | GARAGE     | is not            | is not      | is not             | is not  | is not  | is      | is not             | is not        | is not          | is not   | is not                  | is not             | is not                                      | is not                              | is not             |
      | BUY         | OTHER      | is                | is          | is                 | is      | is      | is      | is                 | is            | is              | is       | is                      | is                 | is                                          | is                                  | is                 |
      | BUY         | LAND       | is not            | is not      | is not             | is not  | is not  | is not  | is not             | is not        | is not          | is not   | is not                  | is not             | is not                                      | is not                              | is not             |
      | BUY         | OFFICES    | is                | is not      | is                 | is      | is      | is      | is                 | is            | is              | is       | is                      | is                 | is                                          | is not                              | is not             |
      | BUY         | BUSINESS   | is                | is not      | is                 | is      | is      | is      | is                 | is            | is              | is       | is                      | is                 | is                                          | is                                  | is not             |
      | BUY         | INDUSTRIES | is not            | is not      | is                 | is not  | is not  | is      | is not             | is            | is              | is       | is                      | is                 | is not                                      | is not                              | is not             |
      | RENT        | HOUSE      | is                | is          | is                 | is      | is      | is      | is not             | is            | is              | is       | is                      | is                 | is                                          | is                                  | is not             |
      | RENT        | APARTMENT  | is                | is          | is                 | is      | is      | is      | is                 | is            | is              | is       | is                      | is                 | is                                          | is not                              | is not             |
      | RENT        | GARAGE     | is not            | is not      | is not             | is not  | is not  | is      | is not             | is not        | is not          | is not   | is not                  | is not             | is not                                      | is not                              | is not             |
      | RENT        | OTHER      | is                | is          | is                 | is      | is      | is      | is                 | is            | is              | is       | is                      | is                 | is                                          | is                                  | is not             |
      | RENT        | OFFICES    | is                | is not      | is                 | is      | is      | is      | is                 | is            | is              | is       | is                      | is                 | is                                          | is not                              | is not             |
      | RENT        | BUSINESS   | is                | is not      | is                 | is      | is      | is      | is                 | is            | is              | is       | is                      | is                 | is                                          | is                                  | is not             |
      | RENT        | INDUSTRIES | is not            | is not      | is                 | is not  | is not  | is      | is not             | is            | is              | is       | is                      | is                 | is not                                      | is not                              | is not             |


  Scenario: Display Energy section + required fields
    When we look at Energy Section
    Then there MUST be field "EPCscore" if region is "Wallonie" with an image as the score
    And there MUST be info for the following fields:
      | energyConsumption  |
      | EPCreferenceNumber |
      | CO2emission        |

    And field "energy Consumption" should also contain an extra vertical graph if region is "Brussels" and value is specified #Comment from JFB : in Brussels, this vertical graph is specific to BCI properties.
    And field "energy Consumption" should also contain an extra horizontal graph if region is "Flanders" and value is sepcified

    And there could be info for
      | E_level                                     |
      | K_level                                     |
      | Heating                                     |
      | commonHeatingWater                          |
      | doubleGlazing                               |
      | airConditioning                             |
      | heatPump                                    |
      | photovoltaicSolarPanels                     |
      | thermicSolarPanels                          |
      | inspectionReportOfTheElectricalInstallation |
      | conformityCertificationForFuelTanks         |
      | freeEPCdescription                          |

    And the field "yearly Theoretical Total Energy Consumption" should be present between "EPCreferenceNumber" and "CO2emission" when region is "Wallonia"

    And no other fields are valid
    And all fields with no data MUST NOT be shown

  Scenario Outline: BuildingRegulation section
    Given the transaction is <transaction>
    And main type is <type>
    Then obligationToBuild <obligationToBuild> valid
    And typeOfBuilding <typeOfBuilding> valid
    And totalGroundFloorBuildable <totalGroundFloorBuildable> valid
    And planningPermissionObtained <planningPermissionObtained> valid
    And asBuiltPlan <asBuiltPlan> valid
    And subdivisionPermit <subdivisionPermit> valid
    And possiblePriorityPurchaseRight <possiblePriorityPurchaseRight> valid
    And proceedingsForBreachOfPlanningRegulations <proceedingsForBreachOfPlanningRegulations> valid
    And latestLandUseDesignation <latestLandUseDesignation> valid
    And townPlanning <townPlanning> valid
    And floodZoneInfo <floodZoneInfo> valid
    And floodZoneIcon <floodZoneIcon> valid
    And if floodZoneIcon is not present, it should not be displayed

    Examples:
      | transaction | type       | obligationToBuild | typeOfBuilding | totalGroundFloorBuildable | planningPermissionObtained | asBuiltPlan | subdivisionPermit | possiblePriorityPurchaseRight | proceedingsForBreachOfPlanningRegulations | latestLandUseDesignation | townPlanning | floodZoneInfo | floodZoneIcon |
      | BUY         | HOUSE      | is not            | is not         | is not                    | is                         | is          | is                | is                            | is                                        | is                       | is           | is            | is            |
      | BUY         | APARTMENT  | is not            | is not         | is not                    | is                         | is          | is                | is                            | is                                        | is                       | is           | is            | is            |
      | BUY         | GARAGE     | is not            | is not         | is not                    | is                         | is          | is                | is                            | is                                        | is                       | is           | is            | is            |
      | BUY         | OTHER      | is not            | is not         | is not                    | is                         | is          | is                | is                            | is                                        | is                       | is           | is            | is            |
      | BUY         | LAND       | is                | is             | is                        | is                         | is not      | is                | is                            | is                                        | is                       | is           | is            | is            |
      | BUY         | OFFICES    | is not            | is not         | is not                    | is                         | is          | is                | is                            | is                                        | is                       | is           | is            | is            |
      | BUY         | BUSINESS   | is not            | is not         | is not                    | is                         | is          | is                | is                            | is                                        | is                       | is           | is            | is            |
      | BUY         | INDUSTRIES | is not            | is not         | is not                    | is                         | is          | is                | is                            | is                                        | is                       | is           | is            | is            |
      | RENT        | HOUSE      | is not            | is not         | is not                    | is                         | is not      | is                | is                            | is                                        | is                       | is           | is            | is            |
      | RENT        | APARTMENT  | is not            | is not         | is not                    | is                         | is not      | is                | is                            | is                                        | is                       | is           | is            | is            |
      | RENT        | GARAGE     | is not            | is not         | is not                    | is                         | is not      | is                | is                            | is                                        | is                       | is           | is            | is            |
      | RENT        | OTHER      | is not            | is not         | is not                    | is                         | is not      | is                | is                            | is                                        | is                       | is           | is            | is            |
      | RENT        | OFFICES    | is not            | is not         | is not                    | is                         | is          | is                | is                            | is                                        | is                       | is           | is            | is            |
      | RENT        | BUSINESS   | is not            | is not         | is not                    | is                         | is          | is                | is                            | is                                        | is                       | is           | is            | is            |
      | RENT        | INDUSTRIES | is not            | is not         | is not                    | is                         | is          | is                | is                            | is                                        | is                       | is           | is            | is            |

  #todo clear fields that are not in residential
  Scenario Outline: Financial section
    Given the transaction is <transaction>
    And main type is <type>
    Then vatProfile <vatProfile> valid
    And monthlyRentalPrice <monthlyRentalPrice> valid
    And yearlyRentalPrice <yearlyRentalPrice> valid
    And salePrice <salePrice> valid
    And priceOfBusiness <priceOfBusiness> valid
    And withBusinessToSell <withBusinessToSell> valid
    And oldPrice <oldPrice> valid
    And cadastralIncome <cadastralIncome> valid
    And monthlyCharges <monthlyCharges> valid
    And rentalComplexRented <rentalComplexRented> valid
    And currentMonthRevenue <currentMonthRevenue> valid
    And extraInfo <extraInfo> valid
    And pricebasedon <pricebasedon> valid # field is "apartirde"
    And percentagerented <percentagerented> valid # field is "pourcentloue"

    Examples:
      | transaction | type       | vatProfile | monthlyRentalPrice | yearlyRentalPrice | salePrice | m2Price | priceOfBusiness | withBusinessToSell | oldPrice | cadastralIncome | monthlyCharges | rentalComplexRented | currentMonthRevenue | extraInfo | pricebasedon | percentagerented |
      | BUY         | HOUSE      | is         | is not             | ??                | is        | is not  | is not          | is not             | ??       | is              | is             | is                  | is                  | ??        | is not       | is               |
      | BUY         | APARTMENT  | is         | is not             | ??                | is        | is not  | is not          | is not             | ??       | is              | is not         | is not              | is not              | ??        | is not       | ??               |
      | BUY         | GARAGE     | is         | is not             | ??                | is        | is not  | is not          | is not             | ??       | is              | is not         | is                  | is                  | ??        | is not       | ??               |
      | BUY         | OTHER      | is         | is not             | ??                | is        | is not  | is not          | is not             | ??       | is              | is             | is                  | is                  | ??        | is not       | ??               |
      | BUY         | LAND       | is         | is not             | ??                | is        | is      | is not          | is not             | ??       | is not          | is not         | is not              | is not              | ??        | is not       | ??               |
      | BUY         | OFFICES    | is         | is not             | is                | is        | is      | is not          | is not             | ??       | is              | is             | is                  | is                  | ??        | is           | is               |
      | BUY         | BUSINESS   | is         | is not             | is                | is        | is      | is              | is                 | ??       | is              | is             | is                  | is                  | ??        | is           | is               |
      | BUY         | INDUSTRIES | is         | is not             | is                | is        | is      | is not          | is not             | ??       | is              | is             | is                  | is                  | ??        | is           | is               |
      | RENT        | HOUSE      | is not     | is                 | ??                | is not    | is not  | is not          | is not             | ??       | is not          | is             | is not              | is not              | ??        | is not       | ??               |
      | RENT        | APARTMENT  | is not     | is                 | ??                | is not    | is not  | is not          | is not             | ??       | is not          | is             | is not              | is not              | ??        | is not       | ??               |
      | RENT        | GARAGE     | is not     | is                 | ??                | is not    | is not  | is not          | is not             | ??       | is not          | is not         | is not              | is not              | ??        | is not       | ??               |
      | RENT        | OTHER      | is not     | is                 | ??                | is not    | is not  | is not          | is not             | ??       | is not          | is             | is not              | is not              | ??        | is not       | ??               |
      | RENT        | OFFICES    | is not     | is                 | is                | is        | is not  | is not          | is not             | ??       | is not          | is             | is not              | is not              | ??        | is           | is               |
      | RENT        | BUSINESS   | is not     | is                 | is                | is        | is not  | is              | is                 | ??       | is not          | is             | is not              | is not              | ??        | is           | is               |
      | RENT        | INDUSTRIES | is not     | is                 | is                | is        | is not  | is not          | is not             | ??       | is not          | is             | is not              | is not              | ??        | is           | is               |

  Scenario Outline: When to display Price of business tag
    Given price of business is defined <POB defined>
    When Business to sell is <Business to sell>
    Then display Price of business <display>

    Examples:
      | POB defined | Business to sell | display               |
      | is          | is               | Price of business     |
      | is not      | is               | with business to sell |
      | is not      | is not           |                       |
      | is          | is not           | Price of business     |

  Scenario Outline: When to display the agency or notary section
    Given the estate is sold by only one agency
    And the agency category is <Agency category>
    Then display section <section>
    But if the estate is sold by more than one agency, then don't display the agency section.
    And if the agency section is displayed then it has to correspond with the agency logo on the picture.

    ##In the future we will perfect this functionality. For now don't change the behavior of the logo's. Just add the agency section when appropriate, as described above.

    Examples:
      | section                          | Agency category |
      | AGENCY("AGE")                    | Agency          |
      | REAL_ESTATE_AGENCY("AGN")        | Agency          |
      | AGENCY_PAYING_WITH_OGONE("AGO")  | Agency          |
      | PREPAID_AGENCY("AGP")            | Agency          |
      | HOLIDAY_AGENCY("AGT")            | is not          |
      | REAL_ESTATE_AGENT("AIM")         | Agency          |
      | INSURANCE_BROOKER("BRO")         | is not          |
      | CERTIGO("CER")                   | is not          |
      | DETACHED_HOUSE_BUILDERS("CMI")   | Agency          |
      | MOVERS("DEM")                    | Agency          |
      | GENERAL_ENTREPRENEUR("EGE")      | Agency          |
      | EXPERT("EXP")                    | Agency          |
      | CUSTOMER_INVOICE("FAC")          | is not          |
      | SURVEYOR("GEO")                  | is not          |
      | SELF_EMPLOYED("IND")             | is not          |
      | INSURANCE_COMPANY("INS")         | Agency          |
      | MATRIX("MAT")                    | is not          |
      | NOTARY("NOT")                    | notary          |
      | PRIVATE("PAR")                   | is not          |
      | PROPERTY_DEVELOPER("PRO")        | Agency          |
      | COMPANY("SOC")                   | is not          |
      | COMPANY_PAYING_WITH_OGONE("SOO") | Agency          |
      | TOURISM("TOU")                   | is not          |
      | PREPAID_COMPANY("SOP")           | is not          |
      | GENERAL_CONTRACTOR("EGE")        | Agency          |
      | RESORT_PARTNERS("ZZZ")           | is not          |
      | TOURISM("TOU")                   | is not          |

  Scenario Outline: Agency section
    Given we are on a property of any type (Residential, BCI, Land, ...)
    And the seller or owner is an agency or notary
    And the language is <Language>
    Then if the seller is an agency then agency name is <Agency name>
    And if the seller is a notary then the notary name is <Notary>
    And agency address is <Agency address>
    And notary address is <Notary address>
    And if there is a responsible for the project than <Responsible>
    And Ref. Agency is <Ref. agency>
    And Ref. Notary is <Ref. notary>
    And Registered IPI n° is <Registered IPI n°>
    And if the seller is an agency then show visit agency page is <visit agency page>
    And if any of the above fields have no content, then the field is not shown.

    Examples:

      | Language | Agency name | Notary  | Agency address      | Notary address     | Responsible                                   | Ref. agency     | Ref. notary  | Registered IPI n° | visit agency page           |
      | EN       | Agency      | Notary  | Agency address      | Notary address     | Commercial responsible person for the project | Ref. Agency     | Ref. Notary  | Registered IPI n° | Other agency properties     |
      | NL       | Agentschap  | Notaris | Agentschap adres    | Notaris adres      | Commercieel verantwoordelijke van het project | Ref. Agentschap | Ref. Notaris | Erkend BIV-nr.    | Bekijk het volledige aanbod |
      | FR       | Agence      | Notaire | Adresse de l'agence | Adresse du notaire | Responsable commercial du projet              | Ref. Agence     | Ref. Notaire | Agréé IPI n°      | Autres biens de l'agence    |


  Scenario Outline: Display Auction Section
    Given language is <language>
    And ad is an auction
    And the auction state is <auction state>
    Then we have to have auction section visible
    And we can have the following infos available and if data available should be displayed in the following order:
      | state info           |
      | date of auction      |
      | time of auction      |
      | viewing arrangements |
      | Venue of sale        |

    And info item "bid fee" is valid only for auction state "overbid" and should be displayed if data is available
    And "bid fee" is displayed after "state info"
    And the "state info" label is <state info>
    And the "date of auction" label is <date of auction>
    And the "time of auction" label is <time of auction>
    And the "viewing arrangements" label is <viewing arrangements>
    And the "Venue of sale" label is <Venue of sale>
    And the "bid fee" label is <bid fee>

    Examples:
      | auction state | language | state info                                                             | date of auction           | time of auction            | viewing arrangements | Venue of sale         | bid fee             |
      | firstSession  | en       | Single session                                                         | Date of the sale          | Time of the sale           | Viewing arrangements | Venue of the sale     |                     |
      | firstSession  | fr       | Séance unique                                                          | Date de la vente          | Heure de la vente          | Modalités de visite  | Lieu de la vente      |                     |
      | firstSession  | nl       | Enige zitdag                                                           | Datum van de verkoop      | Uur van de verkoop         | Bezoekvoorwaarden    | Plaats van de verkoop |                     |
      | overbid       | en       | Higher bid option (S.H.B. = subject to higher bid)                     | Final date for higher bid | Final time for higher bid  | Viewing arrangements | Venue of the sale     | Higher bid fee      |
      | overbid       | fr       | Faculté de surenchère (S.R.S. = sous réserve surenchère)               | Date limite de surenchère | Heure limite de surenchère | Modalités de visite  | Lieu de la vente      | Prime de surenchère |
      | overbid       | nl       | Mogelijkheid tot hoger bod (O.V.H.B. = Onder voorbehoud van hoger bod) | Limietdatum hoger bod     | Laatste uur hoger bod      | Bezoekvoorwaarden    | Plaats van de verkoop | Premie hoger bod    |
      | finalSale     | en       | Final adjudication after higher bid                                    | Date of the sale          | Time of the sale           | Viewing arrangements | Venue of the sale     |                     |
      | finalSale     | fr       | Adjudication définitive après surenchère                               | Date de la vente          | Heure de la vente          | Modalités de visite  | Lieu de la vente      |                     |
      | finalSale     | nl       | Definitieve toewijzing na hoger bod                                    | Datum van de verkoop      | Uur van de verkoop         | Bezoekvoorwaarden    | Plaats van de verkoop |                     |
