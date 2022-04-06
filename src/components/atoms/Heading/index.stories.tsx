import { Story, Meta } from '@storybook/react';
import React from 'react';

import Heading from '.';

export default {
  title: 'Components/atoms/Heading',
  component: Heading,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
      defaultValue: 'h1',
    },
    size: {
      control: {
        type: 'select',
        options: ['default', '64x84', '40x56', '28x40'],
      },
    },
    fontWeight: {
      control: {
        type: 'select',
        options: [
          '100',
          '200',
          '300',
          '400',
          '500',
          '600',
          '700',
          '800',
          '900',
        ],
      },
      defaultValue: '400',
    },
    color: {
      control: {
        type: 'select',
        options: [
          'davysGrey',
          'arsenic',
          'white',
          'gradientGreen',
          'gradientBlue',
          'gradientBittersweet',
        ],
      },
      defaultValue: 'arsenic',
    },
    text: {
      control: {
        type: 'text',
      },
      defaultValue: 'But I must explain to',
    },
    style: {
      control: {
        type: 'select',
        options: ['uppercase', 'capitalize', 'underline', 'italic', 'center'],
      },
      defaultValue: 'uppercase',
    },
    font: {
      control: {
        type: 'select',
        options: ['default', 'fontOswald'],
      },
      defaultValue: 'default',
    },
  },
} as Meta;

export const normal: Story = ({
  size,
  type,
  color,
  fontWeight,
  style,
  text,
  font,
}) => (
  <Heading type={type} modifiers={[color, fontWeight, style, size, font]}>
    {text}
  </Heading>
);
