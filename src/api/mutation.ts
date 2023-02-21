import { Graphql } from './graphql';
import * as mutations from '../graphql/mutations';

/**
 * Use this namespace to perform any mutation actions against data
 */
export namespace Mutation {

    export type ICreateToken = {
        token: {
            description?: String
            name: String
        },
        tokenSetID: String
    }

    /**
     * Creates a Token in the desired set
     * @param input 
     * @returns 
     */
    export const createToken = async (input: ICreateToken) => {
        return await Graphql.exec({
            query: mutations.createToken,
            variables: input,
        });
    }

    export const raw = mutations
}

