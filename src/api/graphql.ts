import { API } from '@aws-amplify/api';
import { GraphQLOptions, GraphQLResult, } from '@aws-amplify/api-graphql';
import { ApiKey } from "./apiKey";
import { Configuration } from "./configure";

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
    export const exec = async <T>(input: GraphQLOptions): Promise<GraphQLResult<T>> => {
        const extend = {};
        // Use to inject the auth token
        if (Configuration.get().aws_appsync_authenticationType === 'AWS_LAMBDA') {
            //@ts-ignore
            extend.authToken = ApiKey.get();
        }
        return await API.graphql({
            ...input,
            ...extend
        }) as Promise<GraphQLResult<T>>;
    }

    /**
     * A convenience wrapper to create a GraphQLOptions type input for exec
     */
    export const op = <T extends Object>(query: any, variables?: T): GraphQLOptions => ({
        query,
        variables
    });
}

export type { GraphQLOptions, GraphQLResult } from '@aws-amplify/api-graphql';