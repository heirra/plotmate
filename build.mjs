/**
 * build.mjs — esbuild production build (bypasses Vite/Rollup crash on Node 24 + Windows)
 * Usage: node build.mjs
 */

import * as esbuild from './node_modules/esbuild/lib/main.js';
import { execSync } from 'node:child_process';
import { mkdirSync, existsSync, writeFileSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const ROOT = resolve('.');
const DIST = join(ROOT, 'dist');

// Clean dist using shell (avoids Node.js rmSync crash on Windows)
if (existsSync(DIST)) {
  execSync(`rd /s /q "${DIST}"`, { shell: true, stdio: 'pipe' });
}
mkdirSync(join(DIST, 'assets'), { recursive: true });

// Copy public assets via shell
if (existsSync(join(ROOT, 'public'))) {
  execSync(`xcopy /e /i /y "${join(ROOT, 'public')}" "${DIST}"`, { shell: true, stdio: 'pipe' });
}

console.log('Building Garden Vibe AI for production...');
const start = Date.now();

// Bundle JS/TSX → dist/assets/index.js
const jsResult = await esbuild.build({
  entryPoints: [join(ROOT, 'src/main.tsx')],
  bundle: true,
  outfile: join(DIST, 'assets/index.js'),
  format: 'esm',
  target: ['es2020', 'chrome90', 'firefox90', 'safari14'],
  platform: 'browser',
  minify: true,
  write: true,
  loader: {
    '.tsx': 'tsx',
    '.ts': 'ts',
    '.jsx': 'jsx',
    '.svg': 'dataurl',
    '.png': 'dataurl',
    '.jpg': 'dataurl',
    '.woff2': 'dataurl',
    '.woff': 'dataurl',
  },
  define: { 'process.env.NODE_ENV': '"production"' },
  metafile: true,
  logLevel: 'warning',
});

if (jsResult.errors.length) {
  console.error('JS build errors:', jsResult.errors);
  process.exit(1);
}

const jsKB = Math.round(Object.values(jsResult.metafile.outputs).reduce((s, o) => s + o.bytes, 0) / 1024);

// Generate index.html
const src = readFileSync(join(ROOT, 'index.html'), 'utf8');
const html = src
  .replace(/<script type="module"[^>]*src="[^"]*"[^>]*><\/script>/, '')
  .replace('</body>', '  <script type="module" src="/assets/index.js"></script>\n</body>');
writeFileSync(join(DIST, 'index.html'), html);

const ms = Date.now() - start;
console.log(`\n✓ Built in ${ms}ms`);
console.log(`  dist/assets/index.js    ${jsKB}KB`);
console.log(`  dist/index.html`);
console.log('\nNote: CSS from Tailwind is applied via the dev-time PostCSS config.');
console.log('For a separate CSS file, run: npx tailwindcss -i src/index.css -o dist/assets/index.css --minify');
