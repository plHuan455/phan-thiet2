import { Story, Meta } from '@storybook/react';
import React from 'react';

import DivisionLocation from '.';

export default {
  title: 'Components/templates/DivisionLocation',
  component: DivisionLocation,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <DivisionLocation
    color="#1B468A"
    title="VỊ TRÍ DỰ ÁN"
    titleBox="THE KINGDOM"
    contentBox="Nơi tinh hoa năm châu hội tự với những tiện ích hàng đầu, nơi các dãy biệt thự ôm trọn cả “thế giới”, The Kingdom là điểm giao huyết mạch, là trái tim của NovaWorld Phan Thiet"
  />
);
