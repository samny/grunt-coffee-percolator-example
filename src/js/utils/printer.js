var Printer;

Printer = {
  print: function(message) {
    var container;
    container = document.createElement('pre');
    container.innerHTML = message;
    return document.body.appendChild(container);
  }
};
