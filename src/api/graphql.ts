import { ApolloClient, InMemoryCache, NormalizedCacheObject, gql } from '@apollo/client';

// Initialize Apollo Client
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: 'http://localhost:4200/graphql',
    cache: new InMemoryCache()
});

/**
 * The namespace for executing graphql queries.
 *
 * This will likely be the most common namespace used
 */
export namespace Graphql {
    /**
     * Executes a graphQL query against the API.
     *
     * @example
     * This examples shows how to retrieve the current identity of the caller
     * ```
     * import { Graphql,Query,SelfQuery, Identity  } from '@tokens-studio/sdk';
     * const response = await Graphql.exec<SelfQuery>({ query:Query.raw.self});
     * const identity = response.data?.self as Identity;
     * ```
     *
     * @param input
     */
    export const exec = async <T>(
        input: { query: string, variables?: Record<string, any> }
    ): Promise<{ data?: T, errors?: any }> => {
        
        const { query, variables } = input;
        console.log('Executing query:', query);
        const gqlQuery = gql([query]);

        const response = await client.query<T>({
            query: gqlQuery,
            variables
        });

        return {
            data: response.data,
            errors: response.errors
        };
    };

    /**
     * A convenience wrapper to create a GraphQLOptions type input for exec
     */
    export const op = <T extends Record<string, any>>(
        query: string,
        variables?: T
    ): { query: string, variables?: T } => ({
        query,
        variables
    });

    export const getConfig = () => client;
}
