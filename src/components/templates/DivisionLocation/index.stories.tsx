import { Story, Meta } from '@storybook/react';
import React from 'react';

import DivisionLocation from '.';

export default {
  title: 'Components/templates/DivisionLocation',
  component: DivisionLocation,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: [
          'boutique-hotel',
          'festival-street',
          'festival-town',
          'florida-1',
          'florida-2',
          'the-kingdom',
          'ocean-residence',
          'pga-golf-villas',
          'santa-monica',
          'waikiki',
        ],
      },
      defaultValue: 'boutique-hotel',
    },
  },
} as Meta;

export const normal: Story = ({ type }) => (
  <div style={{ color: '#F0B81C' }}>
    <DivisionLocation
      title="VỊ TRÍ DỰ ÁN"
      titleBox="THE KINGDOM"
      contentBox="Nơi tinh hoa năm châu hội tự với những tiện ích hàng đầu, nơi các dãy biệt thự ôm trọn cả “thế giới”, The Kingdom là điểm giao huyết mạch, là trái tim của NovaWorld Phan Thiet"
      type={type}
    />
  </div>
);
