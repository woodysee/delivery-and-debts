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

  // var randomDuration = {}; //called in the render loop in game.js
  // var randomDurationMin = 3;
  // var randomDurationRange = 10;
  //
  // randomDuration.d1 = Math.floor(Math.random()*randomDurationRange)+randomDurationMin;
  // randomDuration.d2 = Math.floor(Math.random()*randomDurationRange)+randomDurationMin;
  // randomDuration.d3 = Math.floor(Math.random()*randomDurationRange)+randomDurationMin;

  // function timerD1(duration, secondsPassed){
  //   duration = duration - Math.floor(secondsPassed);
  //
  //   //First cycle
  //   document.getElementById('deliveryA-timer').innerHTML = "00:" + duration;
  //   if (duration >= 60) {
  //     document.getElementById('deliveryA-timer').innerHTML = "01:00";
  //   };
  //   if(duration < 10) {
  //     document.getElementById('deliveryA-timer').innerHTML = "00:0" + duration;
  //   };
  //   if(duration <= 0) {
  //     document.getElementById('deliveryA-timer').innerHTML = "LATE!";
  //   };
  // };
  //
  // function timerD2(duration, secondsPassed){
  //   duration = duration - Math.floor(secondsPassed);
  //   document.getElementById('deliveryB-timer').innerHTML = "00:" + duration;
  //   if (duration >= 60) {
  //     document.getElementById('deliveryB-timer').innerHTML = "01:00";
  //   };
  //   if(duration < 10) {
  //     document.getElementById('deliveryB-timer').innerHTML = "00:0" + duration;
  //   };
  //   if(duration <= 0) {
  //     document.getElementById('deliveryB-timer').innerHTML = "LATE!";
  //   };
  // };
  //
  // function timerD3(duration, secondsPassed){
  //   duration = duration - Math.floor(secondsPassed);
  //   document.getElementById('deliveryC-timer').innerHTML = "00:" + duration;
  //   if (duration >= 60) {
  //     document.getElementById('deliveryC-timer').innerHTML = "01:00";
  //   };
  //   if(duration < 10) {
  //     document.getElementById('deliveryC-timer').innerHTML = "00:0" + duration;
  //   };
  //   if(duration <= 0) {
  //     document.getElementById('deliveryC-timer').innerHTML = "LATE!";
  //   };
  // };

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
