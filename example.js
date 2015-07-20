'use strict';

var treegen = require('./index');


function generateObjectName() {
    return 'myObjectName';
}

function generateObjectData() {
    return {
        foo: 'bar'
    };
}

var tree = treegen(1, 3, generateObjectName, generateObjectData);
var targetFile = './example.json';

var fs = require('fs');
fs.writeFile(targetFile, JSON.stringify(tree, null, '\t'), function(err) {
    console.log(err || 'ok');
});
