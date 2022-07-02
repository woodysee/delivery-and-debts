console.log("index.html linked to game.js.");

/* ALL CODE SHOULD GO BELOW HERE */

// Win / Lose conditionals

//initial Landing Page
var gameState = "gameOff";

//Game State - Global Variables
var startPage = document.getElementById("start-page");
var customPage = document.getElementById("custom-page");
var winPage = document.getElementById("win-page");
var losePage = document.getElementById("lose-page");
var playerSpace = document.getElementById("player1-space");

//Display Start Page - Initial Landing Page
startPage.style.display = "block";
customPage.style.display = "none";
winPage.style.display = "none";
losePage.style.display = "none";
playerSpace.style.display = "none";

//Win-lose conditions
function winGame() {
  gameState = "gameOff";
  startPage.style.display = "none";
  customPage.style.display = "none";
  winPage.style.display = "block";
  losePage.style.display = "none";
  playerSpace.style.display = "none";
}

function loseGame() {
  gameState = "gameOff";
  startPage.style.display = "none";
  customPage.style.display = "none";
  winPage.style.display = "none";
  losePage.style.display = "block";
  playerSpace.style.display = "none";
}

var Game = function () {
  // Game settings
  var settings = {}; // Contains all game settings
  settings.mopedSpeed = 2; // The speed of the moped
  settings.walls = true; // The moped can roam outside the world
  settings.noclip = false; // The moped can pass through all world impassable objects
  settings.minlunchCost = 10; // The price of delivering lunches to a single venue
  settings.randomlunchRange = 50;
  settings.initEarnings = 30; /*negative dollar(s)*/
  settings.dayLength = 60; /*seconds*/ // Duration of a day (has to be between 0 - 600 seconds)

  // Window settings
  var assets = []; // All game objects
  var player = new Moped(settings); // The player
  assets[0] = player;
  assets[1] = new Restaurant(); // The restaurant
  assets[2] = new DeliveryVenue(); // The delivery venues
  var frame = 0; // Frames since the start of the game
  var secondsPassed = 0;
  var gameIsPaused = false;

  // Interactions
  var interactions = {};
  interactions.up = false; // Up arrow key pressed
  interactions.down = false; // Down arrow key pressed
  interactions.left = false; // Left arrow key pressed
  interactions.right = false; // Right arrow key pressed

  // Setup event listeners
  function setupGameEvents() {
    // Linking up, down, left and right keys to movement
    document.addEventListener("keyup", function (event) {
      var keyName = event.key;

      switch (keyName) {
        case "ArrowRight":
          interactions.right = false;
          break;
        case "d":
          interactions.right = false;
          break;
        case "ArrowLeft":
          interactions.left = false;
          break;
        case "a":
          interactions.left = false;
          break;
        case "ArrowUp":
          interactions.up = false;
          break;
        case "w":
          interactions.up = false;
          break;
        case "ArrowDown":
          interactions.down = false;
          break;
        case "s":
          interactions.down = false;
          break;
        default:
          break;
      }
    });

    document.addEventListener("keydown", function (event) {
      var keyName = event.key;
      // console.log(keyName);
      switch (keyName) {
        case "ArrowRight":
          interactions.right = true;
          break;
        case "d":
          interactions.right = true;
          break;
        case "ArrowLeft":
          interactions.left = true;
          break;
        case "a":
          interactions.left = true;
          break;
        case "ArrowUp":
          interactions.up = true;
          break;
        case "w":
          interactions.up = true;
          break;
        case "ArrowDown":
          interactions.down = true;
          break;
        case "s":
          interactions.down = true;
          break;
        default:
          break;
      }
    });

    document
      .querySelector("#closegame-button")
      .addEventListener("click", closeGame); //Close game button on top left (Bankruptcy)

    //Add more event listeners here
  }

  // The render function. It will be called 60/sec
  this.render = function () {
    for (var i = 0; i < assets.length; i++) {
      assets[i].render(interactions);
      timer(settings.dayLength, secondsPassed); //See dayTimer.js
    }
    secondsPassed = frame / 60; //no. of seconds passed per frame
    frame++;
    //console.log(frame, secondsPassed); // - Checks render loop. Uncomment and see console to see log.
  };

  var Game = this;

  runGame = () => {
    window.requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback, 1000 / 60);
        }
      );
    })();

    (function animloop() {
      requestAnimFrame(animloop);
      Game.render();
    })();
  };

  // Startup the game
  function init() {
    runGame();
    createDeliveryVenues();
    setupGameEvents();
  }

  init();
};
/*End Game*/

//Navigate between win/lose/start faux pages before and after game
function fauxNav() {
  if ((gameState = "gameOff")) {
    function backHome() {
      location.reload();
    }
    document
      .querySelector("#start-button")
      .addEventListener("click", customGame);
    document
      .querySelector("#custom-page-button")
      .addEventListener("click", startGame);
    document
      .querySelector("#lose-retry-button")
      .addEventListener("click", backHome);
    document
      .querySelector("#win-retry-button")
      .addEventListener("click", backHome);
    function customGame() {
      gameState = "gameOn";
      startPage.style.display = "none";
      customPage.style.display = "block";
      winPage.style.display = "none";
      losePage.style.display = "none";
      playerSpace.style.display = "none";
      //console.log("test start button");
    }
    function startGame() {
      new Game();
      gameState = "gameOn";
      startPage.style.display = "none";
      customPage.style.display = "none";
      winPage.style.display = "none";
      losePage.style.display = "none";
      playerSpace.style.display = "block";
      //console.log("test start button");
    }
  }
}

fauxNav();
