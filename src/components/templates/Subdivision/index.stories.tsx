import { Story, Meta } from '@storybook/react';
import React from 'react';

import Subdivision from '.';

export default {
  title: 'Components/templates/Subdivision',
  component: Subdivision,
  argTypes: {},
} as Meta;

const list = new Array(9).fill({
  imgSrc: 'https://source.unsplash.com/random',
  title: 'The Florida',
  description: 'Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị ..',
});

export const normal: Story = () => (
  <Subdivision
    title="DANH SÁCH PHÂN KHU"
    list={list}
    btn={{
      text: 'XEM THÊM',
      url: '/',
    }}
  />
);
