/* A Document Ready in jQuery*/
/* If you plan to use jQuery, have you inserted this just above </body> in your HTML?
<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
*/

$( document ).ready(function() {
    console.log( "This page is linked to game.js. This line was written with jQuery." );
});

/**/
/*End of Document Ready Function in jQuery*/
/**/

/* ALL CODE SHOULD GO BELOW HERE */

var Game = function() {

    // Game settings
    var settings = {};                     // Containes all game settings
    settings.mopedSpeed = 2;               // The speed of the moped
    settings.walls = true;                 // The moped can not go outside the screen
    settings.automatic = false;            // The moped will move by itself
    settings.godmode = false;              // Debug mode

    // Window settings
    var assets = [];                      // All game objects
    var player = new Moped(settings);     // The player
    assets[0] = player;
    var frame = 0;                        // Frames since the start of the game

    // Interactions
    var interactions = {};
    interactions.up = false;              // Up arrow key pressed
    interactions.down = false;            // Down arrow key pressed
    interactions.left = false;            // Left arrow key pressed
    interactions.right = false;           // Right arrow ket pressed
    interactions.space = false;           // Speace key pressed

    // Setup event listeners
    function setupEvents() {

      // Linking up, down, left and right keys to movement
      document.addEventListener('keyup', function(event){
        var keyName = event.key;

        switch(keyName) {
          case "ArrowRight":
              interactions.right = false;
              break;
          case "ArrowLeft":
              interactions.left = false;
              break;
          case "ArrowUp":
              interactions.up = false;
              break;
          case "ArrowDown":
              interactions.down = false;
              break;
          default:
              break;
        }
      });

      document.addEventListener('keydown', function(event){
        var keyName = event.key;

        switch(keyName) {
          case "ArrowRight":
              interactions.right = true;
              break;
          case "ArrowLeft":
              interactions.left = true;
              break;
          case "ArrowUp":
              interactions.up = true;
              break;
          case "ArrowDown":
              interactions.down = true;
              break;
          default:
              break;
        }
      });

    }

    // Startup the game
    function init(){
      setupEvents();
    }

    // The render function. It will be called 60/sec
    function render(){

      for(var i=0; i < assets.length; i++){
        assets[i].render(interactions);
      }
    }

    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
            })();


            (function animloop(){
              requestAnimFrame(animloop);
              render();
            })();

            init();
}

var g = new Game();
