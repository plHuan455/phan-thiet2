/* eslint-disable react-hooks/rules-of-hooks */
import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Detail from '.';

import useScript from 'hooks/useScript';

export default {
  title: 'Components/templates/Detail',
  component: Detail,
  argTypes: {},
} as Meta;

export const normal: Story = () => {
  useScript('https://sp.zalo.me/plugins/sdk.js');
  return (
    <BrowserRouter>
      <Detail
        hasRelated
        titleRelated="Các sự kiện liên quan"
        textShare="Chia sẻ"
        textTopic="Từ khóa"
        tags={[
          {
            href: '/',
            name: 'Du lịch',
          },
          {
            href: '/',
            name: 'The King Dom',
          },
          {
            href: '/',
            name: 'Tour trọn gói',
          },
        ]}
        timeLeave="1 phút trước"
        dateLeave="22/06/2022"
        label="The Kingdom"
        title="Nova World phan thiết và chuỗi cung cấp tiện ích chăm sóc "
        content={`<p style="text-align: justify;">Nguồn cung mặt h&agrave;ng thịt lợn năm 2019 được cung cấp bởi những doanh nghiệp hoặc c&aacute;c trang trại gia c&ocirc;ng chiếm tỉ lệ cao hơn so với năm 2018.</p>

    <p><img alt="" src="https://nova-consumer-cms.3forcom.net/storage/upload/media/trang-trai.jpg" /></p>
    
    <p>Bộ C&ocirc;ng thương cho biết, trong 10 ng&agrave;y đầu th&aacute;ng 02/2019, gi&aacute; lợn hơi trong nước tăng so với cuối th&aacute;ng 01/2019. Ng&agrave;y 11/02/2019, tại khu vực miền Bắc, gi&aacute; lợn hơi dao động từ 47.000 - 50.000 đ/kg, tăng 3.000 đ/kg so với cuối th&aacute;ng 01/2019. Gi&aacute; lợn hơi tại miền Trung, T&acirc;y Nguy&ecirc;n phổ biến từ 45.000 - 50.000 đ/kg, tăng 2.000 đ/kg so với cuối th&aacute;ng 01/2019.</p>
    
    <p>Gi&aacute; lợn hơi thương l&aacute;i thu mua tại c&aacute;c khu vực chăn nu&ocirc;i trọng điểm ph&iacute;a Nam hiện trung b&igrave;nh từ 48.000 - 53.000 đ/kg, tăng 3.000 đ/kg so với cuối th&aacute;ng 01/2019. So với c&ugrave;ng kỳ năm 2018, gi&aacute; lợn hơi cao hơn từ 25 - 30%, trong khi gi&aacute; thịt lợn th&agrave;nh phẩm cao hơn từ 7 - 15%. So với cuối năm 2018, hiện gi&aacute; thịt lợn tăng 6 - 12%.</p>
    
    <p>Được biết, gi&aacute; lợn tăng l&agrave; do nhu cầu thị trường tăng trở lại trong khi c&aacute;c c&ocirc;ng ty chăn nu&ocirc;i vẫn đ&oacute;ng cửa. Mặt kh&aacute;c, do nhu cầu cho chế biến v&agrave; ti&ecirc;u d&ugrave;ng tăng, chi ph&iacute; sản xuất (giống, vật tư) tăng kh&aacute; nhiều so với c&ugrave;ng kỳ năm 2018. Nguồn cung mặt h&agrave;ng thịt lợn năm 2019 được cung cấp bởi những doanh nghiệp hoặc c&aacute;c trang trại gia c&ocirc;ng chiếm tỉ lệ cao hơn so với năm 2018. Thậm ch&iacute; c&oacute; những địa phương nguồn cung từ c&aacute;c doanh nghiệp l&ecirc;n đến 80-90%.</p>
    
    <p>Theo Tổng cục Thống k&ecirc;, th&aacute;ng 01/2019, chăn nu&ocirc;i tr&acirc;u, b&ograve; kh&ocirc;ng thuận lợi do ảnh hưởng của thời tiết r&eacute;t đậm, r&eacute;t hại; chăn nu&ocirc;i lợn v&agrave; gia cầm nh&igrave;n chung ph&aacute;t triển ổn định, bảo đảm nguồn cung đ&aacute;p ứng nhu cầu ti&ecirc;u thụ trong dịp Tết Nguy&ecirc;n đ&aacute;n Kỷ Hợi. Ước t&iacute;nh th&aacute;ng 01/2019, đ&agrave;n tr&acirc;u cả nước giảm 2,9% so với c&ugrave;ng kỳ năm 2018; đ&agrave;n b&ograve; tăng 2,8%; đ&agrave;n lợn tăng 3,1%; đ&agrave;n gia cầm tăng 6,3%.</p>`}
      />
    </BrowserRouter>
  );
};
