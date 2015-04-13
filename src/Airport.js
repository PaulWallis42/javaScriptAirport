var Airport = function() {
  this.planes = ([]);
};

Airport.prototype.park = function(plane) {
  this.planes.push(plane);
};