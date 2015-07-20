'use strict';
var faker = require('faker');

var numObjs = 0;

function createTree(depth, spread, nameGen, dataGen, currentDepth) {
    currentDepth = currentDepth === undefined ? 0 : currentDepth;

    var node = {
        name: nameGen(),
        data: dataGen(),
        children: []
    };

    numObjs++;

    if (currentDepth < depth) {
        for (var i = 0; i < spread; i++) {
            node.children.push(createTree(depth, spread, nameGen, dataGen, currentDepth + 1));
        }
    } else {
        console.log(numObjs, 'objects');
    }
    return node;
}



module.exports = function(depth, spread, nameGen, dataGen) {

    nameGen = nameGen || function() {
        return faker.name.findName();
    };

    dataGen = dataGen || function() {
        return {
            'user': faker.internet.userName(),
            'host': faker.internet.domainName(),
            'city': faker.address.city()
        };
    };

    return createTree(depth, spread, nameGen, dataGen);
};
