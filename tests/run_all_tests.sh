#!/usr/bin/env bash
set -e

echo "=========================================================="
echo "      Icon by Solar — Full Test & Integration Suite       "
echo "=========================================================="
echo ""

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$DIR"

echo ">>> [1/8] Testing SVG integrity (3,738 files, XML & viewBox)..."
python3 tests/test_svg_integrity.py

echo ""
echo ">>> [2/8] Testing Manifest integrity (1,246 icons, 3 styles, aliases)..."
python3 tests/test_manifest_integrity.py

echo ""
echo ">>> [3/8] Testing Catalog builder & validation status..."
python3 tools/build_catalog.py

echo ""
echo ">>> [4/8] Testing Catalog UI sections, jump navigation & Outline contrast..."
python3 tests/test_catalog_enhancements.py

echo ""
echo ">>> [5/8] Testing React package internal components & selective imports..."
node tests/react/test_react_component.mjs
node tests/react/test_typescript_declarations.mjs

echo ""
echo ">>> [6/8] Testing Laravel Blade SvgResolver unit tests..."
php tests/blade/test_svg_resolver.php

echo ""
echo ">>> [7/8] Running React Consumer Integration Test (Vite bundle & SSR render)..."
cd "$DIR/tests/integration/react-consumer"
npm run build
node test-render.js
cd "$DIR"

echo ""
echo ">>> [8/8] Running Laravel Blade Consumer Integration Test (Composer autoload, ServiceProvider, Blade compiler)..."
cd "$DIR/tests/integration/laravel-consumer"
php test-blade-consumer.php
cd "$DIR"

echo ""
echo "=========================================================="
echo "🎉 ALL TESTS & INTEGRATION TESTS PASSED SUCCESSFULLY! 🎉"
echo "=========================================================="
