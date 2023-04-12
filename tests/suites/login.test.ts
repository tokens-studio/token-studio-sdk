/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as lib from '../../src';
import { expect } from '@jest/globals';

const TEST_USER_NAME = process.env.TEST_USER_NAME!;
const TEST_USER_PASSWORD = process.env.TEST_USER_PASSWORD!;
const TEST_USER_EMAIL = process.env.TEST_USER_EMAIL!;

describe('Login', () => {
    it('logs in the test user correctly', async () => {
        const res = await lib.UserAuth.signIn(
            TEST_USER_NAME,
            TEST_USER_PASSWORD
        );
        expect(res).toBeTruthy();
        expect(res.getUsername()).toBe(TEST_USER_NAME);
    });

    it('logs in the test user correctly using email', async () => {
        const res = await lib.UserAuth.signInWithEmail(
            TEST_USER_EMAIL,
            TEST_USER_PASSWORD
        );
        expect(res).toBeTruthy();
        expect(res.getUsername()).toBe(TEST_USER_NAME);
    });

    it('fails to log in when incorrect creds', async () => {
        await expect(
            lib.UserAuth.signIn(TEST_USER_NAME, 'Random')
        ).rejects.toThrow();
    });
});
