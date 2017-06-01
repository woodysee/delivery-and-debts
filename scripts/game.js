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

// Win / Lose conditionals

//initial Landing Page
var gameState = "gameOff";

//Game State - Global Variables
var startPage = document.getElementById("start-page");
var winPage = document.getElementById("win-page");
var losePage = document.getElementById("lose-page");
var playerSpace = document.getElementById("player1-space");

//Display Start Page - Initial Landing Page
startPage.style.display = "block";
winPage.style.display = "none";
losePage.style.display = "none";
playerSpace.style.display = "none";

//WIP: pause button
function togglePause() {
  console.log("Toggle pause with space bar");
};

//Win-lose conditions
function winGame() {
  if (gameState = "gameOn"){
    gameState = "gameOff";
    // console.log("Win Condition Test");
    startPage.style.display = "none";
    //customPage.style.display = "none";
    winPage.style.display = "block";
    losePage.style.display = "none";
    playerSpace.style.display = "none";
  };
};

function loseGame() {
  if (gameState = "gameOn"){
    gameState = "gameOff";
    console.log("You have filed for bankruptcy. ---- Get a loan from your parents.");
    startPage.style.display = "none";
    //customPage.style.display = "none";
    winPage.style.display = "none";
    losePage.style.display = "block";
    playerSpace.style.display = "none";
  };
};

var Game = function() {

    // Game settings
    var settings = {};                     // Contains all game settings
    settings.mopedSpeed = 2;               // The speed of the moped
    settings.walls = true;                 // The moped can roam outside the world
    settings.noclip = false;               // The moped can pass through all world impassable objects
    settings.minlunchCost = 10;/*dollar(s)*/  // The price of delivering lunches to a single venue
    settings.randomlunchRange = 50;
    settings.initEarnings = 30;/*negative dollar(s)*/
    settings.dayLength = 60;/*seconds*/    // Duration of a day (has to be between 0 - 600 seconds)

    // Window settings
    var assets = [];                      // All game objects
    var player = new Moped(settings);     // The player
    assets[0] = player;
    assets[1] = new Restaurant();         // The restaurant
    assets[2] = new DeliveryVenue();      // The delivery venues
    var frame = 0;                        // Frames since the start of the game
    var secondsPassed = 0;

    // Interactions
    var interactions = {};
    interactions.up = false;              // Up arrow key pressed
    interactions.down = false;            // Down arrow key pressed
    interactions.left = false;            // Left arrow key pressed
    interactions.right = false;           // Right arrow key pressed

    // Setup event listeners
    function setupGameEvents() {

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
        };
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
          case " ":
              togglePause();
              break;
          default:
              break;
        };
      });

      document.querySelector('#closegame-button').addEventListener('click', closeGame);

      //Add more event listeners

    };
    // Startup the game
    function init(){
      createFirstDeliveryVenues();
      setupGameEvents();
    };

    // The render function. It will be called 60/sec
    this.render = function(){ // Change to this.render
      for(var i = 0; i < assets.length; i++){
        assets[i].render(interactions);
        // Don't put a "return secondsPassed" here if you want the timer to work... (30 May 2017, 11:27);
        timer(settings.dayLength, secondsPassed); //See dayTimer.js
      };
      secondsPassed = frame / 60; //no. of seconds passed per frame
      frame++;
      // console.log(frame, secondsPassed); // - Checks render loop. Uncomment and see console to see log.
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
/*End Game*/

//Game Off Buttons
function fauxNav() {
  if (gameState = "gameOff") {
    function backHome() {
      startPage.style.display = "block";
      winPage.style.display = "none";
      losePage.style.display = "none";
      playerSpace.style.display = "none";
    }
    document.querySelector('#start-button').addEventListener('click', startGame);
    document.querySelector('#lose-retry-button').addEventListener('click', backHome);
    document.querySelector('#win-retry-button').addEventListener('click', backHome);
    function startGame() {
      new Game();
      startPage.style.display = "none";
      winPage.style.display = "none";
      losePage.style.display = "none";
      playerSpace.style.display = "block";
      //console.log("test start button");
    };
  };
};

fauxNav();
