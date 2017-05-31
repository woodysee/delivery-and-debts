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
  var takings = 0;
  var lunches = 0;

    //Algorithm confirm('msg');urtesy of https://yal.cc/rectangle-circle-intersection-test/

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
    };

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
  /*  > Cannot pass though Moped */
  /*  > Collision detection  */
  /*  > Cannot pass through another Debt Ball */
  /*  > Passes over the Restaurant */
  /*  > Passes over the Delivery Venues */

  // Function for clipTwoObjects here

  function clipSmallAndBigRects(smallRect,bigRect) {

    //defining 2 elements

      var smallElement = document.getElementById(smallRect);
      var bigElement = document.getElementById(bigRect);

      var ax = parseInt(smallElement.style.left);
      var ay = parseInt(smallElement.style.top);
      var bx = parseInt(smallElement.style.left) + parseInt(smallElement.style.width);
      var by = parseInt(smallElement.style.top);
      var cx = parseInt(smallElement.style.left) + parseInt(smallElement.style.width);
      var cy = parseInt(smallElement.style.top) + parseInt(smallElement.style.height);
      var dx = parseInt(smallElement.style.left);
      var dy = parseInt(smallElement.style.top) + parseInt(smallElement.style.height);
      var Ax = parseInt(bigElement.style.left);
      var Ay = parseInt(bigElement.style.top);
      var Bx = parseInt(bigElement.style.left) + parseInt(bigElement.style.width);
      var By = parseInt(bigElement.style.top);
      var Cx = parseInt(bigElement.style.left) + parseInt(bigElement.style.width);
      var Cy = parseInt(bigElement.style.top) + parseInt(bigElement.style.height);
      var Dx = parseInt(bigElement.style.left);
      var Dy = parseInt(bigElement.style.top) + parseInt(bigElement.style.height);

      //1 corner check - to improve if there's time...
      //SmallRect incoming from the North
        /*With help from Alex and Geng. Thanks to El for the "finishing touch", saved me hours of debugging...)*/
      if ((Dy >= dy) && (dy >= Ay) && (Ax <= ax) && (bx <= Bx)) {
        smallElement.style.top = (Ay - parseInt(smallElement.style.height)) + "px";
        //document.body.bigElement.style.backgroundColor = 'rgba(' + 84 + ',' + 135 + ',' + 107 + 1 + ')';
        console.log("Moped hits Obj: North");
        if (mopedElement.lunches <= 2 /*only for Restaurant*/) {
          moped.lunches = 2;
        };
      };

      //SmallRect incoming from the East
      if ((Ax <= ax) && (ax <= Bx) && (By <= ay) && (dy <= Cy)) {
        smallElement.style.left = Bx + "px";
        //ax = Bx + "px";
        //document.body.bigElement.style.backgroundColor = 'rgba(' + 84 + ',' + 135 + ',' + 107 + 1 + ')';
        console.log("Moped hits Obj: East");
        if (mopedElement.lunches <= 2 /*only for Restaurant*/) {
          mopedElement.lunches = 2;
        };
      };

      //SmallRect incoming from the South
      if ((By <= by) && (by <= Cy) && (cx <= Cx) && (Dx <= dx)) {
        smallElement.style.top = Cy + "px";
        //document.body.bigElement.style.backgroundColor = 'rgba(' + 84 + ',' + 135 + ',' + 107 + 1 + ')';
        console.log("Moped hits Obj: South");
        if (mopedElement.lunches <= 2) {
          mopedElement.lunches = 2;
        };
      };

      //SmallRect incoming from the West
      if ((cx <= Cx) && (Dx <= cx) && (dy <= Dy) && (Ay <= ay)) {
        //cx = Dx;
        smallElement.style.left = parseInt(bigElement.style.left) - parseInt(smallElement.style.width) + "px";
        //document.body.bigElement.style.backgroundColor = 'rgba(' + 84 + ',' + 135 + ',' + 107 + 1 + ')';
        console.log("Moped hits Obj: West");
        if (mopedElement.lunches <= 2) {
          mopedElement.lunches = 2;
        };
      };
  };

  // Move the moped around manually

  function move(interactions){

    if(interactions.up){
      mopedElement.style.top = parseInt(mopedElement.style.top)-settings.mopedSpeed+"px";
    };

    if(interactions.down){
      mopedElement.style.top = parseInt(mopedElement.style.top)+settings.mopedSpeed+"px";
    };

    if(interactions.left){
      mopedElement.style.left = parseInt(mopedElement.style.left)-settings.mopedSpeed+"px";
    };

    if(interactions.right){
      mopedElement.style.left = parseInt(mopedElement.style.left)+settings.mopedSpeed+"px";
    };

    if(settings.walls){
      wall();
    };

    if(settings.noclip === false){
      clipSmallAndBigRects("moped","restaurant");
      clipSmallAndBigRects("moped","deliveryA1");
      clipSmallAndBigRects("moped","deliveryB2");
      clipSmallAndBigRects("moped","deliveryB3"); //Ask Jens why cannot pass only 1 object (need to create? Only in line styling works...)
    };
  };

  function create() {
      // Create the object asset
  };

  function init(){
    // create();
    mopedElement = document.getElementById('moped');
    mopedElement.style.top = '175px';
    mopedElement.style.left = '60px';
    mopedElement.style.height = '15px';
    mopedElement.style.width = '15px';
    mopedElement.takings = 0;
    mopedElement.lunches = 2;
  };

  this.render = function(interactions){
    move(interactions);
  };

  init();
}
/*End object Moped(settings)*/
