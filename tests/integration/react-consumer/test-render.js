import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { SolarIcon, IconBySolar, registerIcons } from '@icon-by-solar/react';
import { SolarHome, HomeOutline, HomeBold, HomeBoldDuotone } from '@icon-by-solar/react/icons/home';
import { SolarChatSquareArrow } from '@icon-by-solar/react/icons/chat-square-arrow';

console.log('Running React Consumer Integration Test...');

// Register only the icons needed
registerIcons([SolarHome, SolarChatSquareArrow]);

// 1. Universal Component Tests
const outlineHtml = renderToStaticMarkup(
  React.createElement(SolarIcon, {
    name: 'home',
    variant: 'outline',
    size: 24,
    id: 'icon-home-outline',
    className: 'text-blue-600'
  })
);

if (!outlineHtml.includes('id="icon-home-outline"') || !outlineHtml.includes('width="24"') || !outlineHtml.includes('viewBox="0 0 24 24"')) {
  throw new Error('FAILED: Home Outline not rendered properly: ' + outlineHtml);
}
console.log('✅ 1. Home Outline rendered with viewBox="0 0 24 24" and width=24');

const boldHtml = renderToStaticMarkup(
  React.createElement(SolarIcon, {
    name: 'home',
    variant: 'bold',
    size: 32,
    color: '#0342C9',
    id: 'icon-home-bold'
  })
);

if (!boldHtml.includes('id="icon-home-bold"') || !boldHtml.includes('width="32"') || !boldHtml.includes('fill="#0342C9"')) {
  throw new Error('FAILED: Home Bold not rendered with custom color #0342C9 or size 32: ' + boldHtml);
}
console.log('✅ 2. Home Bold rendered with custom color #0342C9 and size 32');

const duotoneHtml = renderToStaticMarkup(
  React.createElement(SolarIcon, {
    name: 'home',
    variant: 'bold-duotone',
    size: 24,
    id: 'icon-home-duotone'
  })
);

if (!duotoneHtml.includes('id="icon-home-duotone"') || !duotoneHtml.includes('opacity=')) {
  throw new Error('FAILED: Home Bold Duotone opacity layer missing: ' + duotoneHtml);
}
console.log('✅ 3. Home Bold Duotone rendered with opacity layer preserved');

// 2. Selective Import Tests
const selOutline = renderToStaticMarkup(React.createElement(HomeOutline, { size: 24, id: 'icon-sel-outline' }));
const selBold = renderToStaticMarkup(React.createElement(HomeBold, { size: 32, color: '#0342C9', id: 'icon-sel-bold' }));
const selDuotone = renderToStaticMarkup(React.createElement(HomeBoldDuotone, { size: 24, id: 'icon-sel-duotone' }));

if (!selOutline.includes('id="icon-sel-outline"') || !selBold.includes('fill="#0342C9"') || !selDuotone.includes('opacity=')) {
  throw new Error('FAILED: Selective import icons failed');
}
console.log('✅ 4. Selective imports (HomeOutline, HomeBold, HomeBoldDuotone) rendered perfectly');

// 3. Alias Test
const aliasHtml = renderToStaticMarkup(
  React.createElement(IconBySolar, { name: 'chat-square-arrow', variant: 'bold-duotone', size: 28 })
);
if (!aliasHtml.includes('viewBox="0 0 24 24"') || !aliasHtml.includes('width="28"')) {
  throw new Error('FAILED: IconBySolar alias failed: ' + aliasHtml);
}
console.log('✅ 5. Component alias <IconBySolar /> rendered successfully');

import { Icon4kOutline, FourKOutline } from '@icon-by-solar/react/icons/4k';
import { LightningOutline } from '@icon-by-solar/react/icons/lightning';


// 4. Digit-prefixed (4k) and Outline Color Inherit Tests
const sel4k = renderToStaticMarkup(React.createElement(Icon4kOutline, { size: 24, id: 'icon-sel-4k' }));
const selFourK = renderToStaticMarkup(React.createElement(FourKOutline, { size: 24, id: 'icon-sel-fourk' }));
const selLightning = renderToStaticMarkup(React.createElement(LightningOutline, { size: 24, id: 'icon-sel-lightning' }));

if (!sel4k.includes('id="icon-sel-4k"') || !sel4k.includes('fill="currentColor"') || sel4k.includes('fill="white"')) {
  throw new Error('FAILED: Icon4kOutline failed render or white fill check: ' + sel4k);
}
if (!selFourK.includes('id="icon-sel-fourk"') || !selFourK.includes('fill="currentColor"')) {
  throw new Error('FAILED: FourKOutline failed render check: ' + selFourK);
}
if (!selLightning.includes('id="icon-sel-lightning"') || !selLightning.includes('fill="currentColor"') || selLightning.includes('fill="white"')) {
  throw new Error('FAILED: LightningOutline failed currentColor inheritance check: ' + selLightning);
}
console.log('✅ 6. 4k selective imports (Icon4kOutline, FourKOutline) and Outline currentColor verified');

console.log('\n🎉 ALL REACT CONSUMER INTEGRATION TESTS PASSED!');
