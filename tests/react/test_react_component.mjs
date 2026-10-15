import React from '../../packages/react/node_modules/react/index.js';
import { renderToStaticMarkup } from '../../packages/react/node_modules/react-dom/server.node.js';
import { SolarIcon, resolveIcon } from '../../packages/react/dist/index.js';
import { HomeOutline, HomeBoldDuotone } from '../../packages/react/dist/icons/home.js';

console.log('Testing @icon-by-solar/react...');

// 1. Test universal component with outline variant
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

// 6. Test alias resolution for double space Bold Duotone filename
const nodes = resolveIcon('Chat  Square Arrow', 'bold-duotone');
if (!nodes || nodes.length === 0) {
  throw new Error('Test 6 Failed: Failed to resolve alias with double space.');
}
console.log('✅ Test 6 Passed: Double-space anomaly resolved to canonical icon nodes.');

console.log('\n🎉 ALL REACT COMPONENT TESTS PASSED SUCCESSFULLY!');
