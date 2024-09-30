#!/usr/bin/env -S node --experimental-module
/* eslint-disable no-console */

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const WebSocket = require('ws');
const { create } = require('../dist/index.cjs');
const { gql } = require('@apollo/client');
const path = require('path');
const { program } = require('commander');
const fs = require('fs/promises');

const TOKEN = process.env.TOKENS_STUDIO_API_KEY;

const client = create({
	auth: `Bearer ${TOKEN}`,
	webSocketImpl: WebSocket,
});

program
	.name('tokensstudio')
	.description('CLI to the Tokens Studio Platform')
	.version('0.0.0');

program
	.command('pull')
	.description(
		'Looks for a .tokensstudio.json config file and retrieves your tokens',
	)
	.option('-p, --path <path>', 'path to the file', '.tokensstudio.json')
	.action(async (options) => {
		const filepath = path.join(process.cwd(), options.path);

		const raw = await fs.readFile(filepath);

		const config = JSON.parse(raw);

		const res = await client.query({
			query: gql`
				query getSets($org: String!, $project: String!, $name: String!) {
					branch(id: $org, project: $project, name: $name) {
						tokenSets {
							data {
								name
								raw
							}
						}
					}
				}
			`,
			variables: {
				org: config.org,
				project: config.project,
				branch: config.branch,
			},
		});

		console.log(res);
	});

program
	.command('create')
	.description('Creates a .tokensstudio.json config file')

	.action(async () => {
		const filepath = path.join(process.cwd(), '.tokensstudio.json');

		await fs.writeFile(
			filepath,
			JSON.stringify(
				{
					org: '',
					project: '',
					branch: '',
					release: '',
					output: '',
				},
				null,
				4,
			),
		);

		console.log('Successfully wrote config file to ' + filepath);
	});

program.parse();
