# UAE Private Plate Picker

[![npm version](https://img.shields.io/npm/v/@sherlocked1/uae-plate-picker.svg)](https://www.npmjs.com/package/@sherlocked1/uae-plate-picker)
[![license](https://img.shields.io/npm/l/@sherlocked1/uae-plate-picker.svg)](https://github.com/Sherlocked1/uae-plate-picker/blob/main/LICENSE)

React component library for selecting and previewing UAE **private** license plates. Built with TypeScript, CSS Modules, Vite, and documented with Storybook.

- **npm:** [@sherlocked1/uae-plate-picker](https://www.npmjs.com/package/@sherlocked1/uae-plate-picker)
- **Repository:** [github.com/Sherlocked1/uae-plate-picker](https://github.com/Sherlocked1/uae-plate-picker)

## Features

- Interactive `UaePlatePicker` for emirate, code, and number selection
- `PlatePreview` component with emirate-specific SVG plate renders
- Support for all seven UAE emirates
- Controlled and uncontrolled usage
- Optional custom background image override on `PlatePreview`
- Storybook documentation and interactive examples

## Requirements

**Consumers:** React 18 or 19 (`react` and `react-dom` as peer dependencies).

**Contributors (this repo):** Node.js 18+, pnpm 9+.

## Installation

```bash
npm install @sherlocked1/uae-plate-picker
```

```bash
pnpm add @sherlocked1/uae-plate-picker
```

```bash
yarn add @sherlocked1/uae-plate-picker
```

## Styles

Import the bundled stylesheet once in your app entry (e.g. `main.tsx` or `_app.tsx`):

```tsx
import '@sherlocked1/uae-plate-picker/style.css';
```

Components use CSS Modules internally; the stylesheet is required for correct layout, form styling, and `backgroundImage` overlays on `PlatePreview`.

## Usage

```tsx
import { useState } from 'react';
import { UaePlatePicker } from '@sherlocked1/uae-plate-picker';
import type { PrivatePlateValue } from '@sherlocked1/uae-plate-picker';
import '@sherlocked1/uae-plate-picker/style.css';

function App() {
  const [plate, setPlate] = useState<PrivatePlateValue>({
    emirate: 'dubai',
    code: 'A',
    number: '12345',
  });

  return <UaePlatePicker value={plate} onChange={setPlate} />;
}
```

### Plate preview only

```tsx
import { PlatePreview } from '@sherlocked1/uae-plate-picker';
import '@sherlocked1/uae-plate-picker/style.css';

<PlatePreview
  value={{ emirate: 'abu-dhabi', code: '5', number: '67890' }}
/>
```

### With a custom background image

To use your own plate artwork instead of the built-in SVG, pass a URL to `backgroundImage`. Code and number are overlaid automatically (stylesheet import still required):

```tsx
import { PlatePreview } from '@sherlocked1/uae-plate-picker';
import '@sherlocked1/uae-plate-picker/style.css';

<PlatePreview
  value={{ emirate: 'dubai', code: 'A', number: '12345' }}
  backgroundImage="/custom/dubai-plate.png"
/>
```

## Components

### `UaePlatePicker`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `PrivatePlateValue` | — | Controlled plate value |
| `defaultValue` | `PrivatePlateValue` | Dubai / A / empty number | Initial value when uncontrolled |
| `onChange` | `(value: PrivatePlateValue) => void` | — | Called when selection changes |
| `disabled` | `boolean` | `false` | Disable all inputs |
| `showPreview` | `boolean` | `true` | Show live plate preview |
| `className` | `string` | — | Additional wrapper class |

### `PlatePreview`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `PrivatePlateValue` | required | Plate to render |
| `backgroundImage` | `string` | — | Optional custom plate image URL (overlays code and number) |
| `className` | `string` | — | Additional wrapper class |

### `PrivatePlateValue`

```ts
type PrivatePlateValue = {
  emirate: Emirate;
  code?: string;
  number: string;
};
```

### `Emirate`

```ts
type Emirate =
  | 'abu-dhabi'
  | 'dubai'
  | 'sharjah'
  | 'ajman'
  | 'umm-al-quwain'
  | 'ras-al-khaimah'
  | 'fujairah';
```

## Utilities

These are exported for custom UIs or validation alongside the components:

| Export | Description |
|--------|-------------|
| `EMIRATES` | Config for all emirates (codes, labels, digit limits) |
| `EMIRATE_MAP` | `Record<Emirate, EmirateConfig>` lookup |
| `DEFAULT_PLATE_VALUE` | Default uncontrolled picker value (`dubai` / `A` / `''`) |
| `getEmirateConfig(emirate)` | Config for a single emirate |
| `getDefaultCodeForEmirate(emirate)` | First available code when emirate changes |

Types `EmirateConfig`, `UaePlatePickerProps`, and `PlatePreviewProps` are also exported.

## Plate rendering

Each emirate renders a vector SVG plate with the correct layout, wordmark, and GL Nummernschild-style digits. No external plate image assets are required at runtime.

To swap in a raster plate image instead, use the `backgroundImage` prop on `PlatePreview` (see above).

## Scope

This library currently supports **private plates only**. Commercial, taxi, motorcycle, and diplomatic plate types are out of scope for v0.1.

## Development

```bash
# Install dependencies
pnpm install

# Type check
pnpm typecheck

# Build the library
pnpm build

# Run Storybook
pnpm storybook

# Build Storybook static site
pnpm build:storybook
```

## Publishing

For maintainers preparing a release to the public npm registry:

1. Bump `version` in `package.json`
2. Update `CHANGELOG.md`
3. Run `pnpm build` (also runs automatically via `prepublishOnly`)
4. Ensure you are logged in to npm (`npm login`) under the `@sherlocked1` scope
5. Publish: `pnpm publish --access public`
6. Tag the release on GitHub (`git tag vX.Y.Z && git push origin vX.Y.Z`)

## License

MIT — see [LICENSE](LICENSE).
