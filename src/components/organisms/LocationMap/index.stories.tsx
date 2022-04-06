import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';

import MarkerCard from './component';

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

export const UtilitiesMaker: Story = () => {
  const [active, setActive] = useState(false);
  return (
    <div style={{
      background: '#f5ebdf', paddingTop: 350, paddingBottom: 50, position: 'relative',
    }}
    >
      <MarkerCard
        id={1}
        imgSrc="https://source.unsplash.com/random"
        title="Phân khu Waikiki"
        active={active}
        modifiers="utilities"
        utilitiesIcon={{
          number: '1',
          fillColor: '#015581',
        }}
        handleHover={() => setActive(true)}
        handleLeave={() => setActive(false)}
      />
    </div>
  );
};
