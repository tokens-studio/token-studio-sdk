import { expect } from '@jest/globals';
import * as lib from '../../src';
import { Graphql, SelfQuery } from '../../src';


const TEST_API_KEY = process.env.TEST_API_KEY!;

describe('API Key', () => {

    it('retrieves the self identity', async () => {
        lib.Configuration.setAPIKey(TEST_API_KEY);
        const result = await lib.Graphql.exec<SelfQuery>(Graphql.op(lib.Queries.self));
        expect(result).toBeTruthy();

        //We should show as unauthenticated
        expect(result.data?.self?.authenticated).toEqual(false);
    });

});