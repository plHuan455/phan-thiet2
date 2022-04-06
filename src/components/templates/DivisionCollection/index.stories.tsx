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

export const normal: Story = () => (
  <BrowserRouter>
    <div style={{ height: '100vh' }}>
      <DivisionCollection
        dataList={[
          {
            title: {
              text: 'BERMUDA',
              modifiers: ['400', '24x36', 'deepLemon'],
            },
            btnMore: {
              href: '/',
              text: 'Xem <br /> thêm',
              target: '_self',
              backgroundColor: 'taupeGray',
            },
            thumbnail: layer1,
          },
          {
            title: {
              text: 'SANTORINI',
              modifiers: ['400', '24x36', 'cyan'],
            },
            btnMore: {
              href: '/',
              text: 'Xem <br /> thêm',
              target: '_self',
              backgroundColor: 'deepLemon',
            },
            thumbnail: layer2,
          },
          {
            title: {
              text: 'JAPAN',
              modifiers: ['400', '24x36', 'carminePink'],
            },
            btnMore: {
              href: '/',
              text: 'Xem <br /> thêm',
              target: '_self',
              backgroundColor: 'carminePink',
            },
            thumbnail: layer3,
          },
          {
            title: {
              text: 'EDWARDIAN',
              modifiers: ['400', '24x36', 'copper'],
            },
            btnMore: {
              href: '/',
              text: 'Xem <br /> thêm',
              target: '_self',
              backgroundColor: 'deer',
            },
            thumbnail: layer4,
          },
        ]}
        title={
     {
       text: 'BỘ SƯU TẬP',
       modifiers: ['400', '48x64', 'camel'],
     }
    }
        subTitle={`Chắt lọc tinh hoa kiến trúc của mỗi châu lục, tạo nên một bức tranh <br />
  đa sắc màu, nơi hội tụ tinh hoa của nền văn hóa thế giới`}
      />
    </div>
  </BrowserRouter>
);
