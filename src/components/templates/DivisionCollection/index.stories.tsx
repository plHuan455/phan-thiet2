import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import DivisionCollection from '.';

import layer1 from 'assets/images/divisionCollection/layer1.png';
import layer2 from 'assets/images/divisionCollection/layer2.png';
import layer3 from 'assets/images/divisionCollection/layer3.png';
import layer4 from 'assets/images/divisionCollection/layer4.png';

export default {
  title: 'Components/templates/DivisionCollection',
  component: DivisionCollection,
  argTypes: {},
} as Meta;

export const normal: Story = () => {
  const styles = {
    minHeight: '100vh',
    paddingBottom: 100,
    '--theme': 'rgb(0, 92, 143)',
  };
  return (
    <BrowserRouter>
      <div style={styles}>
        <DivisionCollection
          dataList={[
            {
              title: 'BERMUDA',
              color: 'rgba(0, 92, 143, 1)',
              button: {
                url: '/',
                text: 'Xem thêm',
                target: '_self',
              },
              thumbnail: layer1,
            },
            {
              title: 'SANTORINI',
              color: 'rgba(10, 182, 244, 1)',
              button: {
                url: '/',
                text: 'Xem thêm',
                target: '_self',
              },
              thumbnail: layer2,
            },
            {
              title: 'JAPAN',
              color: 'rgba(231, 73, 77, 1)',
              button: {
                url: '/',
                text: 'Xem thêm',
                target: '_self',
              },
              thumbnail: layer3,
            },
            {
              title: 'EDWARDIAN',
              color: 'rgba(187, 109, 63, 1)',
              button: {
                url: '/',
                text: 'Xem thêm',
                target: '_self',
              },
              thumbnail: layer4,
            },
            {
              title: 'BERMUDA',
              color: 'rgba(0, 92, 143, 1)',
              button: {
                url: '/',
                text: 'Xem thêm',
                target: '_self',
              },
              thumbnail: layer1,
            },
          ]}
          title="BỘ SƯU TẬP"
          description="Chắt lọc tinh hoa kiến trúc của mỗi châu lục, tạo nên một bức tranh đa sắc màu, nơi hội tụ tinh hoa của nền văn hóa thế giới."
        />
      </div>
    </BrowserRouter>
  );
};
