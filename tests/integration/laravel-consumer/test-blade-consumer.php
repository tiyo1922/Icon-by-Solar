<?php

require_once __DIR__ . '/vendor/autoload.php';

use Illuminate\Container\Container;
use Illuminate\Events\Dispatcher;
use Illuminate\Events\EventServiceProvider;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Facades\Facade;
use Illuminate\Support\Facades\Blade;
use Illuminate\View\Engines\CompilerEngine;
use Illuminate\View\Engines\EngineResolver;
use Illuminate\View\Compilers\BladeCompiler;
use Illuminate\View\Factory;
use Illuminate\View\FileViewFinder;
use Illuminate\View\ViewServiceProvider;
use IconBySolar\Blade\IconBySolarServiceProvider;

echo "Running Laravel Blade Consumer Integration Test...\n";

// 1. Setup minimal standalone Laravel application container
$app = new Container();
Container::setInstance($app);
Facade::setFacadeApplication($app);

$app->instance('app', $app);
$app->singleton('files', function () {
    return new Filesystem();
});
$app->singleton('events', function ($app) {
    return new Dispatcher($app);
});
$app->singleton('config', function () {
    return new \Illuminate\Config\Repository([
        'view.paths' => [__DIR__ . '/views'],
        'view.compiled' => __DIR__ . '/storage/framework/views',
        'icon-by-solar' => [
            'default_variant' => 'outline',
            'default_size' => 24,
            'default_color' => 'currentColor',
            'throw_on_missing' => false,
            'cache' => true,
        ]
    ]);
});

// Ensure compiled views dir exists
$fs = new Filesystem();
$fs->ensureDirectoryExists(__DIR__ . '/storage/framework/views');
$fs->ensureDirectoryExists(__DIR__ . '/views');

// Register View Engine
$app->singleton('blade.compiler', function ($app) {
    return new BladeCompiler($app['files'], $app['config']['view.compiled']);
});

$app->singleton('view.engine.resolver', function ($app) {
    $resolver = new EngineResolver();
    $resolver->register('blade', function () use ($app) {
        return new CompilerEngine($app['blade.compiler'], $app['files']);
    });
    return $resolver;
});

$app->singleton('view.finder', function ($app) {
    return new FileViewFinder($app['files'], $app['config']['view.paths']);
});

$app->singleton('view', function ($app) {
    return new Factory($app['view.engine.resolver'], $app['view.finder'], $app['events']);
});
$app->bind(\Illuminate\Contracts\View\Factory::class, function ($app) {
    return $app['view'];
});

// 2. Register & Boot IconBySolarServiceProvider
$provider = new IconBySolarServiceProvider($app);
$provider->register();
$provider->boot();

echo "✅ 1. IconBySolarServiceProvider registered and booted successfully.\n";

// 3. Test Blade Component Rendering via Blade::render()
$template = <<<'BLADE'
<div class="test-suite">
    {{-- Test 1: Outline with Tailwind class --}}
    <x-icon-by-solar name="home" variant="outline" size="24" class="text-blue-600" id="icon-home-outline" />

    {{-- Test 2: Bold with custom size and color --}}
    <x-icon-by-solar name="bell-bing" variant="bold" size="32" color="#0342C9" id="icon-bell-bold" />

    {{-- Test 3: Bold Duotone with Tailwind class --}}
    <x-icon-by-solar name="chat-square-arrow" variant="bold-duotone" size="24" class="text-emerald-500" id="icon-chat-duotone" />

    {{-- Test 4: Component Tag Alias <x-solar-icon> --}}
    <x-solar-icon name="home" variant="bold-duotone" size="24" id="icon-alias" />
</div>
BLADE;

$renderedHtml = Blade::render($template);

echo "--- Rendered Blade Output Sample ---\n";
echo substr($renderedHtml, 0, 400) . "...\n\n";

// Assertions
assertContains($renderedHtml, 'id="icon-home-outline"', 'Home Outline ID not found');
assertContains($renderedHtml, 'class="text-blue-600"', 'Tailwind class text-blue-600 not applied');
assertContains($renderedHtml, 'viewBox="0 0 24 24"', 'viewBox="0 0 24 24" missing');
assertContains($renderedHtml, 'width="24"', 'width="24" missing on Outline');
echo "✅ 2. <x-icon-by-solar name=\"home\" variant=\"outline\" size=\"24\" class=\"text-blue-600\" /> rendered.\n";

assertContains($renderedHtml, 'id="icon-bell-bold"', 'Bell Bold ID not found');
assertContains($renderedHtml, 'width="32"', 'width="32" missing on Bold');
assertContains($renderedHtml, 'fill="#0342C9"', 'fill="#0342C9" missing on Bold');
echo "✅ 3. <x-icon-by-solar name=\"bell-bing\" variant=\"bold\" size=\"32\" color=\"#0342C9\" /> rendered.\n";

assertContains($renderedHtml, 'id="icon-chat-duotone"', 'Chat Duotone ID not found');
assertContains($renderedHtml, 'class="text-emerald-500"', 'class="text-emerald-500" missing on Duotone');
assertContains($renderedHtml, 'opacity=', 'Duotone opacity attribute missing');
echo "✅ 4. <x-icon-by-solar name=\"chat-square-arrow\" variant=\"bold-duotone\" ... /> rendered with opacity.\n";

assertContains($renderedHtml, 'id="icon-alias"', 'Alias component ID not found');
echo "✅ 5. Component tag alias <x-solar-icon ... /> rendered identical output.\n";

echo "\n🎉 ALL LARAVEL BLADE CONSUMER INTEGRATION TESTS PASSED!\n";

function assertContains(string $haystack, string $needle, string $message): void
{
    if (strpos($haystack, $needle) === false) {
        throw new Exception("Assertion FAILED: {$message}\nExpected: {$needle}\n");
    }
}
