//import places.place
//import animals.*


var Zoo,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Zoo = (function(_super) {
  __extends(Zoo, _super);

  function Zoo(name) {
    this.name = name != null ? name : 'Zoo';
    Zoo.__super__.constructor.apply(this, arguments);
    this.animals = [new Aardvark(), new Elephant()];
  }

  return Zoo;

})(Place);
