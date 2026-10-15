# Icon by Solar — Catalog & Inventory

Official preview catalog and inventory for **Icon by Solar**. This directory is generated deterministically from the original SVGs in `Bold/`, `Bold Duotone/`, and `Outline/`. **The source SVGs are left 100% intact and untouched.**

**Credit Title:** **Icon by Solar**  
*(Artwork by 480 Design under CC BY 4.0; Code & Tooling under MIT)*

---

## Files in this Directory

- **`catalog.html`**: A self-contained, responsive preview application.
  - Groups icons into **37 distinct category sections** with clean visual dividers and counters (e.g. `Arrows (67)`).
  - Includes a sticky **Category Quick-Jump Navigation bar** to navigate immediately to any category.
  - Features high-contrast rendering for **Outline icons** (recoloring white preview paths to `#1C274C` in the preview while keeping the source SVG untouched).
  - Provides a **Light / Dark theme toggle** and dual-contrast preview modal.
  - Generates ready-to-use **React JSX**, **Laravel Blade**, and **raw SVG** copy snippets.
  - Runs completely offline without any backend server.
- **`inventory.json`**: Complete JSON inventory mapping each style, category, original name, canonical slug, and file path.
- **`validation.md`**: Detailed validation report documenting XML checks, viewBox compliance, variant pairing (100%), and canonical aliasing notices.

---

## Regenerating the Catalog

From the project root, execute:

```sh
python3 tools/build_catalog.py
```

To run all automated validations and tests:

```sh
./tests/run_all_tests.sh
```

---

## Outline Contrast & Source File Preservation

- **Source SVG Status:** All 1,246 Outline SVGs in `Outline/` contain their original export colors (`white`, `#FEFEFF`, `#FBFCFF`). These files remain completely untouched.
- **Catalog Preview Engine:** The preview generator dynamically maps white preview strokes to `#1C274C` on cards to ensure crystal-clear visibility on light backgrounds.
- **Runtime Packages:** Both `@icon-by-solar/react` and `icon-by-solar/blade` map fills and strokes to `currentColor` by default, ensuring full compatibility with Tailwind CSS and custom theme colors.
