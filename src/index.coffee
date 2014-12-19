path = require 'path'
fs  = require 'fs'

module.exports = class PackageBrunch
  brunchPlugin: yes

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

  onCompile: (generatedFiles) ->
    packageInfos = require(__dirname + 'package.json')
    filePath = path.join(@config.paths.public, @options.fileName)
    fs.writeFileSync(filePath, JSON.stringify(packageInfos))

    return
