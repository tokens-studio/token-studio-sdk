import * as lib from '../../src/index.js';
import { Graphql, SelfQuery } from '../../src/index.js';
import { expect } from 'vitest';

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
        `),
		);
		expect(result).toBeTruthy();

		//We should show as unauthenticated
		expect(result.data?.self?.identity?.authenticated).toEqual(false);
	});
});
