var Place;

Place = (function() {
  function Place() {}

  Place.prototype.constuctor = function(name) {
    this.name = name != null ? name : 'anywhere';
  };

  return Place;

})();
