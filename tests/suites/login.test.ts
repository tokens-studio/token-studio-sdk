import { expect } from '@jest/globals';
import * as lib from '../../src';

const TEST_USER_NAME = process.env.TEST_USER_NAME!;
const TEST_USER_PASSWORD = process.env.TEST_USER_PASSWORD!;

describe('Login', () => {

    it('logs in the test user correctly', async () => {
        const res = await lib.UserAuth.signIn(TEST_USER_NAME, TEST_USER_PASSWORD);
        expect(res).toBeTruthy();
        expect(res.getUsername()).toBe('test')
    });

    it('fails to log in when incorrect creds', async () => {
        await expect(lib.UserAuth.signIn(TEST_USER_NAME, 'Random')).rejects.toThrow()
    });
});