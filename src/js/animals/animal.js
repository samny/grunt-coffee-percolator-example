//import utils.logger

var Animal;

Animal = (function() {
  function Animal(name, body) {
    this.name = name != null ? name : 'Animal';
    this.body = body != null ? body : {};
    Logger.log("I'm alive!", this);
  }

  return Animal;

})();
