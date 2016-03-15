var gulp = require('gulp');
var fs = require('fs');
var transform = require('jsonpath-object-transform');

function Config(fileName, mappedName) {
  this.__fileName = fileName;
  this.__mappedName = mappedName;
  console.log("filename");
};

Config.prototype.read = function() {
   var source = (fs.readFileSync(this.__fileName));
   var cfg = {};
   var template = JSON.parse(fs.readFileSync(this.__mappedName,"utf-8"));
   var System = {
       config: function (_cfg) {
           // Convert to JSON
           var _config = JSON.stringify(_cfg);
           debugger;
           var result = transform(template, _cfg);
           console.log(result);
           fs.writeFile('transformed.js',result);
       },
       paths: {},
       map: {},
       versions: {}
   };
   eval(source.toString());
   debugger;
};
var config = new Config("config.js","transform.js").read();
gulp.task('default', function() {
  // place code for your default task here
  var config = new Config("config.js","transform.js").read();
  //console.log(config.read());
  config.read();
});