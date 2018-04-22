var closeGameButton = document.getElementById("closegame-button");

var closeGame = function () {
  if (confirm('Declare bankruptcy?')) {
    // Goodbye World!
    alert("Goodbye World!");
    loseGame();
  }
};
