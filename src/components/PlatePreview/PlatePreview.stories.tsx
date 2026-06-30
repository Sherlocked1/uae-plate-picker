import type { Meta, StoryObj } from '@storybook/react';
import { PlatePreview } from './PlatePreview';
import { EMIRATES } from '../../data/emirates';
import type { Emirate } from '../../types';

const meta = {
  title: 'Components/PlatePreview',
  component: PlatePreview,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Visual preview of a UAE private license plate. Supports emirate-specific themes and optional background images for real plate assets.',
      },
    },
  },
  argTypes: {
    value: {
      description: 'The private plate value to display',
    },
    backgroundImage: {
      control: 'text',
      description: 'Optional URL to a real plate background image',
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

export const EmptyNumber: Story = {
  args: {
    value: {
      emirate: 'dubai',
      code: 'B',
      number: '',
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
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
