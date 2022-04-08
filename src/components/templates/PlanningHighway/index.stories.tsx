import { Story, Meta } from '@storybook/react';
import React from 'react';

import PlanningHighway from '.';

import imageAirport from 'assets/images/planningHighway/image_airport.png';
import imageAirport2 from 'assets/images/planningHighway/image_airport2.png';

export default {
  title: 'Components/templates/PlanningHighway',
  component: PlanningHighway,
  argTypes: {},
} as Meta;

const dataInfo = {
  san_bay_phan_thiet: {
    imgSrc: imageAirport2,
    content: '&bull; Tái khởi công: 2020</br>&bull; Dự kiến hoàn thành: 2022</br>&bull; Công suất dự kiến: 1 triệu khách/ năm',
  },
  san_bay_long_thanh: {
    imgSrc: imageAirport,
    content: '&bull; Khởi công: 05.01.2021</br>&bull; Dự kiến hoàn thành giai đoạn 1: 2025<br/>&bull; Công suất dự kiến: 25 triệu khách/ năm',
  },
  cao_toc: {
    content: '&bull; Khởi công: 30/09/2020</br>&bull; Dự kiến hoàn thành: 2022</br>&bull; Quy mô: 6 làn xe',
  },
};

const dataScheduleBox = {
  titleScheduleBox: 'VỊ TRÍ VÀNG - MỞ NGÀN CƠ HỘI',
  dataSchedule: [
    {
      time: '15 phút',
      content: 'đến thành phố Phan Thiết',
    },
    {
      time: '1 giờ 45 phút',
      content: 'đến thành phố Hồ Chí Minh qua cao tốc TPHCM-Long Thành-Dầu Giây-Phan Thiết',
    },
    {
      time: '20 phút',
      content: 'đến sân bay Phan Thiết',
    },
    {
      time: '55 phút',
      content: 'đến sân bay Quốc Tế Long Thành',
    },
  ],
};

export const normal: Story = () => (
  <>
    <PlanningHighway
      dataInfo={dataInfo}
      dataScheduleBox={dataScheduleBox}
    />
  </>
);
