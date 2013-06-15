// import places.zoo
// import utils.*

var App;

App = {
  zoo: new Zoo(),
  init: function() {
    Logger.log('init', this.zoo);
    return Printer.print(JSON.stringify(this.zoo, null, 4));
  }
};

self.app = App;

App.init();
