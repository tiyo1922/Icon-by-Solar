import React from '../../packages/react/node_modules/react/index.js';
import { renderToStaticMarkup } from '../../packages/react/node_modules/react-dom/server.node.js';
import { SolarIcon, registerIcons, resolveIcon } from '../../packages/react/dist/index.js';
import { SolarHome, HomeOutline, HomeBoldDuotone } from '../../packages/react/dist/icons/home.js';
import { SolarChatSquareArrow } from '../../packages/react/dist/icons/chat-square-arrow.js';
import { SolarLightning } from '../../packages/react/dist/icons/lightning.js';
import { SolarLightbulb } from '../../packages/react/dist/icons/lightbulb.js';
import { SolarIcon as AllSolarIcon, resolveIcon as allResolveIcon } from '../../packages/react/dist/all.js';

console.log('Testing @icon-by-solar/react...');

// Register icons for modular testing
registerIcons([SolarHome, SolarChatSquareArrow]);

// 1. Test universal component with outline variant after registration
const html1 = renderToStaticMarkup(
  React.createElement(SolarIcon, { name: 'home', variant: 'outline', size: 24, className: 'text-blue-500' })
);
if (!html1.includes('viewBox="0 0 24 24"') || !html1.includes('width="24"') || !html1.includes('class="text-blue-500"')) {
  throw new Error(`Test 1 Failed: Unexpected markup: ${html1}`);
}
console.log('✅ Test 1 Passed: <SolarIcon name="home" variant="outline" /> rendered successfully.');

// 2. Test bold variant with custom color
const html2 = renderToStaticMarkup(
  React.createElement(SolarIcon, { name: 'home', variant: 'bold', size: 32, color: '#0342C9' })
);
if (!html2.includes('fill="#0342C9"') || !html2.includes('width="32"')) {
  throw new Error(`Test 2 Failed: Unexpected markup for bold color: ${html2}`);
}
console.log('✅ Test 2 Passed: <SolarIcon name="home" variant="bold" color="#0342C9" /> rendered with custom fill.');

// 3. Test bold-duotone with opacity preservation and custom secondary color
const html3 = renderToStaticMarkup(
  React.createElement(SolarIcon, {
    name: 'chat-square-arrow',
    variant: 'bold-duotone',
    size: 24,
    color: '#10B981',
    secondaryColor: '#6EE7B7'
  })
);
if (!html3.includes('fill="#10B981"') || !html3.includes('fill="#6EE7B7"') || !html3.includes('opacity=')) {
  throw new Error(`Test 3 Failed: Duotone colors or opacity missing in markup: ${html3}`);
}
console.log('✅ Test 3 Passed: <SolarIcon name="chat-square-arrow" variant="bold-duotone" /> preserved duotone opacity and custom colors.');

// 4. Test selective import
const html4 = renderToStaticMarkup(
  React.createElement(HomeBoldDuotone, { size: 28, className: 'custom-icon' })
);
if (!html4.includes('viewBox="0 0 24 24"') || !html4.includes('width="28"') || !html4.includes('opacity=')) {
  throw new Error(`Test 4 Failed: Selective import component failed: ${html4}`);
}
console.log('✅ Test 4 Passed: Per-icon selective import <HomeBoldDuotone /> rendered with zero bloat.');

// 5. Test missing icon fallback
const html5 = renderToStaticMarkup(
  React.createElement(SolarIcon, { name: 'non-existent-icon-xyz', fallback: React.createElement('span', null, 'Icon not found') })
);
if (!html5.includes('Icon not found')) {
  throw new Error(`Test 5 Failed: Missing icon fallback not rendered.`);
}
console.log('✅ Test 5 Passed: Missing icon returned designated fallback.');

// 6. Test direct icon component prop (zero registration)
const html6 = renderToStaticMarkup(
  React.createElement(SolarIcon, { icon: SolarHome, variant: 'outline', size: 20 })
);
if (!html6.includes('viewBox="0 0 24 24"') || !html6.includes('width="20"')) {
  throw new Error(`Test 6 Failed: Direct icon prop failed: ${html6}`);
}
console.log('✅ Test 6 Passed: Direct icon component prop <SolarIcon icon={SolarHome} /> rendered without registration.');

