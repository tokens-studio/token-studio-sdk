import { defineConfig } from 'tsup';

const env: string = process.env.NODE_ENV || 'development';

export default defineConfig({
    entry: ['src/index.ts'],
    dts: true,
    sourcemap: env === 'production', // source map is only available in prod
    format: ['esm', 'cjs'],
    skipNodeModulesBundle: true,
    clean: true,
    minify: false,
    target: 'esnext'
});
