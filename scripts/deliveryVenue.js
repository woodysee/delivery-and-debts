/* ALL CODE SHOULD GO BELOW HERE */

var DeliveryVenue = function () {
  this.render = function (interactions) {};
};

var deliveryVenueRows = Array.from({ length: 3 }).map((_, i) => {
  return `${i * 120 + 20}px`;
});
var deliveryVenueCols = Array.from({ length: 4 }).map((_, i) => {
  return `${i * 120 + 30}px`;
});
var deliveryVenuePossibilities = deliveryVenueRows.reduce(
  (acc, row, rowIndex) => {
    var workingAcc = Object.assign([], acc);
    deliveryVenueCols.map((col, colIndex) => {
      if (rowIndex !== 1 || colIndex !== 0) {
        workingAcc.push([row, col]);
      }
    });
    return workingAcc;
  },
  [],
);

function createRandSequence() {
  var workingDeliveryVenuePossibilities = Object.assign(
    [],
    deliveryVenuePossibilities,
  );
  return Array.from({ length: 3 }).reduce((acc, val) => {
    var workingAcc = Object.assign([], acc);
    var pseudorandomIndex = Math.floor(
      Math.random() * workingDeliveryVenuePossibilities.length,
    );
    workingAcc.push(workingDeliveryVenuePossibilities[pseudorandomIndex]);
    // Remove used location
    workingDeliveryVenuePossibilities =
      workingDeliveryVenuePossibilities.filter(
        (_, i) => i !== pseudorandomIndex,
      );
    return workingAcc;
  }, []);
}

function createDeliveryVenues() {
  var randomisedDeliveryVenues = createRandSequence();
  deliveryVenueElementA = document.getElementById("deliveryA");
  deliveryVenueElementA.style.height = "60px";
  deliveryVenueElementA.style.width = "40px";
  deliveryVenueElementA.style.top = randomisedDeliveryVenues[0][0];
  deliveryVenueElementA.style.left = randomisedDeliveryVenues[0][1];

  deliveryVenueElementB = document.getElementById("deliveryB");
  deliveryVenueElementB.style.height = "60px";
  deliveryVenueElementB.style.width = "40px";
  deliveryVenueElementB.style.top = randomisedDeliveryVenues[1][0];
  deliveryVenueElementB.style.left = randomisedDeliveryVenues[1][1];

  deliveryVenueElementC = document.getElementById("deliveryC");
  deliveryVenueElementC.style.height = "60px";
  deliveryVenueElementC.style.width = "40px";
  deliveryVenueElementC.style.top = randomisedDeliveryVenues[2][0];
  deliveryVenueElementC.style.left = randomisedDeliveryVenues[2][1];
}
