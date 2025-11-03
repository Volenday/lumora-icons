# Lumora Icons Component Library

Private React + TypeScript icon component library for Lumora, published as `@volenday/lumora-icons-component`.

## Install

### GitHub Packages

```bash
npm config set @volenday:registry https://npm.pkg.github.com/
npm install @volenday/lumora-icons
```

### Direct GitHub URL

```bash
npm install git+https://github.com/volenday/lumora-icons.git
```

## Usage

```tsx
import React from 'react';
import { User, Settings } from '@volenday/lumora-icons';

export default function Example() {
	return (
		<div>
			<User size={24} color="#0ea5e9" title="User" />
			<Settings size="1.5rem" className="text-gray-500" ariaHidden />
		</div>
	);
}
```

-   `size`: number or string, width/height (default `24`)
-   `color`: stroke/fill color (default `currentColor`)
-   `className`: additional class names
-   `title`: accessible label (renders `<title>`)
-   `ariaHidden`: hides from a11y tree when true and no title (default `true`)

Icons are tree-shakable; import only what you use.

## Development

### Add or update icons

1. Add 24x24 SVGs to `src/assets/icons` using kebab-case filenames (e.g., `user-add.svg`)
2. Ensure the SVGs follow these rules:
    - `viewBox="0 0 24 24"`
    - `stroke="currentColor"`
    - `fill="none"` unless explicitly needed
    - No inline colors other than `currentColor`
3. Validate SVGs:

```bash
npm run icons:lint
```

4. Generate React components and exports:

```bash
npm run icons:generate
```

-   Components are emitted to `src/icons` in PascalCase (e.g., `user-add.svg` → `UserAdd.tsx`)
-   `src/index.ts` is auto-updated with named exports for all icons

Note: Non-icon exports (if any) may still be added manually to `src/index.ts`.

### Remove icons

1. Delete the SVG from `src/assets/icons`
2. Delete the corresponding TSX component in `src/icons` (e.g., `UserAdd.tsx`)
3. Regenerate exports:

```bash
npm run icons:generate
```

4. Update downstream apps to remove any imports/usages of the removed icon

## Build

```bash
npm run build
```

Outputs:

-   `dist/index.es.js`
-   `dist/index.cjs.js`
-   `dist/index.d.ts`

## Peer Dependencies

-   react ^19
-   react-dom ^19

## Notes

-   Icons use `currentColor` by default and work seamlessly with MUI or CSS-in-JS themes.
-   Each icon is a standalone component to support tree-shaking.
