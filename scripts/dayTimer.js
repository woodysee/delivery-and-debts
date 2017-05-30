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

//Juliana's Timer: counts down 60 seconds on page refresh
var seconds_left = 60; //settings.dayLength;
var interval = setInterval(function() {
    document.getElementById('player1-timer').innerHTML = "00:" + --seconds_left;
    if(seconds_left < 10)
    {
      document.getElementById('player1-timer').innerHTML = "00:0" + --seconds_left;
    }
    if (seconds_left <= 0)
    {
          document.getElementById('player1-timer').innerHTML = 'NEXT DAY';
          clearInterval(interval);
    }
}, 1000);
