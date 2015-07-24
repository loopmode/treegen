var faker = require('faker');

function createTree(args, currentDepth) {
    currentDepth = currentDepth === undefined ? 0 : currentDepth;

    var node = {
        name: args.name(),
        data: args.data(),
        children: []
    };

    if (currentDepth < args.depth) {
        for (var i = 0; i < args.spread; i++) {
            node.children.push(createTree(args, currentDepth + 1));
        }
    }
    return node;
}



module.exports = function(args) {
    args.depth = args.depth === undefined ? 1 : args.depth;
    args.spread = args.spread === undefined ? 1 : args.spread;
    args.name = args.name || function() {
        return faker.name.findName();
    };

    args.data = args.data || function() {
        return {
            'user': faker.internet.userName(),
            'host': faker.internet.domainName(),
            'city': faker.address.city()
        };
    };
    return createTree(args);
};
