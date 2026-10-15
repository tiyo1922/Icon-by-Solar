<?php

require_once __DIR__ . '/../../packages/laravel-blade/src/SvgResolver.php';

use IconBySolar\Blade\SvgResolver;

echo "Testing IconBySolar Blade SvgResolver...\n";

$resolver = new SvgResolver([
    'manifest_path' => __DIR__ . '/../../packages/laravel-blade/resources/manifest.json',
    'svg_path' => __DIR__ . '/../../',
    'default_size' => 24,
    'default_color' => 'currentColor',
    'throw_on_missing' => false,
]);

// 1. Test outline variant
$html1 = $resolver->render('home', 'outline', 24, null, null, null, null, ['class' => 'text-blue-600']);
assertContains($html1, 'viewBox="0 0 24 24"', 'Test 1: Missing viewBox');
assertContains($html1, 'width="24"', 'Test 1: Missing width');
assertContains($html1, 'class="text-blue-600"', 'Test 1: Missing class');
echo "✅ Test 1 Passed: Basic outline icon rendered with class.\n";

// 2. Test bold variant with custom size and custom color
$html2 = $resolver->render('home', 'bold', 32, '#0342C9');
assertContains($html2, 'width="32"', 'Test 2: Missing width 32');
assertContains($html2, 'height="32"', 'Test 2: Missing height 32');
assertContains($html2, 'fill="#0342C9"', 'Test 2: Missing custom fill');
echo "✅ Test 2 Passed: Bold variant with custom size and color rendered.\n";

// 3. Test bold-duotone with custom secondary color and opacity
$html3 = $resolver->render(
    'chat-square-arrow',
    'bold-duotone',
    24,
    '#10B981',
    '#6EE7B7',
    0.4,
    null,
    ['id' => 'chat-icon', 'data-state' => 'active']
);
assertContains($html3, 'fill="#10B981"', 'Test 3: Missing primary color');
assertContains($html3, 'fill="#6EE7B7"', 'Test 3: Missing secondary color');
assertContains($html3, 'opacity="0.4"', 'Test 3: Missing custom opacity');
assertContains($html3, 'id="chat-icon"', 'Test 3: Missing id attribute');
assertContains($html3, 'data-state="active"', 'Test 3: Missing data attribute');
echo "✅ Test 3 Passed: Bold-duotone with custom secondary color and opacity rendered.\n";

// 4. Test alias resolution for Bold Duotone double space filename
$html4 = $resolver->render('Chat  Square Arrow', 'bold-duotone');
assertContains($html4, 'viewBox="0 0 24 24"', 'Test 4: Failed to resolve double space alias');
assertContains($html4, '<svg', 'Test 4: Failed to render SVG');
echo "✅ Test 4 Passed: Double-space filename mapped to canonical icon seamlessly.\n";

// 5. Test collision resolution for home
$htmlHomeUI = $resolver->render('home', 'outline');
$htmlHomeBuilding = $resolver->render('home-building', 'outline');
if ($htmlHomeUI === $htmlHomeBuilding) {
    throw new Exception("Test 5 Failed: 'home' and 'home-building' rendered identical SVG!");
}
echo "✅ Test 5 Passed: Disambiguated home icons render distinct SVGs.\n";

// 6. Test missing icon fallback
$htmlMissing = $resolver->render('non-existent-solar-icon-12345', 'outline');
assertContains($htmlMissing, '<!-- [Icon by Solar] Icon "non-existent-solar-icon-12345" (outline) not found -->', 'Test 6: Missing comment fallback');
echo "✅ Test 6 Passed: Missing icon rendered HTML warning comment and placeholder.\n";

echo "\n🎉 ALL BLADE SVG RESOLVER TESTS PASSED SUCCESSFULLY!\n";

function assertContains(string $haystack, string $needle, string $message): void
{
    if (strpos($haystack, $needle) === false) {
        throw new Exception("{$message}\nExpected: {$needle}\nActual output:\n{$haystack}\n");
    }
}
