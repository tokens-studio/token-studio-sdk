import type { ClientPresetConfig } from '@graphql-codegen/client-preset';
import type { CodegenConfig } from '@graphql-codegen/cli';

const presetConfig = {
	gqlTagName: 'gql',
} as ClientPresetConfig;

const config: CodegenConfig = {
	schema: './src/schema.graphql',
	emitLegacyCommonJSImports: false,
	generates: {
		'./src/__generated__/': {
			preset: 'client',
			presetConfig: presetConfig,
		},
	},
	config: {
		useTypeImports: true,
		skipTypename: true,
	},
	ignoreNoDocuments: true,
};
export default config;
