import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: './src/schema.graphql',
    emitLegacyCommonJSImports: false,
    generates: {
        './src/__generated__/': {
            preset: 'client',

            presetConfig: {
                gqlTagName: 'gql',
                namingConvention: 'camelCase',
                useTypeImports: true,
                skipTypename: true
            }
        }
    },
    ignoreNoDocuments: true
};
export default config;
