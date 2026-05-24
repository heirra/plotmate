import * as esbuild from './node_modules/esbuild/lib/main.js';
import { mkdirSync } from 'node:fs';
mkdirSync('dist-test', { recursive: true });

console.log('Starting esbuild bundle...');
const result = await esbuild.build({
  entryPoints: ['src/main.tsx'],
  bundle: true,
  outfile: 'dist-test/bundle.js',
  format: 'esm',
  platform: 'browser',
  write: true,
  target: 'es2020',
  loader: { '.tsx': 'tsx', '.ts': 'ts', '.css': 'local-css' },
  define: { 'process.env.NODE_ENV': '"production"' },
  minify: false,
});
console.log('Build errors:', result.errors.length);
console.log('Build warnings:', result.warnings.length);
console.log('Done!');
