import { Story, Meta } from '@storybook/react';
import React from 'react';

import UtilityHome from '.';

import img from 'assets/images/utilityHome/image.png';
import icon from 'assets/images/utilityHome/image1.png';

export default {
  title: 'Components/templates/UtilityHome',
  component: UtilityHome,
  argTypes: {},
} as Meta;

const dataDummy = [
  {
    title: 'Lâu đài lửa băng',
    description: 'Hai khu lửa - băng kết hợp quy tụ nhiều trò chơi hấp dẫn như: khu VR game hiện đại, rạp chiếu phim, khu mua sắm, khu dành cho trẻ em và gia đình,cụm nhà hàng F&B...',
    thumbnail: img,
    icon: {
      label: 'Circus Land',
      imgSrc: icon,
    },
  },
  {
    title: 'Lâu đài lửa nóng',
    description: 'Hai khu lửa - băng kết hợp quy tụ nhiều trò chơi hấp dẫn như: khu VR game hiện đại, rạp chiếu phim, khu mua sắm, khu dành cho trẻ em và gia đình, cụm nhà hàng F&B...',
    thumbnail: 'https://source.unsplash.com/random',
    icon: {
      label: 'Circus Land',
      imgSrc: icon,
    },
  },
  {
    title: 'Lâu đài lửa lạnh',
    description: 'Hai khu lửa - băng kết hợp quy tụ nhiều trò chơi hấp dẫn như: khu VR game hiện đại, rạp chiếu phim, khu mua sắm, khu dành cho trẻ em và gia đình, cụm nhà hàng F&B...',
    thumbnail: img,
    icon: {
      label: 'Circus Land',
      imgSrc: icon,
    },
  },
  {
    title: 'Lâu đài lửa xanh',
    description: 'Hai khu lửa - băng kết hợp quy tụ nhiều trò chơi hấp dẫn như: khu VR game hiện đại, rạp chiếu phim, khu mua sắm, khu dành cho trẻ em và gia đình, cụm nhà hàng F&B...',
    thumbnail: 'https://source.unsplash.com/random',
    icon: {
      label: 'Circus Land',
      imgSrc: icon,
    },
  },
  {
    title: 'Lâu đài lửa xanh',
    description: 'Hai khu lửa - băng kết hợp quy tụ nhiều trò chơi hấp dẫn như: khu VR game hiện đại, rạp chiếu phim, khu mua sắm, khu dành cho trẻ em và gia đình, cụm nhà hàng F&B...',
    thumbnail: 'https://source.unsplash.com/random',
    icon: {
      label: 'Circus Land',
      imgSrc: icon,
    },
  },
  {
    title: 'Lâu đài lửa xanh',
    description: 'Hai khu lửa - băng kết hợp quy tụ nhiều trò chơi hấp dẫn như: khu VR game hiện đại, rạp chiếu phim, khu mua sắm, khu dành cho trẻ em và gia đình, cụm nhà hàng F&B...',
    thumbnail: 'https://source.unsplash.com/random',
    icon: {
      label: 'Circus Land',
      imgSrc: icon,
    },
  },
];

export const normal: Story = () => (
  <UtilityHome title="ĐẠI TIỆN ÍCH & HỆ SINH THÁI" listUtilities={dataDummy} />
);
