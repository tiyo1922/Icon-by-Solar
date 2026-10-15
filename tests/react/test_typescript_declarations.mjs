#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ts from '../../packages/react/node_modules/typescript/lib/typescript.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../..');
const reactPkgDir = path.join(rootDir, 'packages/react');

console.log('Testing TypeScript declaration resolution for @icon-by-solar/react...');

// 1. Verify dist/types.d.ts and dist/types.d.cts exist
const typesDtsPath = path.join(reactPkgDir, 'dist/types.d.ts');
const typesDctsPath = path.join(reactPkgDir, 'dist/types.d.cts');
if (!fs.existsSync(typesDtsPath)) {
  throw new Error(`Test Failed: dist/types.d.ts does not exist at ${typesDtsPath}`);
}
if (!fs.existsSync(typesDctsPath)) {
  throw new Error(`Test Failed: dist/types.d.cts does not exist at ${typesDctsPath}`);
}
console.log('✅ Test 1 Passed: dist/types.d.ts and dist/types.d.cts exist.');

// 2. Verify icon declarations use explicit ../types.js import
const homeDtsPath = path.join(reactPkgDir, 'dist/icons/home.d.ts');
const fourkDtsPath = path.join(reactPkgDir, 'dist/icons/4k.d.ts');
const homeDtsContent = fs.readFileSync(homeDtsPath, 'utf8');
const fourkDtsContent = fs.readFileSync(fourkDtsPath, 'utf8');

if (!homeDtsContent.includes("from '../types.js'")) {
  throw new Error(`Test Failed: home.d.ts must import from '../types.js', got: ${homeDtsContent.slice(0, 80)}`);
}
if (!fourkDtsContent.includes("from '../types.js'")) {
  throw new Error(`Test Failed: 4k.d.ts must import from '../types.js', got: ${fourkDtsContent.slice(0, 80)}`);
}
console.log('✅ Test 2 Passed: Icon .d.ts files reference explicit ../types.js extension.');

// 3. Verify dist/icons/index.d.ts re-exports with .js extension
const iconsIndexDts = fs.readFileSync(path.join(reactPkgDir, 'dist/icons/index.d.ts'), 'utf8');
if (!iconsIndexDts.includes("export * from './home.js';")) {
  throw new Error('Test Failed: dist/icons/index.d.ts must re-export with .js extension.');
}
console.log('✅ Test 3 Passed: dist/icons/index.d.ts re-exports with explicit .js extensions.');

// 4. Test TypeScript compilation across Bundler, Node16, and NodeNext modes
const tsCode = `
import React from 'react';
import { HomeOutline } from '@icon-by-solar/react/icons/home';
import { LightningOutline } from '@icon-by-solar/react/icons/lightning';
import { Icon4kOutline, FourKOutline, Solar4k } from '@icon-by-solar/react/icons/4k';
import type { IconNode, IconVariant } from '@icon-by-solar/react/types';

const a: IconVariant = 'outline';
const b: IconNode = ['path', { d: 'M0 0' }];
const el = React.createElement(HomeOutline, { size: 24 });
const el2 = React.createElement(Icon4kOutline, { size: 32 });
const el3 = React.createElement(FourKOutline, { size: 28 });
const el4 = React.createElement(LightningOutline, { color: 'red' });
console.log(el, el2, el3, el4, a, b, Solar4k);
`;

function testResolution(modeName, resolutionKind) {
  const fileName = (resolutionKind === ts.ModuleResolutionKind.Node16 || resolutionKind === ts.ModuleResolutionKind.NodeNext)
    ? 'virtual-consumer.mts'
    : 'virtual-consumer.ts';

  const options = {
    noEmit: true,
    moduleResolution: resolutionKind,
    target: ts.ScriptTarget.ES2022,
    module: (resolutionKind === ts.ModuleResolutionKind.Node16 || resolutionKind === ts.ModuleResolutionKind.NodeNext)
      ? ts.ModuleKind.NodeNext
      : ts.ModuleKind.ESNext,
    esModuleInterop: true,
    typeRoots: [path.join(reactPkgDir, 'node_modules/@types')],
    jsx: ts.JsxEmit.ReactJSX,
    paths: {
      '@icon-by-solar/react': [path.join(reactPkgDir, 'dist/index.d.ts')],
      '@icon-by-solar/react/types': [path.join(reactPkgDir, 'dist/types.d.ts')],
      '@icon-by-solar/react/icons/*': [path.join(reactPkgDir, 'dist/icons/*.d.ts')]
    }
  };

  const host = ts.createCompilerHost(options);
  const origGetSourceFile = host.getSourceFile;
  host.getSourceFile = (f, languageVersion) => {
    if (f === fileName) {
      return ts.createSourceFile(f, tsCode, languageVersion);
    }
    return origGetSourceFile(f, languageVersion);
  };

  const program = ts.createProgram([fileName], options, host);
  const diagnostics = ts.getPreEmitDiagnostics(program);
  const errors = diagnostics.filter(d => d.category === ts.DiagnosticCategory.Error);
  if (errors.length > 0) {
    const formatted = ts.formatDiagnosticsWithColorAndContext(errors, {
      getCanonicalFileName: f => f,
      getCurrentDirectory: () => rootDir,
      getNewLine: () => '\n'
    });
    throw new Error(`TypeScript compilation failed under ${modeName}:\n${formatted}`);
  }
  console.log(`✅ Test 4 (${modeName}): Selective imports & types resolved with 0 errors.`);
}

testResolution('Bundler', ts.ModuleResolutionKind.Bundler);
testResolution('Node16', ts.ModuleResolutionKind.Node16);
testResolution('NodeNext', ts.ModuleResolutionKind.NodeNext);

console.log('\n🎉 ALL TYPESCRIPT DECLARATION RESOLUTION TESTS PASSED SUCCESSFULLY!');
