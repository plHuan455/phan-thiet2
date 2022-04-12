import { Story, Meta } from '@storybook/react';
import React from 'react';

import DivisionSummary from '.';

export default {
  title: 'Components/templates/DivisionSummary',
  component: DivisionSummary,
  argTypes: {},
} as Meta;

const dataDummy = [
  {
    thumbnail: 'https://source.unsplash.com/random',
    title: 'OCEAN GOLF',
    description: 'Sân golf 89ha kề biển theo chuẩn PGA quốc tế tạo nên môi trường sống xanh trong lành, cho cả gia đình cùng trải nghiệm golf thư giãn ngay trước thềm nhà.',
  },
  {
    thumbnail: 'https://source.unsplash.com/random',
    title: 'OCEAN GOLF',
    description: 'Sân golf 89ha kề biển theo chuẩn PGA quốc tế tạo nên môi trường sống xanh trong lành, cho cả gia đình cùng trải nghiệm golf thư giãn ngay trước thềm nhà.',
  },
  {
    thumbnail: 'https://source.unsplash.com/random',
    title: 'OCEAN GOLF',
    description: 'Sân golf 89ha kề biển theo chuẩn PGA quốc tế tạo nên môi trường sống xanh trong lành, cho cả gia đình cùng trải nghiệm golf thư giãn ngay trước thềm nhà.',
  },
  {
    thumbnail: 'https://source.unsplash.com/random',
    title: 'OCEAN GOLF',
    description: 'Sân golf 89ha kề biển theo chuẩn PGA quốc tế tạo nên môi trường sống xanh trong lành, cho cả gia đình cùng trải nghiệm golf thư giãn ngay trước thềm nhà.',
  },
];

export const normal: Story = () => (
  <div style={{ color: '#005C8F' }}>
    <DivisionSummary
      title="NƠI ÔM TRỌN</br>
        CẢ THẾ GIỚI"
      description="Nơi tinh hoa năm Châu hôi tụ với những tiện ích hàng đầu,
        nơi các dãy biệt thự ôm trọn “thế giới”, The Kingdom là
        điểm giao huyết mạch, là trái tim của NovaWorld Phan Thiet."
      data={dataDummy}
    />
  </div>
);
