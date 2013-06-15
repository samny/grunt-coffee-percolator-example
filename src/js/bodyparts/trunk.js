//import bodyparts.snout

var Trunk,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Trunk = (function(_super) {
  __extends(Trunk, _super);

  function Trunk(name, length) {
    this.name = name != null ? name : 'Trunk';
    this.length = length != null ? length : 20;
  }

  return Trunk;

})(Snout);
