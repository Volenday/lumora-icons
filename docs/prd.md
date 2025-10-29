# PRD: Lumora Icons Component

## Objective

Create a **standardized**, **reusable icon component library** for internal use across Lumora applications. The library will consolidate all Lumora’s custom SVG icons into a single, consistent, and type-safe package that can be easily imported into any React project.

The goal is to ensure visual consistency, simplify icon management, and improve developer productivity by maintaining a centralized, version-controlled source for all icons.

## Core Requirements & Tech Stack

- **Component Name:** LumoraIcons
- **Package Type:** Private NPM Package for GitHub Packages
- **Language:** TypeScript
- **Framework:** ReactJS
- **UI Libraries:** MUI
- **Styling:** Inline SVG using React Component
- **Icon Format:** SVG

## Feature Checklist

The Lumora Icons library MUST include the following features:

- **Icon Management:**
  - Each icon should be a standalone React component, following a consistent naming convention (e.g., `User`, `Settings`, `Search`).
  - Icons must be easily importable individually (e.g., `import { User } from '@volenday/lumora-icons-component'`).
  - Support tree-shaking, ensuring only imported icons are bundled.
  - Allow **customizable size**, **color**, and **className** via props.
  - Optional ARIA accessibility support (e.g., `aria-label`, `role="img"`).
- **Design Consistency:**
  - Icons must follow Lumora’s `design system` for stroke width, corner radius, and color.
  - Support both `outline` and `filled` variants if applicable (e.g., UserOutline and UserFilled).
  - Follow pixel-perfect design for 24x24 grid baseline (scalable to other sizes via `size` prop).
- **Development Workflow**
  - Maintain all SVG source files under `/src/assets/icons`.
  - Automatically convert SVGs to React components using a build script (e.g., `svgr`).
  - Include a lint and validation step to ensure proper icon format and naming.
- **Accessibility:**
  - All icons must include appropriate ARIA roles and labels if used independently.
  - Default to `aria-hidden="true"` unless explicitly labeled.

## Component API (Props)

Each icon component must support the following props::

- **size:** `number` or `string` - Sets the icon’s width and height (e.g., `24`, `32`, or `'1.5rem'`). Default is `24`
- **color:** `string` - Sets the icon's stroke or fill color
- **className:** `string` - Allows applying custom CSS classes.
- **title?:** `string` - Accessible label for screen readers (sets `<title>` tag).
- **ariaHidden?:** `boolean` - Hides icon from accessibility tree unless labeled. Default is `true`.

## Component States & UX

Since icons are static, the focus is on display consistency and flexibility, not interactive states. However:

- **Default State:** The icon renders at 24x24 with `currentColor`
- **Theming Support:** Icons should inherit color from CSS or theme context when using `currentColor`.
