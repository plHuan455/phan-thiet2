import { Story, Meta } from '@storybook/react';
import React from 'react';

import Text from '.';

export default {
  title: 'Components/atoms/Text',
  component: Text,
  argTypes: {
    sizes: {
      control: {
        type: 'select',
        options: [
          '11x18',
          '12x20',
          '14x20',
          '16x28',
          '20x32',
          '24x36',
        ],
      },
      defaultValue: '14x22',
    },
    text: {
      control: {
        type: 'text',
      },
      defaultValue: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis minus eius vero, non ipsam nostrum. Minus praesentium ad unde, assumenda quam obcaecati vel, fuga magnam in quia libero magni aut?',
    },
    colors: {
      control: {
        type: 'select',
        options: [
          'white',
          'black',
          'davysGrey',
          'raisinBlack',
          'gainsboro',
          'gradientGreen',
          'gradientBlue',
          'gradientBittersweet',
        ],
      },
      defaultValue: 'black',
    },
    fontweight: {
      control: {
        type: 'select',
        options: [
          '100',
          '200',
          '300',
          '400',
          '500',
          '600',
          '650',
          '700',
          '800',
          '900',
        ],
      },
      defaultValue: '400',
    },
    variants: {
      control: {
        type: 'radio',
        options: ['uppercase', 'capitalize', 'underline', 'italic', 'center', 'justify'],
      },
    },
    type: {
      control: {
        type: 'radio',
        options: ['p', 'span', 'div'],
      },
      defaultValue: 'p',
    },
  },
} as Meta;

export const normal: Story = ({
  sizes,
  colors,
  variants,
  text,
  fontweight,
  type,
}) => (
  <Text type={type} modifiers={[colors, variants, sizes, fontweight]}>
    {text}
  </Text>
);
