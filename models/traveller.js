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

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
