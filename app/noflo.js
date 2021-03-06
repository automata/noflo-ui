console.time('noflo-ui-init');
console.time('polymer-ready');
window.addEventListener('polymer-ready', function() {
  console.timeEnd('polymer-ready');
  document.body.classList.remove('loading');
  window.nofloStarted = false;

  console.time('noflo-prepare');
  var noflo = require('noflo');
  noflo.graph.loadJSON(require('noflo-ui/graphs/main.fbp'), function (g) {
    g.baseDir = '/noflo-ui';
    noflo.createNetwork(g, function (n) {
      n.on('process-error', function (err) {
        console.log(err);
      });
      console.timeEnd('noflo-prepare');
      console.timeEnd('noflo-ui-init');
    });
  });
});
