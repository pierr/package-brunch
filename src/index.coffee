path = require 'path'
fs  = require 'fs'

###
  A short plugin in order to add a package.js file with the list of files.
###
class PackageBrunch
  # Tell brunch this is a plugin
  brunchPlugin: yes
  # Plugin constructor to read conf.
  constructor: (@config) ->
    if 'package' of @config
      console.warn 'Warning: config.package is deprecated, please move it to config.plugins.package'

    # Defaults options
    @options = {
      externalFile: undefined
      fileName: 'package.js'
    }

    # Merge config
    cfg = @config.plugins?.package ? @config.package ? {}
    @options[k] = cfg[k] for k of cfg
  # Handler executed on compilation
  onCompile: (generatedFiles) ->
    packageInfos = require(__dirname + 'package.json')
    filePath = path.join(@config.paths.public, @options.fileName)
    fs.writeFileSync(filePath, JSON.stringify(packageInfos))

    return
###
  @module packageBrunch
###
module.exports = PackageBrunch
