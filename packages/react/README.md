# @icon-by-solar/react

Official React components for **Icon by Solar**. Features 3,738 icons across 3 curated styles (**Bold**, **Bold Duotone**, and **Outline**) with full TypeScript types, selective import / tree-shaking support, and Tailwind CSS compatibility.

**Credit Title:** **Icon by Solar**  
*(Original SVG icon designs by 480 Design under CC BY 4.0; React wrapper & tooling under MIT).*

---

## Features

- **3 Visual Styles:** `outline`, `bold`, and `bold-duotone`.
- **1,246 Canonical Icons:** 100% paired across all 3 styles.
- **Tree-Shaking & Selective Imports:** Import individual icon modules from `@icon-by-solar/react/icons/*` with zero bundle bloat.
- **Universal Component API:** `<SolarIcon name="home" variant="outline" size={24} />` with intelligent alias & collision resolution.
- **Tailwind CSS Ready:** Uses `currentColor` by default so classes like `text-blue-600` and `hover:text-blue-700` work immediately.
- **True Duotone Control:** Preserves secondary opacity layer while allowing custom `secondaryColor` and `secondaryOpacity`.
- **Full TypeScript Autocomplete:** All 1,246 icon names typed.

---

## Installation

```bash
# Inside your React project
npm install @icon-by-solar/react
# or
yarn add @icon-by-solar/react
# or
pnpm add @icon-by-solar/react
```

*(For local development/monorepos, install via file path: `npm install /path/to/icon-by-solar/packages/react`)*

---

## Usage

### 1. Universal Component (Dynamic)

Use `<SolarIcon />` (or alias `<IconBySolar />`) when you want a flexible, name-driven icon component:

```tsx
import React from 'react';
import { SolarIcon } from '@icon-by-solar/react';

export default function DashboardHeader() {
  return (
    <div className="flex items-center gap-4">
      {/* Default outline style */}
      <SolarIcon name="home" variant="outline" size={24} />

      {/* Bold with custom color */}
      <SolarIcon name="bell-bing" variant="bold" size={28} color="#0342C9" />

      {/* Bold Duotone with Tailwind utility */}
      <SolarIcon
        name="chat-square-arrow"
        variant="bold-duotone"
        size={24}
        className="text-emerald-500"
      />
    </div>
  );
}
```

### 2. Selective Imports (Optimal Tree-Shaking)

To guarantee that your production bundle only includes the icons you actually use, import directly from the per-icon subpaths:

```tsx
import React from 'react';
import { HomeOutline, HomeBold, HomeBoldDuotone } from '@icon-by-solar/react/icons/home';
import { BellBingBold } from '@icon-by-solar/react/icons/bell-bing';

export function Navigation() {
  return (
    <nav>
      <HomeOutline size={24} className="text-gray-700" />
      <HomeBold size={24} color="#2563EB" />
      <HomeBoldDuotone size={24} secondaryOpacity={0.6} />
      <BellBingBold size={24} className="text-amber-500" />
    </nav>
  );
}
```

---

## Props Reference

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `name` | `IconName` | *(Required)* | Canonical name or alias (e.g. `'home'`, `'camera'`, `'chat-square-arrow'`). |
| `variant` | `'outline' \| 'bold' \| 'bold-duotone'` | `'outline'` | Style variant of the icon. |
| `size` | `number \| string` | `24` | Width and height in px or CSS units. |
| `color` | `string` | `'currentColor'` | Primary color. Set to `'original'` to preserve raw SVG export colors. |
| `secondaryColor` | `string` | *(inherited)* | Custom color for secondary elements in `bold-duotone`. |
| `secondaryOpacity` | `number \| string` | *(from SVG)* | Custom opacity override for duotone secondary elements (e.g. `0.4`). |
| `category` | `string` | `undefined` | Optional category scope for disambiguating duplicate names. |
| `title` | `string` | `undefined` | Accessible SVG `<title>` element. |
| `fallback` | `React.ReactNode` | `null` | Rendered if the icon name is not found. |
| `className` | `string` | `undefined` | CSS class string (e.g. Tailwind utility classes). |

---

## License & Attribution

- **Icon Designs:** CC BY 4.0 by **480 Design**.
- **React Wrapper & Code:** MIT License.
- **Credit Title:** **Icon by Solar**.
