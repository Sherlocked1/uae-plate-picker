import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { UaePlatePicker } from './UaePlatePicker';
import { DEFAULT_PLATE_VALUE } from '../../data/emirates';
import type { PrivatePlateValue } from '../../types';
import storyStyles from './UaePlatePicker.stories.module.css';

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
    value: {
      description: 'Controlled plate value',
      table: { type: { summary: 'PrivatePlateValue' } },
    },
    defaultValue: {
      description: 'Initial value when uncontrolled',
      table: { type: { summary: 'PrivatePlateValue' }, defaultValue: { summary: 'Dubai / A / empty' } },
    },
    onChange: {
      description: 'Called when the selection changes',
      table: { type: { summary: '(value: PrivatePlateValue) => void' } },
    },
    disabled: {
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
    },
    showPreview: {
      control: 'boolean',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'true' } },
    },
    className: {
      description: 'Additional wrapper class name',
      table: { type: { summary: 'string' } },
    },
  },
} satisfies Meta<typeof UaePlatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: DEFAULT_PLATE_VALUE,
  },
  parameters: {
    docs: {
      description: {
        story: 'Uncontrolled picker with default Dubai plate value.',
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: 'Uncontrolled picker with a pre-filled Abu Dhabi plate.',
      },
    },
  },
};

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Controlled usage with `value` and `onChange`. The JSON block below reflects the current plate state.',
      },
    },
  },
  render: function ControlledStory() {
    const [value, setValue] = useState<PrivatePlateValue>({
      emirate: 'sharjah',
      code: '3',
      number: '11111',
    });

    return (
      <div className={storyStyles.controlledLayout}>
        <UaePlatePicker value={value} onChange={setValue} />
        <pre className={storyStyles.valueOutput}>{JSON.stringify(value, null, 2)}</pre>
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
  parameters: {
    docs: {
      description: {
        story: 'All form controls are disabled; the preview remains visible.',
      },
    },
  },
};

export const WithoutPreview: Story = {
  args: {
    defaultValue: DEFAULT_PLATE_VALUE,
    showPreview: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Form-only layout without the live plate preview section.',
      },
    },
  },
};
