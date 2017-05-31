/* A Document Ready in jQuery*/
/* If you plan to use jQuery, have you inserted this just above </body> in your HTML?
<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="scripts/dayTimer.js"></script>
*/

$( document ).ready(function() {
    console.log( "index.html linked to dayTimer.js. Printed with jQuery." );
});

/**/
/*End of Document Ready Function in jQuery*/
/**/

/* ALL CODE SHOULD GO BELOW HERE */

/*Sitepoint JS Countdown Timer*/
//Juliana's Timer (scrapped because it was tagged to computer clock instead of frame rate)
//El's Countdown Timer: counts down 60 seconds on page refresh

function timer(duration, secondsPassed){
  duration = duration - Math.floor(secondsPassed);
  document.getElementById('player1-timer').innerHTML = "00:" + duration;
  if (duration >= 60) {
    document.getElementById('player1-timer').innerHTML = "01:00";
  }; //MAKE THIS BETTER! INFLEXIBLE CODE. WHAT HAPPENS IF THERE IS MORE THAN 1 MIN?
  if(duration < 10) {
    document.getElementById('player1-timer').innerHTML = "00:0" + duration;
  };
  if(duration <= 0) {
    document.getElementById('player1-timer').innerHTML = "NEXT DAY";
  };
};
// In this.render function on game.js, put timer(settings.dayLength, secondsPassed); after frame++;
