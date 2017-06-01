/* A Document Ready in jQuery*/
/* If you plan to use jQuery, have you inserted this just above </body> in your HTML?
<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
*/

$( document ).ready(function() {
    console.log( "index.html linked to game.js. Printed with jQuery." );
});

/**/
/*End of Document Ready Function in jQuery*/
/**/

/* ALL CODE SHOULD GO BELOW HERE */

/*Landing Page, Game*/
var gameState = "startScreen"; // if( gameState == "startScreen") { // show the start Screen } else if (gameState == "Game") { // game code goes here } else if (gameState == "endScreen") { // show endscreen }

var Game = function() {

    // Game settings
    var settings = {};                     // Contains all game settings
    settings.mopedSpeed = 2;               // The speed of the moped
    settings.walls = true;                 // The moped can roam outside the world
    settings.noclip = false;               // The moped can pass through all world impassable objects
    settings.minlunchCost = 1;/*dollars*/  // The price of delivering lunches to a single venue
    settings.randomlunchRange = 20;
    settings.initEarnings = 50; /*negative dollars*/
    settings.dayLength = 70;/*seconds*/    // Duration of a day (has to be between 0 - 600 seconds)

    //new object of an enemy, start_position, direction, every time, if it is 0 go minus, velocity

    // Window settings
    var assets = [];                      // All game objects
    var player = new Moped(settings);     // The player
    assets[0] = player;
    assets[1] = new Restaurant();         // The restaurant
    var frame = 0;                        // Frames since the start of the game
    var secondsPassed = 0;

    // Interactions
    var interactions = {};
    interactions.up = false;              // Up arrow key pressed
    interactions.down = false;            // Down arrow key pressed
    interactions.left = false;            // Left arrow key pressed
    interactions.right = false;           // Right arrow key pressed

    // debtall interactions (WIP)
    var interactionsd1 = {};
    interactions.up = false;              // Up arrow key pressed
    interactions.down = false;            // Down arrow key pressed
    interactions.left = false;            // Left arrow key pressed
    interactions.right = false;           // Right arrow key pressed

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
        };
      });

      closeGameButton.addEventListener('click',function(event){
        var button = event.button;
        if (button == document.getElementById("closegame-button")) {
          closeGame();
        };
      });

      //Add more event listeners

    };
    // Startup the game
    function init(){
      createFirstDeliveryVenues();
      setupEvents();
    }

    // The render function. It will be called 60/sec
    this.render = function(){ // Change to this.render
      for(var i=0; i < assets.length; i++){
        assets[i].render(interactions);
        // Don't put a "return secondsPassed" here if you want the timer to work... (30 May 2017, 11:27);
        timer(settings.dayLength, secondsPassed); //See dayTimer.js
        // if (/*close button pressed*/) {
        // }
        // timerD1(randomDuration.d1, secondsPassed);
        // timerD2(randomDuration.d2, secondsPassed);
        // timerD3(randomDuration.d3, secondsPassed);
      };
      secondsPassed = frame / 60; //no. of seconds passed per frame
      frame++;
      // console.log(frame, secondsPassed); // - checks render loop
    };

    var self = this; // Add this line
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
              self.render(); // add self before render
            })();

            init();
};

var g = new Game();
