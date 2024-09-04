import { ApolloClient, InMemoryCache, from } from '@apollo/client/core';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { removeTypenameFromVariables } from '@apollo/client/link/remove-typename';

import { HttpLink, split } from '@apollo/client';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';
import { setContext } from '@apollo/client/link/context';

export function create({
    auth = 'Bearer api_key_test',
    host = 'localhost:4200',
    secure = true
}: {
    host?: string;
    auth?: string;
    secure: boolean;
}) {
    const authLink = setContext((_, { headers }) => {
        // return the headers to the context so httpLink can read them
        return {
            headers: {
                ...headers,
                authorization: auth
            }
        };
    });

    const removeTypenameLink = removeTypenameFromVariables();
    const httpLink = new HttpLink({
        uri: `http${secure ? 's' : ''}://${host}/graphql`,
        credentials: 'include'
    });

    const wsLink = new GraphQLWsLink(
        createClient({
            url: `ws${secure ? 's' : ''}://${host}/subscriptions`,
            connectionParams: {
                authToken: auth
            }
        })
    );

    // The split function takes three parameters:
    //
    // * A function that's called for each operation to execute
    // * The Link to use for an operation if the function returns a "truthy" value
    // * The Link to use for an operation if the function returns a "falsy" value
    const splitLink = split(
        ({ query }) => {
            const definition = getMainDefinition(query);
            return (
                definition.kind === 'OperationDefinition' &&
                definition.operation === 'subscription'
            );
        },
        wsLink,
        httpLink
    );
    // ...code from the above example goes here...

    return new ApolloClient({
        link: from([removeTypenameLink, authLink, splitLink]),
        cache: new InMemoryCache()
    });
}

export { gql } from '@apollo/client/core';
