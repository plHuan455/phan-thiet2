import { Story, Meta } from '@storybook/react';
import React, { useState } from 'react';

import MarkerCard from '.';

import imageCard from 'assets/images/projectMap/imageCard.png';

export default {
  title: 'Components/molecules/MarkerCard',
  component: MarkerCard,
  argTypes: {},
} as Meta;

export const Normal: Story = () => {
  const [active, setActive] = useState(false);
  console.log(active);
  return (
    <div style={{
      maxWidth: 419, background: '#f5ebdf', paddingTop: 400, paddingBottom: 20, paddingLeft: 10, paddingRight: 10,
    }}
    >
      <MarkerCard handleLeave={() => setActive(false)} handleHover={() => setActive(true)} active={active} imgSrc={imageCard} title="Phân khu Waikiki asdkjahskdjhasjd" />
    </div>
  );
};
