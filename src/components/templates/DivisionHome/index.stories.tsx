import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import DivisionHome from '.';

export default {
  title: 'Components/templates/DivisionHome',
  component: DivisionHome,
  argTypes: {},
} as Meta;

const dataList = new Array(9).fill({
  imgSrc: 'https://source.unsplash.com/random',
  title: 'The Florida',
  description: 'Ocean Residence kiến tạo nơi đáng  sống mới cho cư dân khi tận hưởng giá trị',
  href: '/',
  target: '_self',
});

export const normal: Story = () => (
  <BrowserRouter>
    <DivisionHome
      dataList={dataList}
      title="PHÂN KHU NOVAWORLD PHAN THIET"
      btnMore={{
        label: 'Xem tất cả',
        href: '/',
        target: 'self',
      }}
    />

  </BrowserRouter>
);
