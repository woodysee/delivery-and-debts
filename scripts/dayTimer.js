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

function timer(duration, secondsPassed){
  duration = duration - Math.floor(secondsPassed);
  document.getElementById('player1-timer').innerHTML = "00:" + duration;

  if(duration == 600) {
    document.getElementById('player1-timer').innerHTML = "10:00";
  }

  if(duration >= 60 && duration < 600) {
    var minutes = Math.floor(duration / 60);
    var remaining = Math.ceil(duration % 60);
    if (remaining < 10) {
      remaining = "0" + Math.ceil(duration % 60);
    };
    document.getElementById('player1-timer').innerHTML = "0" + minutes + ":" + remaining;
  };

  if(duration < 10) {
    document.getElementById('player1-timer').innerHTML = "00:0" + duration;
  };

  if(duration <= 0) {
    document.getElementById('player1-timer').innerHTML = "END";
    /*trigger lose game condition*/
    console.log("game over. you suck. try again.");
  };
};
// In this.render function on game.js, put timer(settings.dayLength, secondsPassed); after frame++;
