# Delivery & Debts

___________________________________________________________

INSTRUCTIONS
___________________________________________________________

To start playing,

1. Open this link: https://woodysee.github.io/delivery-and-debts/.
3. You will arrive at a green landing page with the game title "Delivery & Debts".
4. Under Game, click the button "Play".

___________________________________________________________

GAME RULES

You play a delivery person delivering lunches.

You start at the top left hand corner of the screen (i.e. the blue square / "moped").

Navigate to the restaurant (i.e. red square / "restaurant") to pick up lunches and deliver the lunches to either one of the three offices (i.e. green rectangles / "deliveryVenues").

Bring the takings back to the restaurant so you can collect your 10% delivery commission which helps to settle your debt.

You lose if you are unable to repay your debt before lunch time ends (i.e. the default duration of 60 seconds).

You lose if you willingly declare bankruptcy by clicking the red x square button on the top left hand corner of the screen.

You win if you are able to repay your debt by the end of lunch time.

___________________________________________________________

SETTINGS

There are some settings available to change the difficulty of the game, which can only be accessed within a JavaScript file of the project.

1. Navigate to `scripts/game.js`.
2. Search for `"//Game settings"` inside the settings object within the function `"Game()"`.

Example of a safe modification of settings:
  ___________________________________________________________
  Before:
  settings.mopedSpeed = 2;

  After:
  settings.mopedSpeed = 1;
  ___________________________________________________________

5. You can change any of the values in the settings object.

___________________________________________________________

SPECIAL THANKS TO

- Jens H. Nielsen - WDI-10 instructor
- Geng Sng & Iskandar Jamaluddin - WDI-10 teaching assistants
- Alex Min, Elnathan Erh, Bryan Lee & Choong Han Xiang - for their patient guidance with my hurdles of JavaScript
- And most importantly all the awesome students of GA's sg-wdi-10!
