import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { UaePlatePicker } from './UaePlatePicker';
import { DEFAULT_PLATE_VALUE } from '../../data/emirates';
import type { PrivatePlateValue } from '../../types';

const meta = {
  title: 'Components/UaePlatePicker',
  component: UaePlatePicker,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Interactive picker for UAE private license plates. Select emirate, code, and number with a live plate preview.',
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    showPreview: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof UaePlatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: DEFAULT_PLATE_VALUE,
  },
};

export const WithInitialValue: Story = {
  args: {
    defaultValue: {
      emirate: 'abu-dhabi',
      code: '10',
      number: '98765',
    },
  },
};

export const Controlled: Story = {
  render: function ControlledStory() {
    const [value, setValue] = useState<PrivatePlateValue>({
      emirate: 'sharjah',
      code: '3',
      number: '11111',
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: 360 }}>
        <UaePlatePicker value={value} onChange={setValue} />
        <pre
          style={{
            margin: 0,
            padding: '0.75rem',
            background: '#f4f4f5',
            borderRadius: 6,
            fontSize: '0.8rem',
          }}
        >
          {JSON.stringify(value, null, 2)}
        </pre>
      </div>
    );
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: {
      emirate: 'dubai',
      code: 'Z',
      number: '99999',
    },
    disabled: true,
  },
};

export const WithoutPreview: Story = {
  args: {
    defaultValue: DEFAULT_PLATE_VALUE,
    showPreview: false,
  },
};
