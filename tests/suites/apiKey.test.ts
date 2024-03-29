/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as lib from '../../src';
import { Graphql, SelfQuery } from '../../src';
import { expect } from '@jest/globals';

const TEST_API_KEY = process.env.TEST_API_KEY!;

describe('API Key', () => {
    it('retrieves the self identity', async () => {
        lib.Configuration.setAPIKey(TEST_API_KEY);
        const result = await lib.Graphql.exec<SelfQuery>(
            Graphql.op(`
        query Self {
                self{
                    identity{
                        authenticated
                        urn
                    }
                }
            }
        `)
        );
        expect(result).toBeTruthy();

        //We should show as unauthenticated
        expect(result.data?.self?.identity?.authenticated).toEqual(false);
    });
});
