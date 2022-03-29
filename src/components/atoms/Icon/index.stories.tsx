import { Story, Meta } from '@storybook/react';
import React from 'react';

import Icon, { iconList, IconName } from '.';

export default {
  title: 'Components/atoms/Icon',
  component: Icon,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['20', '24'],
      },
      defaultValue: '24',
    },
  },
} as Meta;

const listIcon = Object.keys(iconList).map((item) => item as IconName);

export const normal: Story = ({ size }) => (
  <div style={{
    backgroundColor: '#ddd',
    padding: 10,
    display: 'flex',
    flexWrap: 'wrap',
  }}
  >
    {listIcon.map((item, index) => (
      <div key={index.toString()} style={{ marginLeft: 7 }}>
        <Icon size={size} iconName={item} />
      </div>
    ))}
  </div>
);
