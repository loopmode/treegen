'use strict';
var faker = require('faker');

function createTree(spread, depth, nameGen, dataGen, currentDepth) {
    currentDepth = currentDepth === undefined ? 0 : currentDepth;

    var node = {
        name: nameGen(),
        data: dataGen(),
        children: []
    };

    if (currentDepth < depth) {
        for (var i = 0; i < spread; i++) {
            node.children.push(createTree(spread, depth, nameGen, dataGen, currentDepth + 1));
        }
    }

    return node;
}



module.exports = function(spread, depth, nameGen, dataGen) {

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

    return createTree(spread, depth, nameGen, dataGen);
};
