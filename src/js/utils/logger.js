//import utils.objectutils


var Logger;

Logger = {
  log: function() {
    if (console) {
      return console.log.apply(console, arguments);
    }
  }
};
