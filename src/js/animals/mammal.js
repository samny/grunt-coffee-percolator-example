//import animals.animal
//import bodyparts.head
//import bodyparts.leg

var Mammal,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Mammal = (function(_super) {
  __extends(Mammal, _super);

  function Mammal() {
    Mammal.__super__.constructor.apply(this, arguments);
    this.body.legs = [];
    this.body.head = new Head();
  }

  Mammal.prototype.addLegs = function(howMany) {
    var i, _i, _results;
    _results = [];
    for (i = _i = 1; 1 <= howMany ? _i <= howMany : _i >= howMany; i = 1 <= howMany ? ++_i : --_i) {
      _results.push(this.body.legs.push(new Leg("Leg " + i)));
    }
    return _results;
  };

  return Mammal;

})(Animal);
