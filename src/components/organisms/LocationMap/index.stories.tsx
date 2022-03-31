import { Story, Meta } from '@storybook/react';
import React from 'react';

import LocationMap from '.';

import { listDivisionDummy } from 'assets/dataDummy/projectMap';

export default {
  title: 'Components/organisms/LocationMap',
  component: LocationMap,
  argTypes: {
    isHome: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} as Meta;

export const Normal: Story = () => (
  <div style={{ background: '#f5ebdf' }}>
    <LocationMap
      listDivision={listDivisionDummy}
    />
  </div>

);
