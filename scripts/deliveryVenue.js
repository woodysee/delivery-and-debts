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

var deliveryVenue = function(){

};

//WIP, not tested - getting random times for the deliveryVenues
var deliveryTimers = {};
deliveryTimers.A = {};
deliveryTimers.A.randomDuration = 30;

function timerD1(duration, secondsPassed){
  duration = duration - Math.floor(secondsPassed);

  //First cycle
  document.getElementById('deliveryA-timer').innerHTML = "00:" + duration;
  if (duration >= 60) {
    document.getElementById('deliveryA-timer').innerHTML = "01:00";

  }; //MAKE THIS BETTER! INFLEXIBLE CODE. WHAT HAPPENS IF THERE IS MORE THAN 1 MIN?
  if(duration < 10) {
    document.getElementById('deliveryA-timer').innerHTML = "00:0" + duration;
  };
  if(duration <= 0) {
    document.getElementById('deliveryA-timer').innerHTML = "LATE!";

    //Off for 5 seconds
    //Repeat again
  };
};

function timerD2(duration, secondsPassed){
  duration = duration - Math.floor(secondsPassed);
  document.getElementById('deliveryB-timer').innerHTML = "00:" + duration;
  if (duration >= 60) {
    document.getElementById('deliveryB-timer').innerHTML = "01:00";
  }; //MAKE THIS BETTER! INFLEXIBLE CODE. WHAT HAPPENS IF THERE IS MORE THAN 1 MIN?
  if(duration < 10) {
    document.getElementById('deliveryB-timer').innerHTML = "00:0" + duration;
  };
  if(duration <= 0) {
    document.getElementById('deliveryB-timer').innerHTML = "LATE!";
  };
};

function timerD3(duration, secondsPassed){
  duration = duration - Math.floor(secondsPassed);
  document.getElementById('deliveryC-timer').innerHTML = "00:" + duration;
  if (duration >= 60) {
    document.getElementById('deliveryC-timer').innerHTML = "01:00";
  }; //MAKE THIS BETTER! INFLEXIBLE CODE. WHAT HAPPENS IF THERE IS MORE THAN 1 MIN?
  if(duration < 10) {
    document.getElementById('deliveryC-timer').innerHTML = "00:0" + duration;
  };
  if(duration <= 0) {
    document.getElementById('deliveryC-timer').innerHTML = "LATE!";
  };
};
