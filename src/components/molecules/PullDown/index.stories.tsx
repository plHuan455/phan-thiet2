import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';

import Pulldown, { OptionType } from '.';

export default {
  title: 'Components/molecules/Pulldown',
  component: Pulldown,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
    isClear: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    error: {
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
    variant: {
      control: {
        type: 'select',
        options: ['normal', 'highLight'],
      },
      defaultValue: 'normal',
    },
  },
} as Meta;

export const Normal: Story = ({
  label,
  error,
  isClear,
  variant,
  disabled,
}) => {
  const [value, setValue] = useState<OptionType>();

  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <Pulldown
        variant={variant}
        label={label}
        error={error}
        value={value}
        placeholder="Ngày đăng mới nhất"
        options={[
          { id: '1', value: '1', label: '1' },
          { id: '2', value: '2', label: '2' },
          { id: '3', value: '3', label: '3' },
          { id: '4', value: '4', label: '4' },
          { id: '5', value: '5', label: '5' },
          { id: '6', value: '6', label: '6' },
          { id: '7', value: '7', label: '7' },
          { id: '8', value: '8', label: '8' },
          { id: '9', value: '9', label: '9' },
        ]}
        empty="No Option"
        handleSelect={(data) => setValue(data)}
        handleClear={() => setValue(undefined)}
        isClear={isClear}
        disabled={disabled}
      />
    </div>
  );
};
