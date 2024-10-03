import { execFile } from 'node:child_process';
import { expect } from 'vitest';
import { promisify } from 'node:util';
import path from 'node:path';

const execFileAsync = promisify(execFile);

const binPath = path.resolve(__dirname, '../../bin/cli.js');

describe('CLI', () => {
	test('cli creates correctly', async () => {
		let err = null;
		let res;
		try {
			res = await execFileAsync('node', [binPath, 'create'], {
				cwd: process.cwd(),
			});
		} catch (e) {
			err = e;
		}
		expect(err).toBeNull();
		expect(res.stderr).toBe('');
		expect(res.stdout).toContain('Successfully wrote config file');
	});
});
