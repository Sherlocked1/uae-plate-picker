import type { Meta, StoryObj } from '@storybook/react';
import { PlatePreview } from './PlatePreview';
import { EMIRATES } from '../../data/emirates';
import type { Emirate } from '../../types';
import storyStyles from './PlatePreview.stories.module.css';

/** Minimal plate-shaped SVG used as a demo background for `backgroundImage` stories. */
const DEMO_PLATE_BACKGROUND =
  'data:image/svg+xml,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 220" width="1000" height="220">
      <rect width="1000" height="220" fill="#f8fafc" stroke="#cbd5e1" stroke-width="4" rx="8"/>
      <text x="500" y="120" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#94a3b8">Custom plate image</text>
    </svg>`,
  );

const meta = {
  title: 'Components/PlatePreview',
  component: PlatePreview,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Visual preview of a UAE private license plate. Renders emirate-specific SVG plates by default, with an optional custom background image override.',
      },
    },
  },
  argTypes: {
    value: {
      description: 'The private plate value to display',
      table: { type: { summary: 'PrivatePlateValue' } },
    },
    backgroundImage: {
      control: 'text',
      description: 'Optional URL to a custom plate background image (code and number are overlaid)',
      table: { type: { summary: 'string' } },
    },
    className: {
      description: 'Additional wrapper class name',
      table: { type: { summary: 'string' } },
    },
  },
} satisfies Meta<typeof PlatePreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dubai: Story = {
  args: {
    value: {
      emirate: 'dubai',
      code: 'A',
      number: '12345',
    },
  },
};

export const AbuDhabi: Story = {
  args: {
    value: {
      emirate: 'abu-dhabi',
      code: '5',
      number: '67890',
    },
  },
};

export const Sharjah: Story = {
  args: {
    value: {
      emirate: 'sharjah',
      code: '2',
      number: '54321',
    },
  },
};

export const Ajman: Story = {
  args: {
    value: {
      emirate: 'ajman',
      code: 'BB',
      number: '12345',
    },
  },
};

export const UmmAlQuwain: Story = {
  args: {
    value: {
      emirate: 'umm-al-quwain',
      code: 'A',
      number: '24680',
    },
  },
};

export const RasAlKhaimah: Story = {
  args: {
    value: {
      emirate: 'ras-al-khaimah',
      code: 'B',
      number: '13579',
    },
  },
};

export const Fujairah: Story = {
  args: {
    value: {
      emirate: 'fujairah',
      code: 'C',
      number: '86420',
    },
  },
};

export const EmptyNumber: Story = {
  args: {
    value: {
      emirate: 'dubai',
      code: 'B',
      number: '',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'When the number is empty, a muted placeholder is shown on the plate.',
      },
    },
  },
};

export const WithBackgroundImage: Story = {
  args: {
    value: {
      emirate: 'dubai',
      code: 'A',
      number: '12345',
    },
    backgroundImage: DEMO_PLATE_BACKGROUND,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Pass `backgroundImage` to use your own plate artwork instead of the built-in SVG. Code and number are overlaid automatically.',
      },
    },
  },
};

export const AllEmirates: Story = {
  args: {
    value: {
      emirate: 'dubai',
      code: 'A',
      number: '12345',
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Gallery of all seven emirates using each emirate’s first available code.',
      },
    },
  },
  render: () => (
    <div className={storyStyles.gallery}>
      {EMIRATES.map((emirate) => (
        <PlatePreview
          key={emirate.id}
          value={{
            emirate: emirate.id as Emirate,
            code: emirate.codes[0],
            number: '54321',
          }}
        />
      ))}
    </div>
  ),
};
