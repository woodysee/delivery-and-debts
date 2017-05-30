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
  /* > Cannot pass though Moped */
  /*  > Collision detection  */
  /*  > Cannot pass through another Debt Ball */
  /*  > Passes over the Restaurant */
  /*  > Passes over the Delivery Venues */

  // function clipRestaurant() {
  //   var Mx_right = parseInt(mopedElement.style.left)  + parseInt(mopedElement.style.width);
  //   var Mx_left = parseInt(mopedElement.style.left);
  //   var My_top = parseInt(mopedElement.style.top);
  //   var My_bottom = parseInt(mopedElement.style.top) + parseInt(mopedElement.style.height);
  //
  //   var restaurant = document.getElementById("restaurant");
  //   var mopedRect = mopedElement.getBoundingClientRect();
  //
  //   var Rx_left = parseInt(restaurant.style.left);
  //   var Rx_right = parseInt(restaurant.style.left + restaurant.style.width);

    //Moped collides from right of x-axis: (Rx_left + Rw < Mx_left)
    //Moped collides from left of x-axis: (Rx_left > Mx.right)
    //Moped is bigger than the Restaurant: (Mw < Rx.left)

    // var rightCollideX = (Rx_left + restaurant.style.width) <= Mx_left;
    // var leftCollideX = Rx_left >= Mx_right;
    // var thinLeftX = mopedElement.style.width <= Rx_left;
    //
    // if (rightCollideX && (leftCollideX && thinLeftX)) {
    //   Mx_left = Rx_right;
    // } else if (leftCollideX && thinLeftX) {
    //   Mx_left = Rx_left - mopedElement.style.width;
    // } else if (thinLeftX) {
    //   Mx_left = 0;
    // }
    //
    // if (My_bottom >= Ry_top) {
    //   My_top = Ry_top - mopedElement.style.height;
    // }
    //
    // if (Ry_bottom <= My_top) {
    //   My_top = Ry_top + restaurant.style.height;
    // }

    //End of X wall to keep Moped Out!

    //}


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

  };

  function create() {
      // Create the object asset
  };

  function init(){
    // create();
    mopedElement = document.getElementById('moped');
    mopedElement.style.top = '175px';
    mopedElement.style.left = '50px';
    mopedElement.style.height = '15px';
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
