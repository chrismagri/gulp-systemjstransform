var gulp = require('gulp');
var fs = require('fs');

function Config(fileName) {
    debugger;
  this.__fileName = fileName;
  console.log("filename");
}

Config.prototype.read = function() {
   var source = (fs.readFileSync(this.__fileName));
   debugger;
   var cfg = {};
   var System = {
       config: function (_cfg) {
           for (var c in _cfg) {
               if (!_cfg.hasOwnProperty(c))
                   continue;

               var v = _cfg[c];
               if (typeof v === 'object') {
                   cfg[c] = cfg[c] || {};
                   for (var p in v) {
                       if (!v.hasOwnProperty(p))
                           continue;
                       cfg[c][p] = v[p];
                   }
               }
               else
                   cfg[c] = v;
           }
       },
       paths: {},
       map: {},
       versions: {}
   };
   eval(source.toString());
   debugger;
};
var config = new Config("config.js");
gulp.task('default', function() {
  // place code for your default task here
  var config = new Config("config.js");
  console.log(config.read());
  //config.read();
});