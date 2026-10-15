# Icon by Solar — Official Publishing Guide (npm & Packagist)

This guide documents the step-by-step procedures to officially publish **Icon by Solar** packages:
1. **npm:** `@icon-by-solar/react`
2. **Packagist:** `icon-by-solar/blade`

---

## 1. Prerequisites & Account Setup

### A. npm Registry Setup
1. Create or log in to your account at [npmjs.com](https://www.npmjs.com).
2. Configure your local CLI with your credentials:
   ```bash
   npm login
   ```
3. Check who you are logged in as:
   ```bash
   npm whoami
   ```
4. Verify Organization/Scope:
   Because the package name is `@icon-by-solar/react`, you must either:
   - Own the `icon-by-solar` organization on npm (recommended), OR
   - Create the scope `@icon-by-solar` under your npm account.
   *(Note: The package already includes `"publishConfig": { "access": "public" }` in `package.json` to publish publicly without extra CLI flags).*

### B. Packagist & GitHub Setup
1. Create or log in to your account at [packagist.org](https://packagist.org).
2. Connect your GitHub account under **Packagist Profile > Linked Accounts**.
3. **Monorepo Subtree Repository Strategy:**
   Packagist indexes Git repositories from their root `composer.json`. Because `Icon-by-Solar` is a monorepo containing both React and Blade packages, `packages/laravel-blade` must be published to a dedicated Git repository that Packagist can clone.
   - Recommended repository URL: `https://github.com/tiyo1922/icon-by-solar-blade` (or `https://github.com/icon-by-solar/blade`).
   - Create this repository on GitHub (empty, without README/license initially).
   - In Packagist, submit the repository URL: `https://github.com/tiyo1922/icon-by-solar-blade`.
   - Setup GitHub Webhook (Packagist provides this on the package page) so releases and tags update automatically.

---

## 2. Release Preparation Checklist

Before publishing any new version, run the automated verification suite from the repository root:

```bash
# 1. Synchronize self-contained SVG assets & manifest for the Blade package
python3 tools/sync_blade_assets.py

# 2. Build the React package (modular dist/ + selective icon files)
python3 tools/build_react_package.py
npm --prefix packages/react run build

# 3. Validate Composer package definition
composer validate packages/laravel-blade/composer.json

# 4. Run the full 8-stage test runner
./tests/run_all_tests.sh
```

---

## 3. Publishing the React Package (`@icon-by-solar/react`) to npm

1. **Navigate to the React package directory:**
   ```bash
   cd packages/react
   ```

2. **Verify the package contents with a dry-run:**
   ```bash
   npm pack --dry-run
   ```
   *Verify that all selective icon modules (`dist/icons/*.js`, `*.cjs`, `*.d.ts`), `dist/index.*`, `dist/all.*`, `README.md`, and `LICENSE` are included, and no unwanted source files are bundled.*

3. **Publish to npm:**
   ```bash
   npm publish --access public
   ```

4. **Verify the publication:**
   ```bash
   npm view @icon-by-solar/react
   ```

---

## 4. Publishing the Laravel Blade Package (`icon-by-solar/blade`) to Packagist

### Method: Git Subtree Split (Standard Monorepo Release)

Packagist requires `composer.json` to reside at the root of the Git repository. We use Git subtree split to create a clean commit history containing only `packages/laravel-blade` as root, and tag the resulting split commit.

1. **Add the remote for the standalone Blade repository (one-time setup):**
   ```bash
   git remote add blade-split git@github.com:tiyo1922/icon-by-solar-blade.git
   ```

2. **Generate the subtree split branch and push to standalone `main`:**
   ```bash
   # Create a local branch containing only the packages/laravel-blade subtree
   git subtree split --prefix=packages/laravel-blade -b blade-split-branch

   # Push the split commits to the 'main' branch of the standalone repository
   git push blade-split blade-split-branch:main
   ```

3. **Tag the split commit (CRITICAL for Packagist versioning):**
   > **Note:** Do NOT tag while on the monorepo root `main` branch, as the tag would point to the monorepo commit rather than the subtree split commit. Tag the split commit directly:

   ```bash
   # Create an annotated tag pointing specifically to the split commit
   git tag -a blade-v1.0.0 blade-split-branch -m "Release icon-by-solar/blade v1.0.0"

   # Push the tag as 'v1.0.0' to the standalone repository
   git push blade-split blade-v1.0.0:refs/tags/v1.0.0

   # Delete the temporary local split branch
   git branch -D blade-split-branch
   ```

4. **Tag the Monorepo Root (for GitHub Releases & Reference):**
   ```bash
   git tag -a v1.0.0 -m "Release Icon by Solar v1.0.0"
   git push origin v1.0.0
   ```

5. **Trigger Packagist Update:**
   - If GitHub Webhook is configured, Packagist will automatically detect the new `v1.0.0` tag.
   - Alternatively, visit `https://packagist.org/packages/icon-by-solar/blade` and click the green **Update** button.
   - Verify that Packagist displays `1.0.0` under available releases.

---

## 5. Post-Publication Verification

Once both registries have completed indexing:

### A. Test React Installation from npm:
```bash
npx create-vite test-react-app --template react-ts
cd test-react-app
npm install @icon-by-solar/react
```
Verify that:
- Selective imports work: `import { HomeOutline } from '@icon-by-solar/react/icons/home'`
- Registry pattern works: `import { SolarIcon, registerIcons } from '@icon-by-solar/react'`
- Bundle size remains ~166 kB.

### B. Test Laravel Blade Installation from Packagist:
```bash
composer create-project laravel/laravel test-laravel-app
cd test-laravel-app
composer require icon-by-solar/blade
```
Verify that:
- `<x-icon-by-solar name="home" variant="outline" size="24" />` renders properly.
- All SVGs resolve from the self-contained package resources.
