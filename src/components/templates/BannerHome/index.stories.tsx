import { Story, Meta } from '@storybook/react';
import React from 'react';

import BannerHome, { CardBanner } from '.';

import dataDummy from 'assets/dataDummy/banner';

export default {
  title: 'Components/templates/BannerHome',
  component: BannerHome,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BannerHome
    {...dataDummy}
  />
);

export const cardBanner: Story = () => (
  <div style={{ padding: '30px', background: '#b39557' }}>
    <div style={{ width: '257px' }}>
      <CardBanner
        {...dataDummy.list[0]}
      />
    </div>
  </div>
);
