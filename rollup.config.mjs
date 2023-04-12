import cleanupDir from 'rollup-plugin-cleanup-dir';
import esbuild from 'rollup-plugin-esbuild';

const defaultEntries = [
    {
        input: './src/index.ts',
        output: [
            {
                preserveModules: true,
                dir: './dist/cjs',
                exports: 'named',
                sourcemap: true,
                format: 'cjs'
            },
            {
                preserveModules: true,
                dir: './dist/esm',
                exports: 'named',
                sourcemap: true,
                format: 'es'
            }
        ],
        plugins: [
            cleanupDir,
            esbuild.default({
                tsconfig: 'tsconfig.prod.json'
            })
        ]
    }
];

module.exports = defaultEntries;
