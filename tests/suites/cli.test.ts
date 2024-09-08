import { execFile } from 'child_process';
import { expect } from '@jest/globals';
import path from 'path';

const binPath = path.resolve(__dirname, '../../bin/cli.js');

describe('CLI', () => {
    test('cli creates correctly', done => {
        execFile(
            'node',
            [binPath, 'create'],
            {
                cwd: process.cwd()
            },
            (error, stdout, stderr) => {
                expect(error).toBeNull();
                expect(stderr).toBe('');
                expect(stdout).toContain('Successfully wrote config file');
                done();
            }
        );
    });
});
