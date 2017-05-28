/* A Document Ready in jQuery*/
/* If you plan to use jQuery, have you inserted this just above </body// in your HTML?
<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="scripts/restaurant.js"></script>
*/

$( document ).ready(function() {
    console.log( "This page is linked to restaurant.js. This line was written with jQuery." );
});

/**/
/*End of Document Ready Function in jQuery*/
/**/

/* ALL CODE SHOULD GO BELOW HERE */

var Restaurant = function(settings){

  //Settings
  var xx = [];

  // Adding lunches to restaurant

    // Moped arrives at restaurant,
      // Moped has 2 lunches = do nothing;
      // Moped has 1 lunch = add 1 lunch;
      // Moped has 0 lunches = add 2 lunches;
  function mopedCollectsLunches() {
    /*Conditional*/
  }

  // Moped removes all takings
    // 5% of takings go into Earnings;

    function mopedDepositsTakings() {
      /*Conditional*/
      var takings = paseInt(mopedElement.takings);
      return addToEarnings;
    }

    function init(){
      // create();
      restaurantElement = document.getElementById('restaurant');
      restaurantElement.style.top = '160px';
      restaurantElement.style.left = '15px';
      restaurantElement.style.height = '40px';
      restaurantElement.style.width = '40px';
    };

    init();
}
