/* ALL CODE SHOULD GO BELOW HERE */

var Moped = function (settings) {
  // Settings
  var mopedElement = null;
  var earnings = document.getElementById("player1-earnings");
  var lunchCount = document.getElementById("lunchCount");

  function wall() {
    var x_right =
      parseInt(mopedElement.style.left) + parseInt(mopedElement.style.width);
    var x_left = parseInt(mopedElement.style.left);
    var y_top = parseInt(mopedElement.style.top);
    var y_bottom =
      parseInt(mopedElement.style.top) + parseInt(mopedElement.style.height);

    var worldBox = document.getElementById("world");
    var w = parseInt(worldBox.clientWidth);
    var h = parseInt(worldBox.clientHeight);

    if (y_bottom > h) {
      mopedElement.style.top = h - parseInt(mopedElement.style.height) + "px";
    }

    if (y_top < 0) {
      mopedElement.style.top = "0px";
    }

    if (x_left < 0) {
      mopedElement.style.left = "0px";
    }

    if (x_right < 0) {
      mopedElement.style.left = w - parseInt(mopedElement.style.width) + "px";
    }

    if (x_right > w) {
      mopedElement.style.left = w - parseInt(mopedElement.style.width) + "px";
    }
  }

  function refillLunches() {
    if (mopedElement.lunches == false) {
      mopedElement.lunches = true;
      lunchCount.innerHTML = "YES";
      if (mopedElement.takings > 0) {
        earnings.innerHTML =
          parseInt(earnings.innerHTML) - Math.ceil(0.1 * mopedElement.takings);
        cashCount.innerHTML = 0; //  update the HTML
        mopedElement.takings = 0; //  update the array
        if (parseInt(earnings.innerHTML) <= 0) {
          earnings.innerHTML = 0;
          winGame();
        }
      }
    }
  }

  function deliverLunch() {
    if (document.getElementById("lunchCount").innerHTML == "YES") {
      /**/
      var randomlunchCost =
        Math.floor(Math.random() * settings.randomlunchRange) +
        settings.minlunchCost;
      mopedElement.lunches = mopedElement.lunches - 1;
      lunchCount.innerHTML = "NO";
      mopedElement.takings = mopedElement.takings + randomlunchCost;
      var cashCount = document.getElementById("cashCount");
      cashCount.innerHTML = mopedElement.takings;
    }
  }

  function handleRestaurantVisit(bigElement) {
    if (bigElement.id == "restaurant") {
      settings.restaurantVisits = settings.restaurantVisits + 1;
      if (settings.restaurantVisits === 1) {
        refillLunches();
        createDeliveryVenues();
      }
    } else {
      settings.restaurantVisits = 0;
    }
  }

  function clipSmallAndBigRects(smallRect, bigRect) {
    //defining 2 elements

    var smallElement = document.getElementById(smallRect);
    var bigElement = document.getElementById(bigRect);

    var ax = parseInt(smallElement.style.left);
    //var ay = parseInt(smallElement.style.top);
    var ay = smallElement.getBoundingClientRect().top;
    var bx =
      parseInt(smallElement.style.left) + parseInt(smallElement.style.width);
    var by = parseInt(smallElement.style.top);
    var cx =
      parseInt(smallElement.style.left) + parseInt(smallElement.style.width);
    var cy =
      parseInt(smallElement.style.top) + parseInt(smallElement.style.height);
    var dx = parseInt(smallElement.style.left);
    var dy =
      parseInt(smallElement.style.top) + parseInt(smallElement.style.height);
    var Ax = parseInt(bigElement.style.left);
    var Ay = parseInt(bigElement.style.top);
    var Bx = parseInt(bigElement.style.left) + parseInt(bigElement.style.width);
    var By = parseInt(bigElement.style.top);
    var Cx = parseInt(bigElement.style.left) + parseInt(bigElement.style.width);
    var Cy = parseInt(bigElement.style.top) + parseInt(bigElement.style.height);
    var Dx = parseInt(bigElement.style.left);
    var Dy = parseInt(bigElement.style.top) + parseInt(bigElement.style.height);

    //Wierd corner jumps - to improve code?
    //SmallRect incoming from the North
    if (Dy >= dy && dy >= Ay && Ax <= ax && bx <= Bx) {
      smallElement.style.top = Ay - parseInt(smallElement.style.height) + "px";
      //document.body.bigElement.style.backgroundColor = 'rgba(' + 84 + ',' + 135 + ',' + 107 + 1 + ')';
      console.log(
        "Moped has hit NORTH of " +
          bigElement.id +
          ", an impassable object with class of " +
          bigElement.classList[0] +
          ".",
      );
      //Contextual consequences of hitting the object below
      handleRestaurantVisit(bigElement);
      /**/
      if (bigElement.classList[0] == "delivery-venue") {
        deliverLunch();
      }
      //Contextual consequences of hitting the object above
    }

    //SmallRect incoming from the East
    if (Ax <= ax && ax <= Bx && By <= ay && dy <= Cy) {
      smallElement.style.left = Bx + "px";
      //ax = Bx + "px";
      //document.body.bigElement.style.backgroundColor = 'rgba(' + 84 + ',' + 135 + ',' + 107 + 1 + ')';
      console.log(
        "Moped has hit EAST of " +
          bigElement.id +
          ", an impassable object with class of " +
          bigElement.classList[0] +
          ".",
      );

      //Contextual consequences of hitting the object below
      handleRestaurantVisit(bigElement);
      /**/
      if (bigElement.classList[0] == "delivery-venue") {
        deliverLunch();
      }
      //Contextual consequences of hitting the object above
    }

    //SmallRect incoming from the South
    if (By <= by && by <= Cy && cx <= Cx && Dx <= dx) {
      smallElement.style.top = Cy + "px";
      //document.body.bigElement.style.backgroundColor = 'rgba(' + 84 + ',' + 135 + ',' + 107 + 1 + ')';
      console.log(
        "Moped has hit SOUTH of " +
          bigElement.id +
          ", an impassable object with class of " +
          bigElement.classList[0] +
          ".",
      );
      //Contextual consequences of hitting the object below
      handleRestaurantVisit(bigElement);
      /**/
      if (bigElement.classList[0] == "delivery-venue") {
        deliverLunch();
      }
      //Contextual consequences of hitting the object above
    }

    //SmallRect incoming from the West
    if (cx <= Cx && Dx <= cx && dy <= Dy && Ay <= ay) {
      //cx = Dx;
      smallElement.style.left =
        parseInt(bigElement.style.left) -
        parseInt(smallElement.style.width) +
        "px";
      //document.body.bigElement.style.backgroundColor = 'rgba(' + 84 + ',' + 135 + ',' + 107 + 1 + ')';
      console.log(
        "Moped has hit WEST of " +
          bigElement.id +
          ", an impassable object with class of " +
          bigElement.classList[0] +
          ".",
      );
      //Contextual consequences of hitting the object below
      handleRestaurantVisit(bigElement);
      /**/
      if (bigElement.classList[0] == "delivery-venue") {
        deliverLunch();
      }
      //End of Contextual consequences of hitting the object
    }
  }

  // Move the moped around manually

  function move(interactions) {
    if (interactions.up) {
      mopedElement.style.top =
        parseInt(mopedElement.style.top) - settings.mopedSpeed + "px";
    }

    if (interactions.down) {
      mopedElement.style.top =
        parseInt(mopedElement.style.top) + settings.mopedSpeed + "px";
    }

    if (interactions.left) {
      mopedElement.style.left =
        parseInt(mopedElement.style.left) - settings.mopedSpeed + "px";
    }

    if (interactions.right) {
      mopedElement.style.left =
        parseInt(mopedElement.style.left) + settings.mopedSpeed + "px";
    }

    if (settings.walls) {
      wall();
    }

    if (settings.noclip === false) {
      clipSmallAndBigRects("moped", "restaurant");
      clipSmallAndBigRects("moped", "deliveryA");
      clipSmallAndBigRects("moped", "deliveryB");
      clipSmallAndBigRects("moped", "deliveryC");
    }
  }

  function init() {
    // create();
    mopedElement = document.getElementById("moped");
    mopedElement.style.top = "175px";
    mopedElement.style.left = "60px";
    mopedElement.style.height = "15px";
    mopedElement.style.width = "15px";
    mopedElement.takings = 0;
    mopedElement.lunches = false;
    mopedElement.earnings = settings.initEarnings;
  }

  this.render = function (interactions) {
    move(interactions);
  };

  init();
};
