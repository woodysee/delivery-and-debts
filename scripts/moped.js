/* A Document Ready in jQuery*/
/* If you plan to use jQuery, have you inserted this just above </body> in your HTML?
<script src="https://code.jquery.com/jquery-1.9.1.min.js"></script>
<script src="scripts/moped.js"></script>
*/

$( document ).ready(function() {
    console.log( "index.html linked to moped.js. Printed with jQuery." );
});

/**/
/*End of Document Ready Function in jQuery*/
/**/

/* ALL CODE SHOULD GO BELOW HERE */

var Moped = function(settings) {

    // Settings
    var mopedElement = null;
    var xx = 0;

    function wall() {

      var x_right = parseInt(mopedElement.style.left)  + parseInt(mopedElement.style.width);
      var x_left = parseInt(mopedElement.style.left);
      var y_top = parseInt(mopedElement.style.top);
      var y_bottom = parseInt(mopedElement.style.top) + parseInt(mopedElement.style.height);


      var worldBox = document.getElementById("world");
      var mopedRect = mopedElement.getBoundingClientRect();
      var w = parseInt(worldBox.clientWidth);
      var h = parseInt(worldBox.clientHeight);

      if(y_bottom > h){
        mopedElement.style.top = (h - parseInt(mopedElement.style.height)) + 'px';
      }

      if(y_top < 0){
        mopedElement.style.top = '0px';
      }

      if(x_left < 0){
        mopedElement.style.left = '0px';
      }

      if(x_right < 0){
        mopedElement.style.left = (w - parseInt(mopedElement.style.width)) + 'px';
      }

      if (x_right > w){
        mopedElement.style.left = (w - parseInt(mopedElement.style.width)) + 'px';
      }
    }

    // Move the moped around manually

    function move(interactions){

      if(interactions.up){
        mopedElement.style.top = parseInt(mopedElement.style.top)-settings.mopedSpeed+"px";
      }

      if(interactions.down){
        mopedElement.style.top = parseInt(mopedElement.style.top)+settings.mopedSpeed+"px";
      }

      if(interactions.left){
        mopedElement.style.left = parseInt(mopedElement.style.left)-settings.mopedSpeed+"px";
      }

      if(interactions.right){
        mopedElement.style.left = parseInt(mopedElement.style.left)+settings.mopedSpeed+"px";
      }

      if(settings.walls){
        wall();
      }

    }

    function create() {
        // Create the object asset
    }

    function init(){
      // create();
      mopedElement = document.getElementById('moped');
      mopedElement.style.top = '175px';
      mopedElement.style.left = '50px';
      mopedElement.style.height = '10px';
      mopedElement.style.width = '15px';
      mopedElement.takings = 0;
      mopedElement.lunches = 2;
    };

    this.render = function(interactions){
      move(interactions);
    }

    init();
}
/*End object Moped(settings)*/
