import { Story, Meta } from '@storybook/react';
import React from 'react';

import Animate from '.';

export default {
  title: 'Components/organisms/Animate',
  component: Animate,
  argTypes: {
    animate: {
      control: {
        type: 'select',
        options: [
          'zoomIn',
          'move',
          'fadeInBlur',
          'animationFramesLeft',
          'animationFramesRight',
          'beatSmall',
          'fadeInUp',
          'slideInLeft',
          'slideInRight',
          'scaleX',
          'scaleY',
        ],
      },
    },
  },
} as Meta;

export const normal: Story = ({ animate }) => (
  <Animate type={animate}>
    Animated
  </Animate>
);
