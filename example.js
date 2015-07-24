'use strict';

var treegen = require('./index');

var tree = treegen({depth: 2, spread: 3});
var targetFile = './example.json';

var fs = require('fs');
fs.writeFile(targetFile, JSON.stringify(tree, null, '\t'), function(err) {
    console.log(err || 'ok');
});