// 7. Test full catalog entry (@icon-by-solar/react/all)
const html7 = renderToStaticMarkup(
  React.createElement(AllSolarIcon, { name: 'bell-bing', variant: 'bold', size: 24 })
);
if (!html7.includes('viewBox="0 0 24 24"') || !html7.includes('width="24"')) {
  throw new Error(`Test 7 Failed: Full catalog entry failed: ${html7}`);
}
console.log('✅ Test 7 Passed: Full collection import from @icon-by-solar/react/all rendered any icon seamlessly.');

// 8. Test alias resolution
const nodes = allResolveIcon('Chat  Square Arrow', 'bold-duotone');
if (!nodes || nodes.length === 0) {
  throw new Error('Test 8 Failed: Failed to resolve alias with double space.');
}
console.log('✅ Test 8 Passed: Double-space anomaly resolved to canonical icon nodes.');

import { createRequire } from 'module';
import { Solar4k, Icon4k, Icon4kOutline, FourK, FourKOutline } from '../../packages/react/dist/icons/4k.js';

// 9. Outline source files contain white fills; standalone components must inherit text color
const outlineHtml = renderToStaticMarkup(
  React.createElement(SolarLightning, { variant: 'outline' })
);
if (!outlineHtml.includes('fill="currentColor"') || outlineHtml.includes('fill="white"')) {
  throw new Error(`Test 9 Failed: Outline icon did not inherit currentColor: ${outlineHtml}`);
}
console.log('✅ Test 9 Passed: Outline white source fills render as currentColor.');

// 10. Bold white cutouts remain white after normalizing other fills
const boldHtml = renderToStaticMarkup(
  React.createElement(SolarLightbulb, { variant: 'bold' })
);
if (!boldHtml.includes('fill="white"')) {
  throw new Error(`Test 10 Failed: Bold white cutout was recolored: ${boldHtml}`);
}
console.log('✅ Test 10 Passed: Bold white cutout remains white.');

// 11. Regression test: Digit-prefixed icon identifiers (4k) in ESM
if (typeof Solar4k !== 'object' && typeof Solar4k !== 'function') {
  throw new Error('Test 11 Failed: Solar4k is not a valid component.');
}
if (typeof Icon4kOutline !== 'object' && typeof Icon4kOutline !== 'function') {
  throw new Error('Test 11 Failed: Icon4kOutline is not a valid component.');
}
if (typeof FourKOutline !== 'object' && typeof FourKOutline !== 'function') {
  throw new Error('Test 11 Failed: FourKOutline is not a valid component.');
}
const html4k = renderToStaticMarkup(React.createElement(Icon4kOutline, { size: 24 }));
if (!html4k.includes('viewBox="0 0 24 24"') || !html4k.includes('fill="currentColor"') || html4k.includes('fill="white"')) {
  throw new Error(`Test 11 Failed: Icon4kOutline rendered invalid SVG or white fill: ${html4k}`);
}
const htmlFourK = renderToStaticMarkup(React.createElement(FourKOutline, { size: 24 }));
if (!htmlFourK.includes('viewBox="0 0 24 24"') || !htmlFourK.includes('fill="currentColor"')) {
  throw new Error(`Test 11 Failed: FourKOutline rendered invalid SVG: ${htmlFourK}`);
}
console.log('✅ Test 11 Passed: Digit-prefixed icon 4k exports (Solar4k, Icon4k*, FourK*) render correctly in ESM.');

// 12. Regression test: Digit-prefixed icon identifiers (4k) in CommonJS
const require = createRequire(import.meta.url);
const cjs4k = require('../../packages/react/dist/icons/4k.cjs');
if (!cjs4k.Solar4k || !cjs4k.Icon4kOutline || !cjs4k.FourKOutline || !cjs4k['4kOutline']) {
  throw new Error('Test 12 Failed: CommonJS exports missing expected 4k variants.');
}
const html4kCjs = renderToStaticMarkup(React.createElement(cjs4k.Icon4kOutline, { size: 24 }));
if (!html4kCjs.includes('viewBox="0 0 24 24"') || !html4kCjs.includes('fill="currentColor"')) {
  throw new Error(`Test 12 Failed: CJS Icon4kOutline rendered invalid SVG: ${html4kCjs}`);
}
console.log('✅ Test 12 Passed: CommonJS 4k module exports valid identifiers and safely-quoted aliases.');

console.log('\n🎉 ALL REACT COMPONENT TESTS PASSED SUCCESSFULLY!');
