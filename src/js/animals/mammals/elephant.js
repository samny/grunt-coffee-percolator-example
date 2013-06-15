//import animals.mammal
//import bodyparts.tail
//import bodyparts.trunk

var Elephant,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Elephant = (function(_super) {
  __extends(Elephant, _super);

  function Elephant() {
    Elephant.__super__.constructor.apply(this, arguments);
    this.name = 'Elephant';
    this.body.head.bits.push(new Trunk());
    this.body.tail = new Tail();
    this.addLegs(4);
  }

  return Elephant;

})(Mammal);
