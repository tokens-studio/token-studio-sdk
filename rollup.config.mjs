import  dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';

const defaultEntries = [
	{
		input: './src/index.ts',
		output: [
			{
				file: './dist/commonjs.cjs',
				exports: 'named',
				sourcemap: true,
				format: 'cjs'
			},
			{
				file: './dist/esm.mjs',
				exports: 'named',
				sourcemap: true,
				format: 'es'
			}
		],
		plugins: [esbuild.default({
			tsconfig: 'tsconfig.prod.json'
		})]
	},
	{
		input: './src/index.ts',
		output: [
			{
				file: 'dist/bundle.d.ts',
				format: 'es'
			}
		],
		plugins: [dts.default()]
	}
];

module.exports = defaultEntries;