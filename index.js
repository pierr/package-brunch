// Generated by CoffeeScript 1.7.1
(function() {
  var PackageBrunch, fs, path;

  path = require('path');

  fs = require('fs');


  /*
    A short plugin in order to add a package.js file with the list of files.
   */

  PackageBrunch = (function() {
    PackageBrunch.prototype.brunchPlugin = true;

    function PackageBrunch(config) {
      var cfg, k, _ref, _ref1, _ref2;
      this.config = config;
      if ('package' in this.config) {
        console.warn('Warning: config.package is deprecated, please move it to config.plugins.package');
      }
      this.options = {
        fileName: 'package.js',
        fileSource: "package.json",
        nameSpace: "app",
        fileTransform: function(data) {
          return data;
        }
      };
      cfg = (_ref = (_ref1 = (_ref2 = this.config.plugins) != null ? _ref2["package"] : void 0) != null ? _ref1 : this.config["package"]) != null ? _ref : {};
      for (k in cfg) {
        this.options[k] = cfg[k];
      }
    }

    PackageBrunch.prototype.onCompile = function(generatedFiles) {
      var filePath, fileString, packageInfos;
      packageInfos = require("" + __dirname + '/../../' + this.options.fileSource);
      filePath = path.join(this.config.paths["public"], "javascripts", this.options.fileName);
      fileString = "window." + this.options.nameSpace + " = window." + this.options.nameSpace + " ||{}; window." + this.options.nameSpace + ".package = " + (JSON.stringify(this.options.fileTransform(packageInfos), null, 2)) + ";";
      fs.writeFileSync(filePath, fileString);
    };

    return PackageBrunch;

  })();


  /*
    @module packageBrunch
   */

  module.exports = PackageBrunch;

}).call(this);
