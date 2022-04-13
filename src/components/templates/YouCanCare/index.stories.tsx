import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import YouCanCare from '.';

export default {
  title: 'Components/templates/YouCanCare',
  component: YouCanCare,
  argTypes: {},
} as Meta;

const data = new Array(10).fill({
  imgSrc: 'https://source.unsplash.com/random',
  title: 'The Florida',
  description: 'Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị ..',
});

export const normal: Story = () => (
  <BrowserRouter>
    <div style={{ color: '#005C8F' }}>
      <YouCanCare
        dataList={data}
        title="CÓ THỂ BẠN QUAN TÂM"
        link={{
          text: 'Xem tất cả',
          href: '/',
        }}
      />
    </div>
  </BrowserRouter>
);
