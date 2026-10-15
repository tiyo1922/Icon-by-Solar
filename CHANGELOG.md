# Changelog

All notable changes to **Icon by Solar** packages will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.1] - 2026-10-16

### Fixed

#### `@icon-by-solar/react` (v1.0.1)
- **Outline Style Color Inheritance:** Fixed standalone selective icon modules (`@icon-by-solar/react/icons/*`) where paths with white fills in source artwork failed to inherit `currentColor`. Now Outline icons reliably inherit text and Tailwind colors across all 1,246 icons while preserving intentional white cutouts in multi-layer Bold icons and layer opacities in Bold Duotone icons.
- **Valid Identifier Syntax for Digit-Prefixed Icon `4k`:** Resolved invalid JavaScript identifier syntax (`export const 4kOutline`). Now generates standard identifiers (`Icon4k`, `Icon4kOutline`, `Icon4kBold`, `Icon4kBoldDuotone`), friendly semantic aliases (`FourK`, `FourKOutline`, `FourKBold`, `FourKBoldDuotone`), and universal component `Solar4k`, ensuring full compatibility with TypeScript, ESM, and CommonJS bundlers.
- **Regression Test Suite:** Added comprehensive automated regression tests verifying digit-prefixed identifiers and Outline `currentColor` inheritance in both ESM and CommonJS consumer fixtures.

---

## [1.0.0] - 2026-10-16

### Initial Official Release

#### Shared & Artwork Assets
- **Artwork Attribution:** 3,738 SVG icons authored by **480 Design** (*Solar Icon Set*) licensed under **CC BY 4.0**.
- **1,246 Canonical Icons:** 100% paired across all 3 curated styles (**Bold**, **Bold Duotone**, and **Outline**).
- **37 Categories:** Comprehensive iconography covering UI, infrastructure, business, communications, devices, security, and more.
- **Unified Manifest:** Centralized metadata mapping canonical slugs, aliases, and category disambiguations.
- **Interactive Visual Catalog:** Offline-capable catalog browser with live search, style filtering, dark mode toggle, and instant JSX/Blade snippet generator.

#### `@icon-by-solar/react` (v1.0.0)
- **High-Performance Tree-Shaking:** Individual per-icon modules with `/* @__PURE__ */` annotations and `"sideEffects": false` reducing consumer application bundles by 97.7% (from ~7.2 MB down to ~166 kB including React runtime).
- **Multiple Import Paradigms:**
  - Selective direct imports from `@icon-by-solar/react/icons/*`.
  - In-memory registry with `registerIcons()` for uniform `<SolarIcon name="..." />` usage.
  - Direct component prop passing: `<SolarIcon icon={SolarHome} />`.
  - Full catalog entry at `@icon-by-solar/react/all` for CMS and visual icon pickers.
- **Full TypeScript Definitions:** Strongly typed icon names and variants with autocomplete.
- **Utility CSS & Duotone Support:** Native `currentColor` inheritance with granular `secondaryColor` and `secondaryOpacity` controls.
- **Hybrid ESM & CommonJS:** Compatible with Vite, Next.js, Remix, Webpack, Rollup, and Node.js SSR.

#### `icon-by-solar/blade` (v1.0.0)
- **Zero-Dependency Laravel Blade Component:** Idiomatic `<x-icon-by-solar>` and `<x-solar-icon>` tags.
- **Self-Contained Distribution:** Bundled manifest and SVG assets allowing standalone Composer installation without monorepo root dependencies.
- **Framework Support:** Fully tested on PHP 8.1, 8.2, 8.3, 8.4 and Laravel 9, 10, 11, 12.
- **Automatic Package Discovery:** Standard Laravel ServiceProvider registration via Composer `extra.laravel`.
- **Runtime Customization:** Publishable configuration `icon-by-solar.php` for default sizes, colors, and missing-icon handling.
