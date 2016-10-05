"use strict";
var apollo_client_1 = require('apollo-client');
exports.client = new apollo_client_1.default({
    networkInterface: apollo_client_1.createNetworkInterface('https://graphql-swapi.parseapp.com', {}),
    shouldBatch: true,
});
//# sourceMappingURL=client.js.map