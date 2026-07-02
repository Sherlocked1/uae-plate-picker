# UAE Private Plate Picker

React component library for selecting and previewing UAE **private** license plates. Built with TypeScript, CSS Modules, Vite, and documented with Storybook.

## Features

- Interactive `UaePlatePicker` for emirate, code, and number selection
- `PlatePreview` component with emirate-specific SVG plate renders
- Support for all seven UAE emirates
- Controlled and uncontrolled usage
- Optional custom background image override on `PlatePreview`
- Storybook documentation and interactive examples

## Requirements

- Node.js 18+
- pnpm 9+ (for development of this repo)

**Peer dependencies:** `react` and `react-dom` (^18 or ^19).

## Installation

```bash
pnpm add @sherlocked1/react
```

## Styles

Import the bundled stylesheet once in your app entry (e.g. `main.tsx` or `_app.tsx`):

```tsx
import '@sherlocked1/react/style.css';
```

Components use CSS Modules internally; the stylesheet is required for correct layout and form styling.

## Usage

```tsx
import { useState } from 'react';
import { UaePlatePicker } from '@sherlocked1/react';
import type { PrivatePlateValue } from '@sherlocked1/react';
import '@sherlocked1/react/style.css';

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
import { PlatePreview } from '@sherlocked1/react';
import '@sherlocked1/react/style.css';

<PlatePreview
  value={{ emirate: 'abu-dhabi', code: '5', number: '67890' }}
/>
```

### With a custom background image

To use your own plate artwork instead of the built-in SVG, pass a URL to `backgroundImage`. Code and number are overlaid automatically:

```tsx
<PlatePreview
  value={{ emirate: 'dubai', code: 'A', number: '12345' }}
  backgroundImage="/custom/dubai-plate.png"
/>
```

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

## Components

### `UaePlatePicker`

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `PrivatePlateValue` | — | Controlled plate value |
| `defaultValue` | `PrivatePlateValue` | Dubai / A / empty | Initial value when uncontrolled |
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

## Plate rendering

Each emirate renders a vector SVG plate with the correct layout, wordmark, and GL Nummernschild-style digits. No external plate image assets are required at runtime.

To swap in a raster plate image instead, use the `backgroundImage` prop on `PlatePreview` (see above).

## Scope

This library currently supports **private plates only**. Commercial, taxi, motorcycle, and diplomatic plate types are out of scope for v0.1.

## Publishing

For maintainers preparing a release to the public npm registry:

1. Bump `version` in `package.json`
2. Update `CHANGELOG.md`
3. Run `pnpm build` (also runs automatically via `prepublishOnly`)
4. Ensure you own the `@sherlocked1` npm scope and are logged in (`npm login`)
5. Publish: `pnpm publish --access public`
6. Tag the release on GitHub

## License

MIT — see [LICENSE](LICENSE).
