import {
    Configuration,
    Graphql,
    OrganizationsQuery,
    SelfQuery
} from '../../src';
import { expect } from '@jest/globals';

describe('Public', () => {
    beforeAll(() => {
        Configuration.setPublic();
    });

    it('retrieves the self identity', async () => {
        const result = await Graphql.exec<SelfQuery>(
            Graphql.op(`
        query Self {
            self{
                identity{
                    authenticated
                    urn
                }
            }
        }`)
        );
        expect(result).toBeTruthy();

        //We should show as unauthenticated
        expect(result.data?.self?.identity?.authenticated).toEqual(false);
    });
    it('retrieves publically accessible organizations', async () => {
        const result = await Graphql.exec<OrganizationsQuery>(
            Graphql.op(`
        query Organizations{
            organizations{
                name
                urn
            }
        }
        `)
        );
        expect(result).toBeTruthy();

        expect(result.errors).toBeFalsy();

        expect(result.data?.organizations).toBeTruthy();
        if (result.data?.organizations) {
            expect(result.data?.organizations?.length > 0).toEqual(true);
        }
    });
});
