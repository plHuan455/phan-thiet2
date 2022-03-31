import { Story, Meta } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from '.';

import fb from 'assets/images/footer/fb.svg';
import tiktok from 'assets/images/footer/tiktok.svg';
import youtube from 'assets/images/footer/youtube.svg';
import zalo from 'assets/images/footer/zalo.svg';
import logo from 'assets/images/logo_novaland.svg';

export default {
  title: 'Components/templates/Footer',
  component: Footer,
  argTypes: {},
} as Meta;

export const normal: Story = () => (
  <BrowserRouter>
    <Footer
      logo={logo}
      copyRight={{
        title: '@2021. Bản quyền thuộc về Tập đoàn Novaland (Việt Nam). Tất cả các quyền bảo hộ.',
        list: [
          {
            text: 'Chính sách bảo mật',
            url: '/',
          },
          {
            text: 'Điều khoản khách hàng',
            url: '/',
          },
        ],
      }}
      addressList={[
        {
          title: 'CÔNG TY CỔ PHẦN TẬP ĐOÀN ĐẦU TƯ ĐỊA ỐC NOVA',
          subTitle: 'Giấy chứng nhận đăng ký doanh nghiệp số 0301444753 do Sở Kế hoạch và Đầu tư TP.HCM cấp lần đầu ngày 18/09/1992',
          address: 'Tòa nhà văn phòng Novaland, 65 Nguyễn Du, Phường Bến Nghé, Quận 1, Thành phố Hồ Chí Minh',
        },
        {
          title: 'CÔNG TY CỔ PHẦN TẬP ĐOÀN ĐẦU TƯ ĐỊA ỐC NOVA',
          address: '2Bis Nguyễn Thị Minh Khai, Phường Đa Kao, Quận 1',
          contact: {
            label: 'Liên hệ: ',
            value: '0938 221 226',
          },
        },
        {
          title: 'CÔNG TY CỔ PHẦN TẬP ĐOÀN ĐẦU TƯ ĐỊA ỐC NOVA',
          address: '65 Ngô Thì Nhậm, Hoàn Kiếm',
          contact: {
            label: 'Liên hệ: ',
            value: '0938 221 226',
          },
        },
        {
          title: 'CÔNG TY CỔ PHẦN TẬP ĐOÀN ĐẦU TƯ ĐỊA ỐC NOVA',
          address: 'Lạc Long Quân, Phường Tiến Thành',
          contact: {
            label: 'Liên hệ: ',
            value: '0938 221 226',
          },
        },
      ]}
      menuList={{
        title: 'NOVAWORLD PHAN THIET',
        list: [
          {
            text: 'Tin Tức',
            url: '/asdas',
            target: '_self',
          },
          {
            text: 'Liên hệ',
            url: '/',
            target: '_self',
          },
          {
            text: 'Vận Chuyển Và Giao Nhận',
            url: '/',
            target: '_self',
          },
          {
            text: 'Phương Thức Thanh Toán',
            url: '/',
            target: '_self',
          },
        ],
      }}
      divisionList={{
        title: 'CÁC PHÂN KHU',
        list: [
          {
            text: 'The Kingdom',
            url: '/',
            target: '_self',
          },
          {
            text: 'Ocean Residence',
            url: '/',
            target: '_self',
          },
          {
            text: 'The Florida',
            url: '/',
            target: '_self',
          },
          {
            text: 'Festival Town',
            url: '/',
            target: '_self',
          },
        ],
      }}
      serviceList={{
        title: '&nbsp;',
        list: [
          {
            text: 'PGA Golf Villas',
            url: '/',
            target: '_self',
          },
          {
            text: 'Waikiki',
            url: '/',
            target: '_self',
          },
          {
            text: 'Santa Monica',
            url: '/',
            target: '_self',
          },
          {
            text: 'Boutique Hotel',
            url: '/',
            target: '_self',
          },
        ],
      }}
      socialList={{
        title: 'THAM KHẢO THÊM TẠI',
        list: [
          {
            icon: fb,
            text: 'Boutique Hotel',
            url: '/',
            target: '_self',
          },
          {
            icon: youtube,
            text: 'Boutique Hotel',
            url: '/',
            target: '_self',
          },
          {
            icon: zalo,
            text: 'Boutique Hotel',
            url: '/',
            target: '_self',
          },
          {
            icon: tiktok,
            text: 'Boutique Hotel',
            url: '/',
            target: '_self',
          },
        ],
      }}
    />
  </BrowserRouter>
);
