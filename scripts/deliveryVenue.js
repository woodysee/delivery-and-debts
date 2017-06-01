/* A Document Ready in jQuery*/
/* If you plan to use jQuery, have you inserted this just above </body> in your HTML?
<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="scripts/deliveryVenue.js"></script>
*/

$( document ).ready(function() {
    console.log( "index.html linked to deliveryVenue.js. Printed with jQuery." );
});

/**/
/*End of Document Ready Function in jQuery*/
/**/

/* ALL CODE SHOULD GO BELOW HERE */

var DeliveryVenue = function(){
  this.render = function(interactions){
  }; //to allow the interactions to work
};

  function createFirstDeliveryVenues(){
    // create();
    deliveryVenueElementA = document.getElementById('deliveryA');
    deliveryVenueElementA.style.height = '60px';
    deliveryVenueElementA.style.width = '40px';
    deliveryVenueElementA.style.top = '10px';
    deliveryVenueElementA.style.left = '150px';

    deliveryVenueElementB = document.getElementById('deliveryB');
    deliveryVenueElementB.style.height = '60px';
    deliveryVenueElementB.style.width = '40px';
    deliveryVenueElementB.style.top = '140px';
    deliveryVenueElementB.style.left = '270px';

    deliveryVenueElementC = document.getElementById('deliveryC');
    deliveryVenueElementC.style.height = '60px';
    deliveryVenueElementC.style.width = '40px';
    deliveryVenueElementC.style.top = '270px';
    deliveryVenueElementC.style.left = '390px';

  };
