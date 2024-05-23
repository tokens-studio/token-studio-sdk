import * as mutations from '../graphql/mutations';
import {
    CreateTokenMutation,
    CreateTokenMutationVariables,
    TokenInput as GraphqlTokenInput
} from '../graphqlTypes';
import { Graphql } from './graphql';

/**
 * Use this namespace to perform any mutation actions against data
 * 

 */
export namespace Mutation {
    export interface ITokenInput {
        description?: string;
        name: string;
        type: string;
        metadata: Record<string, any>;
    }

    export interface ColorTokenInput extends ITokenInput {
        value: string;
    }

    /**
     * The GraphQL endpoint should note which types are considered to be simple scalar
     */
    export interface ScalarTokenInput extends ITokenInput {
        value: string;
    }

    export interface TypographyTokenInput extends ITokenInput {
        value: {
            fontFamily: string;
            fontWeight: string;
            letterSpacing: string;
            lineHeight: string;
            paragraphIndent: string;
            paragraphSpacing: string;
            textCase: string;
            textDecoration: string;
        };
    }

    export type TokenInput =
        | TypographyTokenInput
        | ColorTokenInput
        | ScalarTokenInput;

    export const serializeToken = (token: TokenInput): GraphqlTokenInput => {
        return {
            name: token.name,
            description: token.description,
            value:
                typeof token.value === 'string'
                    ? token.value
                    : JSON.stringify(token.value),
            type: token.type
        };
    };

    /**
     * Creates a Token in the desired set
     * Use this function over the raw createToken Mutation to take advantage of automatic serialization of the token value
     * @param input
     * @returns
     */
    export const createToken = async (set: string, token: TokenInput) => {
        return await Graphql.exec<CreateTokenMutation>(
            Graphql.op(mutations.createToken, {
                set,
                input: serializeToken(token)
            } as CreateTokenMutationVariables)
        );
    };

    export const raw = mutations;
}
