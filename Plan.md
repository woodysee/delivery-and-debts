

You play a delivery person delivering lunches. You are also deep in debt. Try to repay all your debts before Friday. If not, then next Friday. Or the next... forever.

###

See diagram.

Objects

- World

  - Restaurant

    - Adding lunches to Moped
      > Moped arrives at restaurant,
      > Moped has 2 lunches = do nothing;
      > Moped has 1 lunch = add 1 lunch;
      > Moped has 0 lunches = add 2 lunches;

    - Moped removes all takings
      > 5% of takings go into Earnings;

  - Moped (player)

    - Movement
    > Player controls position of Moped in World with directional keys;
    > Acceleration
      > Initial speed (unit distance/unit time??);
      > Holding the direction key longer accelerates;
      > Holding the opposite direction key decelerates and stops;
      > Maximum speed is ###;
    > "space bar" drops the lunch at a Delivery Venue;

    - Moped is at the Restaurant
    > Moped has 2 lunches = do nothing;
    > Moped has 1 lunch = add 1 lunch;
    > Moped has 0 lunches = add 2 lunches;
    > Moped removes all his takings and 10% of this amount goes into his earnings

    - Passing a Debt
    > If Moped's position is at a Debt, player loses all his takings;

    - Moped is at a Delivery Venue
    > upon pressing 'space bar',
      > Moped has 1 or 2 lunches = remove 1 lunch;
      > Moped has no lunches = do nothing;

  - Delivery Venue

    - Countdown timer
    > Initially, a countdown timer with a random duration between 3 and 6 seconds;
    > When Scooter is at restaurant, generates a random timer between 3 and 6 seconds;
    > If Moped arrives...
      > ...on time, full takings: $30;
      > ...late, half takings: $15;

    - Location
    > Randomly generated in the World
    > It moves slowly randomly everywhere within the World

    - New Delivery
    > Randomly generates a new time

  - Debt Ball
    > A Debt Ball is an object which removes all takings from the Scooter. In return, it becomes smaller. The player can avoid going through the Debts. But as the days goes by, it will become bigger until the player has no choice but to collide with it to make it smaller.

    - Debt Size
    > 150% bigger every day if it does not hit;
    > If Scooter runs into a Debt...
      > ...it will shrink by 80% the next day
      > ...and player will lose all his takings so far.

    - Collision
    > Cannot pass though Scooter
    > Cannot pass through 4 walls of the World
    > Cannot pass through another Debt object
    > Passes over the Restaurant
    > Passes over the Delivery Venues

    - Movement
    > constant speed, slow
    > randomly bouncing off non-passable objects
