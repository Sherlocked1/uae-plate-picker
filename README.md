# UAE Private Plate Picker

React component library for selecting and previewing UAE **private** license plates. Built with TypeScript, CSS Modules, Vite, and documented with Storybook.

## Features

- Interactive `UaePlatePicker` for emirate, code, and number selection
- `PlatePreview` component with emirate-specific visual themes
- Support for all seven UAE emirates
- Controlled and uncontrolled usage
- Image-ready extension points for real plate assets
- Storybook documentation and interactive examples

## Requirements

- Node.js 18+
- pnpm 9+

This project uses **pnpm only**. Do not use npm or yarn.

## Installation

```bash
pnpm add @uae-plate-picker/react
```

## Usage

```tsx
import { UaePlatePicker } from '@uae-plate-picker/react';
import type { PrivatePlateValue } from '@uae-plate-picker/react';

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
import { PlatePreview } from '@uae-plate-picker/react';

<PlatePreview
  value={{ emirate: 'abu-dhabi', code: '5', number: '67890' }}
/>
```

### With a real plate background image

When you have official plate images, pass them via emirate config or the preview prop:

```tsx
<PlatePreview
  value={{ emirate: 'dubai', code: 'A', number: '12345' }}
  backgroundImage="/assets/plates/dubai-private.png"
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
| `backgroundImage` | `string` | — | Optional plate image URL |
| `className` | `string` | — | Additional wrapper class |

### `PrivatePlateValue`

```ts
type PrivatePlateValue = {
  emirate: Emirate;
  code?: string;
  number: string;
};
```

## Adding real plate images

Plate images live in [`src/assets/plates/`](src/assets/plates/) and are wired automatically via [`src/assets/plates/index.ts`](src/assets/plates/index.ts).

| File | Emirate |
|------|---------|
| `abu_dhabi.png` | Abu Dhabi |
| `dubai.png` | Dubai |
| `sharjah.png` | Sharjah |
| `ajman.png` | Ajman |
| `umm_al_quwain.png` | Umm Al Quwain |
| `ras_al_khaimah.png` | Ras Al Khaimah |
| `fujairah.png` | Fujairah |

To replace a plate image, drop a new PNG into that folder (keep the same filename) and rebuild. You can also override per-instance:

```tsx
<PlatePreview
  value={{ emirate: 'dubai', code: 'A', number: '12345' }}
  backgroundImage="/custom/dubai.png"
/>
```

## Scope

This library currently supports **private plates only**. Commercial, taxi, motorcycle, and diplomatic plate types are out of scope for v0.1.

## License

MIT
