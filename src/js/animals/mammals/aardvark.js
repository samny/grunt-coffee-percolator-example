//import animals.mammal
//import bodyparts.snout
//import bodyparts.tail

var Aardvark,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Aardvark = (function(_super) {
  __extends(Aardvark, _super);

  function Aardvark() {
    Aardvark.__super__.constructor.apply(this, arguments);
    this.name = 'Aardvark';
    this.body.head.bits.push(new Snout());
    this.body.tail = new Tail();
    this.addLegs(4);
  }

  return Aardvark;

})(Mammal);
