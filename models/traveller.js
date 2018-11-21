const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const journeyStart = this.journeys.map(journey => journey.startLocation);
  return journeyStart;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const journeyEnd = this.journeys.map(journey => journey.endLocation);
  return journeyEnd;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  })
};


Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => { return journey.distance > minDistance;
});
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((accum, journey) => {
      return accum + journey.distance;
    }, 0)
  };

Traveller.prototype.getUniqueModesOfTransport = function () {
  const typesOfTransport = [];
   const journeys = this.journeys;
   journeys.filter((journey) => {
     if (!(typesOfTransport.includes(journey.transport))) {
       typesOfTransport.push(journey.transport);
     }
   })
   return typesOfTransport;
 };


module.exports = Traveller;
