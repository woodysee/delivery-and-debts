/* A Document Ready in jQuery*/
/* If you plan to use jQuery, have you inserted this just above </body> in your HTML?
<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="scripts/debtObject.js"></script>
*/

$( document ).ready(function() {
    console.log( "index.html linked to debtObject.js. Printed with jQuery." );
});

/**/
/*End of Document Ready Function in jQuery*/
/**/

/* ALL CODE SHOULD GO BELOW HERE */

var debtObject = function(settings) {

    // Settings
    var debtElement = null;
    var xx = 0;

    function wall() {

      var x_right = parseInt(debtElement.style.left)  + parseInt(debtElement.style.width);
      var x_left = parseInt(debtElement.style.left);
      var y_top = parseInt(debtElement.style.top);
      var y_bottom = parseInt(debtElement.style.top) + parseInt(debtElement.style.height);

      var worldBox = document.getElementById("world");
      var mopedRect = debtElement.getBoundingClientRect();
      var w = parseInt(worldBox.clientWidth);
      var h = parseInt(worldBox.clientHeight);

      if(y_bottom > h){
        debtElement.style.top = (h - parseInt(debtElement.style.height)) + 'px';
      }

      if(y_top < 0){
        debtElement.style.top = '0px';
      }

      if(x_left < 0){
        debtElement.style.left = '0px';
      }

      if(x_right < 0){
        debtElement.style.left = (w - parseInt(debtElement.style.width)) + 'px';
      }

      if (x_right > w){
        debtElement.style.left = (w - parseInt(debtElement.style.width)) + 'px';
      }
    }

    // Move the moped around manually

    function automatic(interactions){

      if(interactions.up){
        debtElement.style.top = parseInt(debtElement.style.top)-settings.debtBallSpeed+"px";
      }

      if(interactions.down){
        debtElement.style.top = parseInt(debtElement.style.top)+settings.debtBallSpeed+"px";
      }

      if(interactions.left){
        debtElement.style.left = parseInt(debtElement.style.left)-settings.debtBallSpeed+"px";
      }

      if(interactions.right){
        debtElement.style.left = parseInt(debtElement.style.left)+settings.debtBallSpeed+"px";
      }

      if(settings.walls){
        wall();
      }
    }

    function create() {
        // Create the object asset;
    }

    function init(){
      // create();
      debtElement = document.getElementsByClasses("debtObject");
      debtElement.style.top = '175px';
      debtElement.style.left = '50px';
      debtElement.style.height = '10px';
      debtElement.style.width = '15px';
    };

    this.render = function(interactions){
      automatic(interactions);
    }

    init();
}
/*End object Moped(settings)*/
