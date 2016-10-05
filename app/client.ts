import ApolloClient, { createNetworkInterface } from 'apollo-client';

export const client = new ApolloClient({
    networkInterface: createNetworkInterface('https://graphql-swapi.parseapp.com', {}),
    shouldBatch: true,
});