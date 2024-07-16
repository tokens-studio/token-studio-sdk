/* eslint-disable @typescript-eslint/no-namespace */
import { ApolloClient, InMemoryCache, NormalizedCacheObject, gql } from '@apollo/client';

// Initialize Apollo Client
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    uri: 'http://localhost:4200/graphql',
    cache: new InMemoryCache()
});

/**
 * The namespace for executing GraphQL queries.
 *
 * This will likely be the most common namespace used
 */
export namespace Graphql {
    /**
     * Executes a GraphQL query or mutation against the API.
     *
     * @param input
     */
    export const exec = async <T>(
        input: { query: string, variables?: Record<string, any> }
    ): Promise<{ data?: T, errors?: any }> => {
        
        const { query, variables } = input;
        console.log('Executing query:', query);
        const gqlQuery = gql([query]);

        try {
            const response = await client.query<T>({
                query: gqlQuery,
                variables
            });

            return {
                data: response.data ?? undefined, // Handle null case
                errors: response.errors
            };
        } catch (error) {
            console.error('Error executing query:', error);
            return {
                data: undefined,
                errors: error
            };
        }
    };

    /**
     * Executes a GraphQL mutation against the API.
     *
     * @param input
     */
    export const mutate = async <T>(
        input: { mutation: string, variables?: Record<string, any> }
    ): Promise<{ data?: T, errors?: any }> => {
        
        const { mutation, variables } = input;
        console.log('Executing mutation:', mutation);
        const gqlMutation = gql([mutation]);

        try {
            const response = await client.mutate<T>({
                mutation: gqlMutation,
                variables
            });

            return {
                data: response.data ?? undefined, // Handle null case
                errors: response.errors
            };
        } catch (error) {
            console.error('Error executing mutation:', error);
            return {
                data: undefined,
                errors: error
            };
        }
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

    /**
     * A convenience wrapper to create a GraphQLOptions type input for mutate
     */
    export const opMutate = <T extends Record<string, any>>(
        mutation: string,
        variables?: T
    ): { mutation: string, variables?: T } => ({
        mutation,
        variables
    });

    export const getConfig = () => client;
}