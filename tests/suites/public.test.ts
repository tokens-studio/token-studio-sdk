import { expect } from '@jest/globals';
import { SelfQuery, OrganizationsQuery, Graphql, Configuration, Queries } from '../../src';

describe('Public', () => {

    beforeAll(() => {
        Configuration.setPublic();
    })

    it('retrieves the self identity', async () => {

        const result = await Graphql.exec<SelfQuery>(Graphql.op(Queries.self));
        expect(result).toBeTruthy();

        //We should show as unauthenticated
        expect(result.data?.self?.authenticated).toEqual(false);
    });
    it('retrieves publically accessible organizations', async () => {
        const result = await Graphql.exec<OrganizationsQuery>(Graphql.op(Queries.organizations));
        expect(result).toBeTruthy();
        expect(result.data?.organizations).toBeTruthy();
        if (result.data?.organizations) {
            expect(result.data?.organizations?.length > 0).toEqual(true);
        }

    })

});
