package-brunch
==============

A brunch in order to include the package of the pack.

## Installation

`npm install --save package-brunch` , and it will be runned by brunch.

## Configuration

In your brunch config file: `config.coffee`, you can customize the pluin behaviour:

| param         | type     | meaning                                                                       | default                            |
|---------------|----------|-------------------------------------------------------------------------------|------------------------------------|
| fileName      | string   | The generated file name after brunch compilation.                             | package.js                         |
| fileSource    | string   | The source file which will be read to create tjhe fileName file               | package.json                       |
| nameSpace     | string   | The namespace into which the file will be added in the window object.         | app                                |
| fileTransform | function | A transformation function you want to apply to the string source of the file. | `function(source){return source;}` |

- Example in the `config.coffee`: 
```coffee
  plugins:
    package:
      fileName: "myApp.version.js"
      nameSpace: "myApp"
```

## TODO
 Implement a xml version in order to build a file from server.xml conf.

````javascript
var fs=require("fs");
var xml=fs.readFileSync("t.xml", "utf8");
var parseString = require('xml2js').parseString;
parseString(xml, function (err, result) {
    console.log('%j',result);
});
```
