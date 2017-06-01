/* A Document Ready in jQuery*/
/* If you plan to use jQuery, have you inserted this just above </body// in your HTML?
<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="scripts/closeGame.js"></script>
*/

$( document ).ready(function() {
    console.log( "index.html linked to closeGame.js. Printed with jQuery." );
});

/**/
/*End of Document Ready Function in jQuery*/
/**/

var closeGameButton = document.getElementById("closegame-button");

var closeGame = function () {
  if (confirm('Declare bankruptcy?')) {
    // Goodbye World!
    alert("Goodbye World!");
    /*resets game*/
    location.reload();
    /*if there is a game state, remember to change location.reload into startScreen*/
  }
};
