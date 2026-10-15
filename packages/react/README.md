# @icon-by-solar/react

Official React components for **Icon by Solar**. Features 3,738 icons across 3 curated styles (**Bold**, **Bold Duotone**, and **Outline**) with full TypeScript types, selective import / tree-shaking support, and Tailwind CSS compatibility.

**Credit Title:** **Icon by Solar**  
*(Original SVG icon designs by 480 Design under CC BY 4.0; React wrapper & tooling under MIT).*

---

## Features

- **3 Visual Styles:** `outline`, `bold`, and `bold-duotone`.
- **1,246 Canonical Icons:** 100% paired across all 3 styles.
- **Ultra-Lightweight & Tree-Shakeable:** Modular per-icon modules with `/* @__PURE__ */` annotations and `"sideEffects": false`.
- **Flexible Universal Component API:** `<SolarIcon />` supporting selective registration, direct component props, or dynamic full catalog.
- **Tailwind CSS Ready:** Uses `currentColor` by default so classes like `text-blue-600` and `hover:text-blue-700` work immediately.
- **True Duotone Control:** Preserves secondary opacity layer while allowing custom `secondaryColor` and `secondaryOpacity`.
- **Full TypeScript Autocomplete:** All 1,246 icon names strongly typed.

---

## Bundle Optimization & Tree-Shaking

To prevent bundling all 1,246 icons (~7.2 MB) into applications that only need a handful of icons, `@icon-by-solar/react` provides an optimized modular architecture:

| Import Pattern | Bundle Size (Vite JS + React Runtime) | Gzip Size | Use Case |
| :--- | :---: | :---: | :--- |
| **Selective Imports / Registry** | **~166 kB** | **~54 kB** | Standard production apps (97.7% size reduction!) |
| **Full Catalog (`/all`)** | **~7.5 MB** | **~1.6 MB** | CMS, admin dashboards, or runtime icon pickers |

---

## Environment Support

- **React:** `>=16.8.0 || ^18.0.0 || ^19.0.0`
- **Node.js:** `>=18.0.0`
- **TypeScript:** `>=4.7.0` (Full definitions included)
- **Bundlers:** Vite, Next.js, Remix, Webpack 5, Rollup, Parcel, esbuild

---

## Installation

### Official Registry (After npm Publication)

```bash
# npm
npm install @icon-by-solar/react

# yarn
yarn add @icon-by-solar/react

# pnpm
pnpm add @icon-by-solar/react
```

### Local Workspace / Monorepo / Pre-Publication

```bash
# Install directly from local package directory:
npm install /path/to/icon-by-solar/packages/react

# Or install from packed tarball:
npm install /path/to/icon-by-solar-react-1.0.0.tgz
```

---

## Usage Patterns

### Pattern 1: Selective Imports (Recommended for Maximum Performance)

Import individual icon components directly. Bundlers like Vite, Next.js, and Webpack will tree-shake everything else out of your bundle.

```tsx
import React from 'react';
import { HomeOutline, HomeBold, HomeBoldDuotone } from '@icon-by-solar/react/icons/home';
import { BellBingBold } from '@icon-by-solar/react/icons/bell-bing';

export function Navigation() {
  return (
    <nav className="flex items-center gap-4">
      <HomeOutline size={24} className="text-gray-700" />
      <HomeBold size={24} color="#2563EB" />
      <HomeBoldDuotone size={24} secondaryOpacity={0.6} />
      <BellBingBold size={24} className="text-amber-500" />
    </nav>
  );
}
```

### Pattern 2: Tree-Shakeable `<SolarIcon />` with Selective Registration

If you prefer using `<SolarIcon name="..." />` or dynamic name switching while maintaining optimal bundle size, register only the icons your app uses:

```tsx
import React from 'react';
import { SolarIcon, registerIcons } from '@icon-by-solar/react';
import { SolarHome } from '@icon-by-solar/react/icons/home';
import { SolarChatSquareArrow } from '@icon-by-solar/react/icons/chat-square-arrow';

// Register only icons needed by this module/app (array, object, or varargs)
registerIcons([SolarHome, SolarChatSquareArrow]);

export default function Header() {
  return (
    <header className="flex items-center gap-3">
      <SolarIcon name="home" variant="outline" size={24} />
      <SolarIcon name="home" variant="bold" size={32} color="#0342C9" />
      <SolarIcon name="chat-square-arrow" variant="bold-duotone" size={24} className="text-emerald-500" />
    </header>
  );
}
```

### Pattern 3: Direct Component Prop (Zero Registration)

Pass the icon component directly to `<SolarIcon icon={...} />`:

```tsx
import React from 'react';
import { SolarIcon } from '@icon-by-solar/react';
import { SolarHome } from '@icon-by-solar/react/icons/home';

export function QuickIcon() {
  return <SolarIcon icon={SolarHome} variant="bold-duotone" size={28} />;
}
```

### Pattern 4: Full Catalog Bundle (For Admin & CMS Icon Pickers)

If your app genuinely requires dynamic runtime access to all 1,246 icons (e.g. a visual icon picker in an admin panel):

```tsx
import React from 'react';
import { SolarIcon } from '@icon-by-solar/react/all';

export function DynamicIconPicker({ selectedIconName }: { selectedIconName: string }) {
  // All 1,246 icons are pre-registered
  return <SolarIcon name={selectedIconName} variant="outline" size={24} />;
}
```

---

## Props Reference

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `name` | `IconName` | `undefined` | Canonical name or alias (e.g. `'home'`, `'bell-bing'`, `'chat-square-arrow'`). |
| `icon` | `SolarIconComponent` | `undefined` | Direct icon component for 100% tree-shaking with zero registration. |
| `variant` | `'outline' \| 'bold' \| 'bold-duotone'` | `'outline'` | Style variant of the icon. |
| `size` | `number \| string` | `24` | Width and height in px or CSS units. |
| `color` | `string` | `'currentColor'` | Primary color. Set to `'original'` to preserve raw SVG export colors. |
| `secondaryColor` | `string` | *(inherited)* | Custom color for secondary elements in `bold-duotone`. |
| `secondaryOpacity` | `number \| string` | *(from SVG)* | Custom opacity override for duotone secondary elements (e.g. `0.4`). |
| `category` | `string` | `undefined` | Optional category scope for disambiguating duplicate names. |
| `title` | `string` | `undefined` | Accessible SVG `<title>` element. |
| `fallback` | `React.ReactNode` | `null` | Rendered if the icon name is not registered or found. |
| `className` | `string` | `undefined` | CSS class string (e.g. Tailwind utility classes). |

---

## License & Attribution

- **Icon Designs:** CC BY 4.0 by **480 Design**.
- **React Wrapper & Code:** MIT License.
- **Credit Title:** **Icon by Solar**.
