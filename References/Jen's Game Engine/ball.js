var Ball = function(settings) {

    // Settings
    var ballElement = null;
    var bullets = [];

    function wall() {

      //ballElement.getBoundingClientRect() is better than parseInt;

      var x_right = parseInt(ballElement.style.left)  + parseInt(ballElement.style.width);
      var x_left = parseInt(ballElement.style.left);
      var y_top = parseInt(ballElement.style.top);
      var y_bottom = parseInt(ballElement.style.top) + parseInt(ballElement.style.height);

      var ballRect = ballElement.getBoundingClientRect();
      var w = parseInt(window.innerWidth);
      var h = parseInt(window.innerHeight);

      if(y_bottom > h){
        ballElement.style.top = (h - parseInt(ballElement.style.height)) + 'px';
      }

      if(y_top < 0){
        ballElement.style.top = '0px';
      }

      if(x_left < 0){
        ballElement.style.left = '0px';
      }

      if(x_right < 0){
        ballElement.style.left = (w - parseInt(ballElement.style.width)) + 'px';
      }

      if (x_right > w){
        ballElement.style.left = (w - parseInt(ballElement.style.width)) + 'px';
      }
    }

    // Move the ball around manually
    function move(interactions){

      if(interactions.up){
        ballElement.style.top = parseInt(ballElement.style.top)-8+"px";
      }

      if(interactions.down){
        ballElement.style.top = parseInt(ballElement.style.top)+8+"px";
      }

      if(interactions.left){
        ballElement.style.left = parseInt(ballElement.style.left)-8+"px";
      }

      if(interactions.right){
        ballElement.style.left = parseInt(ballElement.style.left)+8+"px";
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
      ballElement = document.getElementById('ball');
      ballElement.style.top = '400px';
      ballElement.style.left = '400px';
      ballElement.style.height = '100px';
      ballElement.style.width = '100px';
    };

    this.render = function(interactions){
      move(interactions);
    }

    init();
}
