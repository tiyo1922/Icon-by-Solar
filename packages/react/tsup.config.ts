import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.cjs' : '.js',
    };
  },
  dts: true,
  clean: true,
  sourcemap: true,
  minify: false,
  external: ['react', 'react-dom']
});
